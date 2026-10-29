# NomadLog — Landing Page (React + Vite)

Landing page moderna, responsiva e otimizada para motores de busca (SEO) e acessibilidade (a11y), construída com **React 19**, **Vite**, **TypeScript**, **Tailwind CSS** e **Lucide React**.

## 🚀 Tecnologias

- **Vite 6** (Build rápido e HMR instantâneo)
- **React 19** + **TypeScript**
- **Tailwind CSS** (Tema escuro e design consistente com a identidade NomadLog)
- **Lucide React** (Ícones modernos e acessíveis)

## 🔍 Otimizações de SEO & Semântica HTML

- **Estrutura Semântica Rigorosa**:
  - `<!DOCTYPE html>` e `<html lang="pt-BR" class="dark scroll-smooth">`
  - Landmarks semânticos nativos: `<header>`, `<nav>`, `<main>`, `<section aria-labelledby="...">`, `<article>`, `<aside>`, `<footer>`.
  - Hiearquia estrita de cabeçalhos: um único `<h1>` por página, seguido ordenadamente por `<h2>` e `<h3>` sem saltos.
  - Tabela comparativa com `<caption>`, `<thead>`, `<tbody>`, `<th scope="col">` e `<th scope="row">`.
  - Componente de FAQ utilizando o elemento nativo `<details name="faq-group">` e `<summary>` (suporte nativo a acordeão mutuamente exclusivo, indexável por robôs de busca e com navegação por teclado).
  - Formulário com elementos acessíveis: `<form role="search">`, `<label htmlFor="...">`, atributos `aria-live="polite"` para o resultado da conversão de moedas.
- **Metatags & Dados Estruturados**:
  - Tags de Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) e Twitter Cards.
  - Metatags de robôs (`robots: index, follow`), canonical URL e meta description rica em palavras-chave.
  - **Schema.org (JSON-LD)**:
    - `SoftwareApplication` / `MobileApplication` (especificando plataforma, recursos offline, precificação).
    - `FAQPage` (habilitando Rich Snippets de perguntas frequentes na página de resultados do Google).
  - Arquivos `robots.txt` e `sitemap.xml` prontos em `/public`.

## 📦 Como Rodar o Projeto

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Para gerar a build de produção otimizada:
   ```bash
   npm run build
   ```

4. Para pré-visualizar a build de produção localmente:
   ```bash
   npm run preview
   ```

