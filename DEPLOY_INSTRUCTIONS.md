# Instruções de Deploy do Trendly Hub

Este documento contém instruções detalhadas para realizar o deploy do Trendly Hub no GitHub e Vercel.

## Pré-requisitos

- Uma conta no [GitHub](https://github.com/)
- Uma conta no [Vercel](https://vercel.com/)
- Git instalado em sua máquina local

## Passo 1: Preparar o Repositório no GitHub

1. Acesse [GitHub](https://github.com/) e faça login na sua conta
2. Clique no botão "+" no canto superior direito e selecione "New repository"
3. Nomeie o repositório como "trendly-hub"
4. Deixe o repositório como "Public"
5. Não inicialize o repositório com README, .gitignore ou licença
6. Clique em "Create repository"

## Passo 2: Preparar os Arquivos Localmente

1. Extraia o arquivo ZIP `trendly-hub.zip` em uma pasta em seu computador
2. Abra um terminal ou prompt de comando e navegue até a pasta extraída

```bash
cd caminho/para/trendly-hub-deploy
```

3. Inicialize um repositório Git local

```bash
git init
```

4. Adicione todos os arquivos ao repositório

```bash
git add .
```

5. Faça o commit inicial

```bash
git commit -m "Initial commit"
```

6. Conecte seu repositório local ao GitHub (substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub)

```bash
git remote add origin https://github.com/SEU_USUARIO/trendly-hub.git
```

7. Envie os arquivos para o GitHub

```bash
git branch -M main
git push -u origin main
```

## Passo 3: Deploy no Vercel

1. Acesse [Vercel](https://vercel.com/) e faça login (você pode usar sua conta GitHub para login)
2. Na dashboard do Vercel, clique em "Add New..." e selecione "Project"
3. Na lista de repositórios, encontre e selecione "trendly-hub"
4. Na tela de configuração do projeto:
   - Framework Preset: selecione "Vite"
   - Build Command: deixe o padrão (`npm run build`)
   - Output Directory: deixe o padrão (`dist`)
   - Install Command: altere para `npm install` ou `pnpm install` (dependendo da sua preferência)
5. Expanda a seção "Environment Variables" se precisar adicionar variáveis de ambiente (não é necessário para a versão atual do Trendly Hub)
6. Clique em "Deploy"

O Vercel iniciará o processo de build e deploy automaticamente. Isso pode levar alguns minutos.

## Passo 4: Acessar o Trendly Hub

Após a conclusão do deploy, o Vercel fornecerá uma URL pública para o seu projeto (geralmente no formato `https://trendly-hub.vercel.app`).

Você pode acessar o Trendly Hub através desta URL em qualquer dispositivo com conexão à internet.

## Funcionalidades do Trendly Hub

O Trendly Hub inclui as seguintes funcionalidades:

1. **Área de Educação**: Visualizador de PDF com tracking de leitura por páginas
2. **Calendário de Conteúdo**: Integrado com os dados do PDF de junho fornecido
3. **Lista de To-Dos**: Gerada automaticamente a partir dos eventos do calendário
4. **Painel de Faturas**: Exibindo próxima cobrança, links de pagamento e histórico

## Credenciais de Teste

Para testar diferentes níveis de acesso:

- **Admin**: Use qualquer e-mail contendo "admin" (ex: admin@example.com)
- **Cliente**: Use qualquer outro e-mail (ex: cliente@example.com)

A senha pode ser qualquer valor durante esta fase de demonstração.

## Suporte e Manutenção

Para atualizar o Trendly Hub após o deploy inicial:

1. Faça as alterações necessárias nos arquivos locais
2. Adicione e faça commit das alterações:
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   ```
3. Envie as alterações para o GitHub:
   ```bash
   git push
   ```

O Vercel detectará automaticamente as alterações e iniciará um novo deploy.

## Recursos Adicionais

- [Documentação do Vercel](https://vercel.com/docs)
- [Documentação do GitHub](https://docs.github.com/en)
- [Documentação do Vite](https://vitejs.dev/guide/)
- [Documentação do React](https://reactjs.org/docs/getting-started.html)
