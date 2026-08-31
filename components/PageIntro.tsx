export default function PageIntro({title, children}:{title:string;children:React.ReactNode}) {
  return <section className="page-intro"><h1><strong>{title}</strong></h1><div>{children}</div></section>;
}
