export default function PageIntro({title, children}:{title:string;children:React.ReactNode}) { return <section className="page-intro"><h1>{title}</h1><div>{children}</div></section>; }
