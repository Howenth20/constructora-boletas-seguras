import "./globals.css"; import type {Metadata} from "next";
export const metadata:Metadata={title:"Nexus | Boletas Virtuales",description:"Portal seguro para el personal de construcción"};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}