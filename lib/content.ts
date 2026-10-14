export const services = [
  ['Revisão de blindagem','Inspeção dos componentes e identificação das necessidades de manutenção.'],
  ['Manutenção e troca de vidros blindados','Avaliação de funcionamento, montagem e condições dos vidros.'],
  ['Diagnóstico de delaminação','Análise de alterações visuais e separação entre camadas do vidro.'],
  ['Eliminação de ruídos e rangidos','Identificação da origem de ruídos e ajustes conforme o diagnóstico.'],
  ['Diagnóstico e correção de infiltrações','Verificação dos pontos de entrada de água e condições de vedação.'],
  ['Inspeção técnica de veículos blindados','Avaliação criteriosa dos conjuntos e dos acabamentos da blindagem.'],
  ['Diagnóstico de falhas elétricas e eletrônicas','Investigação de falhas nos mecanismos e sistemas do veículo.'],
  ['Ajustes de montagem, forros e acabamentos internos','Correções de encaixe e acabamento com atenção aos detalhes.'],
] as const;
export const faqs = [
 ['A SuzanTec atende condomínios em Arujá?','Sim, mediante consulta de disponibilidade, condições do local e viabilidade técnica do serviço. Informe seu condomínio e o problema para avaliarmos a possibilidade.'],
 ['Vocês realizam atendimentos em Mogi das Cruzes?','Atendemos Mogi das Cruzes e a região do Alto Tietê conforme disponibilidade. A modalidade de atendimento é definida após a avaliação inicial.'],
 ['Todo serviço pode ser feito na residência?','Não. Determinados diagnósticos e reparos são elegíveis para atendimento domiciliar. Serviços que exigem equipamentos, estrutura ou condições específicas precisam de atendimento na base técnica.'],
 ['Posso levar meu veículo até Suzano?','Sim. Nossa base está no centro de Suzano. Entre em contato para combinar a avaliação e receber as orientações de acesso.'],
 ['Como funciona a avaliação de um vidro blindado?','Analisamos os sinais relatados, as condições visíveis, o funcionamento e a montagem. A indicação de manutenção ou substituição depende da avaliação técnica; fotografias ajudam no primeiro contato, mas não substituem a inspeção quando necessária.'],
 ['Vocês oferecem leva e traz?','Oferecemos retirada e devolução sob consulta. Disponibilidade, região atendida e condições são alinhadas previamente.'],
 ['Como solicito um orçamento?','Preencha o formulário ou fale conosco pelo WhatsApp. Informe cidade, modelo, ano e o problema observado. A equipe orientará a avaliação e os próximos passos.'],
] as const;
export const education = [
 ['Sinais de delaminação','Manchas, bolhas ou áreas esbranquiçadas entre camadas podem indicar delaminação. Procure avaliação técnica; a aparência isolada não permite concluir sobre a proteção balística.'],
 ['Ruídos em veículos blindados','O peso e os conjuntos adicionais podem exigir atenção a fixações e encaixes. Identificar a origem do ruído é o primeiro passo para um ajuste adequado.'],
 ['Vidros elétricos blindados','Lentidão, travamento ou movimentos irregulares pedem avaliação de mecanismos e componentes elétricos. Evite forçar repetidamente o acionamento.'],
 ['Sinais de infiltração','Umidade nos forros, odor persistente ou água após chuva merecem inspeção das vedações. Resolver a origem ajuda a evitar danos aos acabamentos e componentes.'],
 ['Revisão preventiva','Acompanhar montagem, funcionamento e acabamento permite identificar necessidades de manutenção. A revisão não constitui certificação nem garante proteção balística.'],
] as const;
export function whatsapp(message = 'Olá! Vim pelo site da SuzanTec e gostaria de solicitar uma avaliação.') { return `https://wa.me/5511987576036?text=${encodeURIComponent(message)}`; }
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
