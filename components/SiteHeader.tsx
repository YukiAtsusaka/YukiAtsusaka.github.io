import Link from 'next/link';

const links = [
  ['About', '/'],
  ['Research', '/research/'],
  ['Data/Software', '/data-software/'],
  ['Rankings', '/rankings/'],
  ['Teaching', '/teaching/'],
  ['Affiliations', '/affiliations/'],
  ['CV', '/cv/'],
];

export default function SiteHeader() {
  return <header className="site-header"><div className="header-inner"><nav aria-label="Main navigation">{links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav></div></header>;
}
