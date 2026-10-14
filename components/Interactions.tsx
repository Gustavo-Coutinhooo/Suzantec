'use client';
import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Menu, X, MessageCircle } from 'lucide-react';
import { services, whatsapp } from '@/lib/content';
export function Navigation() {
 const [open,setOpen] = useState(false);
 return <><button className="menu-button" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav id="navigation" className={open?'navigation open':'navigation'} aria-label="Principal">{[['Serviços','#servicos'],['Atendimento regional','#regiao'],['Sobre','#sobre'],['Dúvidas','#faq']].map(([label,url])=><a key={url} href={url} onClick={()=>setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#orcamento" onClick={()=>setOpen(false)}>Solicitar avaliação <ArrowUpRight size={15}/></a></nav></>;
}
export function QuoteForm() {
 const [status,setStatus]=useState('');
 function submit(event:FormEvent<HTMLFormElement>) {
 event.preventDefault(); const data=new FormData(event.currentTarget);
 const values = ['Nome','Cidade','Modelo do veículo','Ano do veículo','Serviço desejado','Descrição do problema'].map(label=>[label,String(data.get(label)??'').trim()]);
 if(values.some(([,value])=>!value)){setStatus('Preencha todos os campos com as informações solicitadas.');return;}
 const message='Olá! Vim pelo site da SuzanTec e gostaria de solicitar uma avaliação.\n\n'+values.map(([label,value])=>`${label}: ${value}`).join('\n');
 window.open(whatsapp(message),'_blank','noopener,noreferrer'); setStatus('Sua mensagem foi preparada. Continue o atendimento na aba do WhatsApp.');
 }
 return <form onSubmit={submit} className="quote-form"><div className="form-grid">{[['Nome','Seu nome','text'],['Cidade','Cidade de atendimento','text'],['Modelo do veículo','Ex.: SUV, modelo e versão','text'],['Ano do veículo','Ex.: 2022','number']].map(([name,placeholder,type])=><label key={name}>{name}<input required name={name} placeholder={placeholder} type={type} min={type==='number'?1900:undefined} max={type==='number'?new Date().getFullYear()+1:undefined} maxLength={100} autoComplete={name==='Nome'?'given-name':name==='Cidade'?'address-level2':'off'}/></label>)}</div><label><span id="service-label">Serviço desejado</span><select aria-labelledby="service-label" name="Serviço desejado" required defaultValue=""><option value="" disabled>Selecione um serviço</option>{services.map(([name])=><option key={name}>{name}</option>)}<option>Avaliação / outro serviço</option></select></label><label>Descrição do problema<textarea name="Descrição do problema" required maxLength={2000} rows={4} placeholder="Descreva os sinais observados e como podemos ajudar."/></label><p className="form-note">Os dados serão enviados por você pelo WhatsApp. Este formulário não armazena suas informações.</p><button className="button primary" type="submit">ENVIAR PELO WHATSAPP <ArrowUpRight size={18}/></button><p role="status" className="form-status">{status}</p></form>;
}
export function FloatingWhatsApp(){return <a className="floating-whatsapp" href={whatsapp()} target="_blank" rel="noopener noreferrer" aria-label="Falar com a SuzanTec no WhatsApp"><MessageCircle size={24}/><span>Vamos conversar</span></a>}
export function BeforeAfter({before,after}:{before?:string;after?:string}){
 const [position,setPosition]=useState(50);
 if(!before||!after)return null;
 // Somente ativar com fotografias reais comparáveis e autorizadas.
 return <div className="comparison"><div className="comparison-images"><div style={{backgroundImage:`url(${after})`}} role="img" aria-label="Após o serviço"/><div style={{backgroundImage:`url(${before})`,clipPath:`inset(0 ${100-position}% 0 0)`}} role="img" aria-label="Antes do serviço"/></div><label>Comparar antes e depois<input type="range" min="0" max="100" value={position} onChange={e=>setPosition(Number(e.target.value))}/></label></div>;
}
