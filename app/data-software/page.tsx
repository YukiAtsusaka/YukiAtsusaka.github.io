import PageIntro from '../../components/PageIntro';

const dataItems=[
  ['ARCHIVE','Standardized tabulated results from American ranked-choice voting elections.','https://www.archive-rcv.com/'],
  ['Database of Political Rankings','A database and research resource for political ranking data.','https://political-rankings.github.io/'],
];

const softwareItems=[
  ['logical','R package for computing and visualizing quantitative predictions of logical models.','https://github.com/YukiAtsusaka/logical'],
  ['cWise','R package for analyzing sensitive questions using the crosswise model.','https://www.atsusaka.org/cwise/'],
  ['rankingQ','Methods for producing quantities of interest from rank-order questions.','https://sysilviakim.com/rankingQ/'],
];

function ResourceCards({items}:{items:string[][]}){return <div className="card-list">{items.map(([name,description,url])=><a className="card" href={url} key={name} target="_blank" rel="noreferrer"><h3>{name}</h3><p>{description}</p><span>Visit project →</span></a>)}</div>}

export default function DataSoftware(){return <><PageIntro title="Data & Software"><p>Open data and research software for studying electoral systems, representation, and political methodology.</p></PageIntro><section className="resource-section"><h2>Data</h2><p className="section-description">Public datasets built to support transparent, reproducible research.</p><ResourceCards items={dataItems}/></section><section className="resource-section"><h2>Software</h2><p className="section-description">Open-source R packages for statistical analysis and simulation.</p><ResourceCards items={softwareItems}/></section></>}
