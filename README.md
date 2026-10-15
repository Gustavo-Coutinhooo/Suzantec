# SuzanTec
Landing page institucional em Next.js App Router, TypeScript, Tailwind CSS 4 e Lucide. Sem backend, banco de dados ou armazenamento do formulário.

## Desenvolvimento
Requer Node.js 20.9+ e npm.

```sh
npm ci
cp .env.example .env.local
npm run dev
```
Abra http://localhost:3000. Defina `NEXT_PUBLIC_SITE_URL` com o domínio real (URL HTTPS sem barra final) antes de publicar, para canonical, sitemap e Open Graph. Sem domínio, o sitemap fica vazio, sem inventar endereço.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Estrutura
- `app/page.tsx`: seções, conteúdo institucional e dados estruturados com informações fornecidas.
- `app/globals.css`: identidade visual, responsividade e animações discretas com movimento reduzido.
- `app/layout.tsx`: metadados SEO e idioma.
- `app/sitemap.ts`, `app/robots.ts`: rotas SEO.
- `components/Brand.tsx`: arquivo oficial ou identificação textual provisória.
- `components/Interactions.tsx`: menu móvel, formulário WhatsApp, botão flutuante e comparação antes/depois inativa sem imagens.
- `lib/content.ts`: serviços, FAQ, orientações e gerador de links.
- `public/`: mídia local por categoria.

## Mídias e conteúdo
Adicione o logotipo original em `public/logo/suzantec.png`, sem edição, e refaça o build. Fotografias ilustrativas locais: `public/vehicles/hero.jpg` e `residence.jpg`. A ausência de arquivos é tratada com placeholders. Cadastre a origem/licença no README da pasta. Nesta integração, as fotografias continuam como placeholders; nenhuma imagem ilustrativa foi apresentada como trabalho real.

O portfólio está reservado para fotos e vídeos reais autorizados. Para ativar a comparação, forneça caminhos locais reais e comparáveis aos atributos `before` e `after` de `BeforeAfter`. Não apresentar ilustrações como trabalhos reais. A seção de avaliações permanece oculta; só incluir avaliações recebidas e autorizadas. Não existem notas, certificações ou garantias fictícias.

Todos os campos do formulário são obrigatórios. O ano deve ficar entre 1900 e o próximo ano. Ao enviar, uma nova aba do WhatsApp abre com mensagem estruturada; nenhum dado é salvo. Se o navegador bloquear a aba, habilite pop-ups para o site. Não enviar CPF, placa, endereço residencial ou outros dados desnecessários na descrição.

## Validação e ambiente
A integração foi validada com lint, typecheck, build e testes funcionais no Chromium. Consulte `DELIVERY.md` para resultados e limites, `ENVIRONMENT_SETUP.md` para reproduzir o ambiente e `docs/PULL_REQUEST.md` para a descrição preparada para revisão. O logotipo oficial fornecido pelo proprietário está em `public/logo/suzantec.png`, preservado byte a byte e exibido sem otimização, recorte ou distorção.

## Publicação na Vercel (somente após autorização)
1. Enviar a branch ao GitHub e revisar o pull request.
2. Importar o repositório na Vercel usando o preset Next.js.
3. Configurar `NEXT_PUBLIC_SITE_URL` com o domínio definitivo.
4. Inserir logo e fotografias com licença documentada; executar os três checks.
5. Conferir em dispositivos reais: menu, CTAs, formulário, FAQ, contraste e ausência de rolagem horizontal.
6. Após autorização do proprietário, publicar e configurar domínio/HTTPS. Validar sitemap e cadastrar no Search Console.

Não há implantação automática ou publicação configurada nesta entrega.
