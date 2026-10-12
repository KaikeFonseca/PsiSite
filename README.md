# PsiSite

Site público em Next.js com CMS Strapi em monorepo.

## Desenvolvimento

Instale as dependências do site e do CMS:

```bash
npm install
npm --prefix apps/cms install
```

Copie `.env.local.example` para `.env.local` e preencha `STRAPI_API_TOKEN` depois de criar um token no painel do Strapi.

Inicie o CMS:

```bash
npm run cms:dev
```

Acesse `http://localhost:1337/admin`, crie o primeiro usuário administrador e configure o token em **Settings > API Tokens**. Para o token usado pelo site, escolha acesso somente de leitura.

Em outro terminal, inicie o site:

```bash
npm run dev
```

O site ficará em `http://localhost:3000`.

## Conteúdo

No Strapi, publique os conteúdos de:

- Página inicial
- Serviços
- Configurações do site
- Categorias
- Posts

A home usa fallback local enquanto o CMS não tiver conteúdo publicado ou estiver indisponível. Posts publicados aparecem em `/blog` e em `/blog/[slug]`.

## Validação

```bash
npm run build
npm run cms:build
```

Em produção, hospede o Next.js na Vercel e o Strapi separadamente com PostgreSQL e armazenamento persistente para uploads. Configure `STRAPI_URL`, `STRAPI_API_TOKEN` e `NEXT_PUBLIC_SITE_URL` no ambiente da Vercel.
