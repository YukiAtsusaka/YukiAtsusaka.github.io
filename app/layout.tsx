import type {Metadata} from 'next';
import './globals.css';
import SiteHeader from '../components/SiteHeader';
export const metadata:Metadata={title:'Yuki Atsusaka | Political Scientist',description:'Assistant Professor at the University of Houston researching electoral systems, race and representation, and political methodology.',metadataBase:new URL('https://yukiatsusaka.github.io'),openGraph:{title:'Yuki Atsusaka | Political Scientist',description:'Research on electoral systems, race and representation, and political methodology.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader/><main>{children}</main><footer>© {new Date().getFullYear()} Yuki Atsusaka <a href="mailto:atsusaka@uh.edu">atsusaka@uh.edu</a></footer></body></html>}
