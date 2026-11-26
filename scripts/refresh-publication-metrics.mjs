import { readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const file = new URL("../data/publication-metrics.json", import.meta.url);

export function parseOsfMetric(payload, id) {
  const counts = payload?.meta?.metrics ?? payload?.data?.meta?.metrics;
  if (payload?.data?.id !== id || !Number.isSafeInteger(counts?.views) ||
      !Number.isSafeInteger(counts?.downloads) || counts.views < 0 || counts.downloads < 0) {
    throw new Error("Missing or invalid public OSF counts");
  }
  return { views: counts.views, downloads: counts.downloads };
}

export async function refreshMetrics(previous, fetcher = fetch, now = new Date()) {
  const next = structuredClone(previous);
  for (const [id, entry] of Object.entries(previous)) {
    if (!/^[a-z0-9]{5}_v[1-9][0-9]*$/.test(id)) {
      console.warn("Skipping invalid OSF version ID");
      continue;
    }
    try {
      const url = new URL("https://api.osf.io/v2/preprints/" + id + "/");
      url.searchParams.set("metrics[views]", "total");
      url.searchParams.set("metrics[downloads]", "total");
      const response = await fetcher(url, {
        headers: { Accept: "application/vnd.api+json", "User-Agent": "Academic-publication-metrics/1.0" },
        signal: AbortSignal.timeout(15000)
      });
      if (!response.ok) throw new Error("HTTP " + response.status);
      const counts = parseOsfMetric(await response.json(), id);
      next[id] = { ...entry, ...counts, updated: now.toISOString().slice(0, 10) };
      console.log(id + ": " + (counts.views + counts.downloads) + " reported access events");
    } catch (error) {
      console.warn(id + ": keeping last successful count and date (" + error.message + ")");
    }
  }
  return next;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const previous = JSON.parse(await readFile(file, "utf8"));
  const next = await refreshMetrics(previous);
  await writeFile(file, JSON.stringify(next, null, 2) + "\n");
}
