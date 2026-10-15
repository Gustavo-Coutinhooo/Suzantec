import type { Metadata } from 'next';
import './globals.css';
import { siteUrl } from '@/lib/content';
export const metadata:Metadata={metadataBase:siteUrl?new URL(siteUrl):undefined,title:'SuzanTec | Assistência técnica em blindados em Suzano e Alto Tietê',description:'Assistência especializada em veículos blindados no centro de Suzano. Vidros, revisão e diagnósticos. Atendimento domiciliar elegível em Arujá, Mogi das Cruzes e região.',...(siteUrl?{alternates:{canonical:siteUrl}}:{}),openGraph:{title:'SuzanTec — atenção especializada para seu blindado',description:'Precisão técnica e conveniência no Alto Tietê. Base em Suzano e atendimento domiciliar para serviços elegíveis.',locale:'pt_BR',type:'website',...(siteUrl?{url:siteUrl}:{})},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
