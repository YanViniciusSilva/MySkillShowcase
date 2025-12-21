# 💼 Portfólio

Portfólio pessoal desenvolvido com Angular para apresentar projetos, habilidades e informações profissionais.

## 🚀 Tecnologias

- **Angular** 16.1.7
- **TypeScript** 5.1.3
- **Tailwind CSS** 3.3.3
- **Nebular** 11.0.0
- **RxJS** 7.8.0
- **Firebase Hosting**

## ✨ Funcionalidades

- 📱 Design responsivo e moderno
- 🎨 Suporte a temas claro/escuro
- 🌐 Multi-idioma (PT-BR / EN)
- 📸 Foto de perfil dinâmica (integração com GitHub API)
- 🎯 Seções organizadas:
  - **Sobre Mim**: Informações pessoais e profissionais
  - **Tecnologias**: Skills e ferramentas
  - **Projetos**: Portfolio de trabalhos realizados
- 💾 Persistência de preferências (tema, idioma, última aba)
- 🔄 Loading screen animado

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/YanViniciusSilva/portifolio.git

# Entre no diretório
cd portifolio

# Instale as dependências
npm install
```

## 🛠️ Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm start
# ou
ng serve

# Acesse http://localhost:4200
```

## 🏗️ Build

```bash
# Build de produção
npm run build
# ou
ng build --configuration production

# Os arquivos serão gerados em dist/portifolio
```

## 🚀 Deploy

```bash
# Deploy para Firebase Hosting
npm run deploy
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── languages/          # Arquivos de tradução
│   ├── pages/              # Páginas/seções do portfólio
│   │   ├── about-me/       # Seção "Sobre Mim"
│   │   ├── tecnologies/    # Seção "Tecnologias"
│   │   └── projects/       # Seção "Projetos"
│   ├── services/           # Serviços (ex: ProfileService)
│   ├── shared-components/  # Componentes compartilhados
│   └── shell/              # Layout principal e navegação
├── assets/                 # Imagens e recursos estáticos
└── environments/           # Configurações de ambiente
```

## 📝 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm start` | Inicia servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run deploy` | Build + Deploy para Firebase |
| `npm test` | Executa testes unitários |

## 🌐 Links

- **Portfólio**: [yansilvadev.com.br/](https://yansilvadev.com.br/)
- **LinkedIn**: [linkedin.com/in/yanviniciussilva](https://www.linkedin.com/in/yanviniciussilva)
- **GitHub**: [github.com/YanViniciusSilva](https://github.com/YanViniciusSilva)

## 📄 Licença

Este projeto está sob a licença especificada no arquivo [LICENSE](LICENSE).

---

Desenvolvido por [Yan Vinicius Silva](https://github.com/YanViniciusSilva)
