import test from "node:test";
import assert from "node:assert/strict";
import { parseOsfMetric, refreshMetrics } from "./refresh-publication-metrics.mjs";
const id="r3nsm_v1";
const payload={data:{id},meta:{metrics:{views:78,downloads:64}}};
test("actual OSF shape and total",()=>assert.deepEqual(parseOsfMetric(payload,id),{views:78,downloads:64}));
test("missing counts, negative counts, wrong ID rejected",()=>{assert.throws(()=>parseOsfMetric({data:{id},meta:{metrics:{views:2}}},id));assert.throws(()=>parseOsfMetric({data:{id},meta:{metrics:{views:-1,downloads:4}}},id));assert.throws(()=>parseOsfMetric(payload,"other_v1"));});
test("fetch failure preserves last valid counts and date",async()=>{const old={[id]:{views:77,downloads:64,updated:"2026-11-25",source:"https://osf.io/preprints/socarxiv/r3nsm_v1"}};assert.deepEqual(await refreshMetrics(old,async()=>({ok:false,status:503}),new Date("2026-11-26")),old);const good=await refreshMetrics(old,async()=>({ok:true,json:async()=>payload}),new Date("2026-11-26"));assert.deepEqual(good[id],{...old[id],views:78,downloads:64,updated:"2026-11-26"});});
