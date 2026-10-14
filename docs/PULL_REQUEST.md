# feat: integrar landing page institucional SuzanTec

Integra a landing page SuzanTec ao repositório inicialmente vazio, com atendimento regional em Suzano e Alto Tietê, oito serviços, FAQ, navegação móvel e formulário que prepara uma mensagem no WhatsApp sem armazenar dados. A branch base contém somente um commit vazio; toda a implementação está na branch de desenvolvimento para revisão.

Mantém imagens e portfólio como placeholders, avaliações ocultas e antes/depois inativo até receber registros reais autorizados. Inclui SEO sem endereço ou avaliações inventadas, documentação de desenvolvimento e instalação reproduzível com lockfile npm. Corrige o nome acessível do seletor de serviço e o aviso do PostCSS.

## Validação
- Instalação limpa com `npm ci --cache /tmp/suzantec-npm-cache`.
- `npm run lint`, `npm run typecheck` e `npm run build` passaram.
- Servidores de desenvolvimento e build validado responderam com a página.
- Chromium: formulário e limites do ano, mensagem WhatsApp interceptada, FAQ, menu móvel, movimento reduzido e ausência de erros JavaScript.
- Sem rolagem horizontal entre 320 e 1440px; CTA principal visível na primeira tela nos três tamanhos móveis testados.
- Robots e sitemap sem domínio fictício.

## Pendências
PNG original do logotipo, fotografias próprias/licenciadas, registros reais autorizados, domínio definitivo e conferência em dispositivos reais. Nenhuma publicação em produção ou configuração Vercel foi realizada. Publicação depende da autorização do proprietário.
