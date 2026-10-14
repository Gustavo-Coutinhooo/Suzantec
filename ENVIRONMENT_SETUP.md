# Ambiente de desenvolvimento

Use o checkout existente em `/workspace/Suzantec`; não crie Git worktrees sem solicitação explícita do usuário. Leia README.md, DELIVERY.md e AGENTS.md antes de trabalhar. A implementação está na branch `dev/landing-page`; `main` contém somente a base vazia para revisão.

## Instalação verificada
Node.js 20.9+ e npm. Neste ambiente foram usados Node.js 24.19.0 e npm 11.9.0.

```sh
cd /workspace/Suzantec
npm ci --cache /tmp/suzantec-npm-cache
npm run lint
npm run typecheck
npm run build
```

O cache padrão em `/home/agent/.npm` não é gravável neste ambiente; use o cache em `/tmp`. Não é necessário configurar segredos para executar a landing page. O domínio definitivo é opcional durante o desenvolvimento e obrigatório antes da publicação.

## Inicialização verificada
```sh
cd /workspace/Suzantec
npm run dev
```

Reinicie o servidor a cada sessão; processos não fazem parte de snapshots. Uma requisição interna a `http://127.0.0.1:3000` deve retornar HTTP 200 e o conteúdo SuzanTec. Para verificar o build local, execute `npm run build` e `npm start`. Se a porta estiver ocupada por outro processo, use `npm run dev -- --port 3001`; não interrompa serviços de terceiros.

## Rede e configuração
O Git por HTTPS e o registro npm funcionaram com a configuração existente. A abertura de PR pelo CLI exige `api.github.com`, bloqueado na política atual. Adicione esse domínio nas configurações do ambiente preservando as permissões existentes. Não desative o proxy ou a verificação TLS.

A tentativa de salvar `install_script`, `start_skill` e a permissão para `api.github.com` retornou `draft_not_editable`; a configuração não foi salva. Este arquivo preserva as instruções propostas para revisão nas configurações do ambiente.

Não publique em produção sem autorização. Preserve placeholders e avaliações ocultas até receber material autorizado.
