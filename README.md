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

## Opção gratuita de deploy do CMS

Para começar sem custo fixo:

1. Crie um projeto gratuito no [Neon](https://neon.tech) e copie a connection string PostgreSQL.
2. Crie uma conta gratuita no [Cloudinary](https://cloudinary.com) e copie `cloud name`, `API key` e `API secret`.
3. No [Render](https://render.com), escolha **New > Blueprint** e selecione este repositório. O arquivo `render.yaml` cria o Strapi como Web Service Free.
4. Preencha no Render as variáveis secretas `DATABASE_URL`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY` e `CLOUDINARY_API_SECRET`.
5. Após o deploy, abra a URL gerada pelo Render em `/admin` e crie o usuário da sua mãe.
6. Configure `STRAPI_URL` na Vercel com a URL pública do Render e crie um API Token somente de leitura no Strapi. Esse token deve ser salvo como `STRAPI_API_TOKEN` na Vercel, nunca no GitHub.

O plano gratuito do Render pode dormir após 15 minutos sem acesso, causando cerca de um minuto de espera na primeira abertura. O Neon Free inclui 1 GB de PostgreSQL por projeto e pode suspender o banco após inatividade. O Cloudinary mantém as imagens fora do filesystem temporário do Render.
