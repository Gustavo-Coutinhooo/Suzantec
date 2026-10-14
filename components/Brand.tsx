import Image from 'next/image';
import { existsSync } from 'node:fs';
import path from 'node:path';
export default function Brand() {
 const available = existsSync(path.join(process.cwd(),'public/logo/suzantec.png'));
 return <a href="#inicio" className="brand" aria-label="SuzanTec — início">{available ? <Image src="/logo/suzantec.png" alt="Logotipo oficial SuzanTec" width={180} height={70} className="official-logo" /> : <span className="brand-placeholder"><strong>SuzanTec</strong><small>ASSISTÊNCIA EM BLINDADOS</small><span className="sr-only">Espaço reservado para o logotipo oficial</span></span>}</a>;
}
