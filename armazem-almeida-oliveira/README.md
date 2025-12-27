<div align="center">

# 🏗️ Armazém Almeida Oliveira

### 🧱 E-commerce de Materiais de Construção

_Desenvolvido com React, TypeScript e Vite como projeto de aprendizado_

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[📱 Demo Online](#) • [📖 Documentação](#-como-rodar-o-projeto-localmente) • [🔐 Admin](#-acesso-administrativo)

![Preview](https://via.placeholder.com/800x400/F97316/FFFFFF?text=Armazem+Almeida+Oliveira)

</div>

---

## 💡 Sobre o Projeto

Este é um **projeto de aprendizado pessoal** onde apliquei meus conhecimentos em desenvolvimento frontend moderno para criar um e-commerce completo para a minha loja de materiais de construção.

### 🎯 Objetivos de Aprendizado

```
✅ Componentização e arquitetura React
✅ Gerenciamento de estado com Context API
✅ Tipagem estática com TypeScript
✅ Design responsivo e mobile-first
✅ Integração com API REST
✅ Autenticação e rotas protegidas
✅ SEO e otimização de performance
✅ PWA e funcionalidade offline
✅ Deploy em produção
```

---

## ⚡ Features

<table>
<tr>
<td width="50%">

### 🛒 Para Clientes

- 🏠 **Home** - Página inicial acolhedora
- 📦 **Produtos** - Catálogo completo com imagens
- 🛍️ **Carrinho** - Gerenciamento de compras
- 📱 **Responsivo** - Funciona em todos dispositivos
- 🔍 **SEO** - Otimizado para buscas
- 📲 **PWA** - Instalável como app

</td>
<td width="50%">

### 🔐 Para Administração

- 🔒 **Login** - Área protegida por senha
- ➕ **Adicionar** - Cadastrar novos produtos
- ✏️ **Editar** - Atualizar informações
- 🗑️ **Excluir** - Remover produtos
- 👁️ **Visualizar** - Tabela de estoque
- 🚪 **Logout** - Sair com segurança

</td>
</tr>
</table>

---

## 🛠️ Stack Tecnológica

<div align="center">

| Frontend     | Backend     | Ferramentas  | Deploy |
| ------------ | ----------- | ------------ | ------ |
| React 19.2   | JSON Server | Vite         | Vercel |
| TypeScript   | Axios       | Tailwind CSS | -      |
| React Router | -           | React Helmet | -      |
| Context API  | -           | PWA Plugin   | -      |

</div>

### 📦 Dependências Principais

```json
{
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "react-router-dom": "^7.11.0",
  "typescript": "~5.9.3",
  "tailwindcss": "^4.1.18",
  "axios": "^1.13.2",
  "react-helmet-async": "^2.0.5"
}
```

---

## 📁 Estrutura do Projeto

```
📦 armazem-almeida-oliveira
├── 📂 src
│   ├── 📂 api              # Serviços de integração
│   │   └── produtos.ts
│   ├── 📂 components       # Componentes reutilizáveis
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Layout/
│   │   └── ProductCard/
│   ├── 📂 context          # Estado global
│   │   └── CarrinhoContext.tsx
│   ├── 📂 hooks            # Hooks customizados
│   │   └── useMediaQuery.ts
│   ├── 📂 pages            # Páginas da aplicação
│   │   ├── Admin/          # Painel administrativo
│   │   ├── Carrinho/
│   │   ├── Home/
│   │   ├── Produtos/
│   │   ├── Sobre/
│   │   └── Contato/
│   ├── 📂 routes           # Configuração de rotas
│   ├── 📂 types            # Definições TypeScript
│   ├── 📂 utils            # Funções auxiliares
│   └── 📄 App.tsx          # Componente raiz
├── 📄 db.json              # Banco de dados fake
├── 📄 tailwind.config.js   # Config Tailwind
├── 📄 vite.config.ts       # Config Vite
└── 📄 package.json         # Dependências
```

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos

```bash
Node.js 18+
npm ou yarn
```

### Instalação e Execução

1️⃣ **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/armazem-almeida-oliveira.git
cd armazem-almeida-oliveira
```

2️⃣ **Instale as dependências**

```bash
npm install
```

3️⃣ **Inicie a API fake** _(em um terminal)_

```bash
npm run server
```

> 🌐 API rodando em `http://localhost:5000`

4️⃣ **Inicie o servidor de desenvolvimento** _(em outro terminal)_

```bash
npm run dev
```

> 🚀 App rodando em `http://localhost:5173`

5️⃣ **Build para produção**

```bash
npm run build
```

> 📦 Arquivos gerados em `dist/`

---

## 🔐 Acesso Administrativo

Para gerenciar produtos:

<div align="center">

| Item           | Valor                         |
| -------------- | ----------------------------- |
| 🔗 **Rota**    | `/admin`                      |
| 🔑 **Senha**   | `admin123`                    |
| 🌐 **Exemplo** | `http://localhost:5173/admin` |

</div>

### Funcionalidades Admin

```
📊 Dashboard administrativo
➕ Criar novos produtos
✏️ Editar produtos existentes
🗑️ Excluir produtos
💾 Salvar alterações
🚪 Logout seguro
```

---

## 📱 Progressive Web App (PWA)

O site pode ser instalado como aplicativo:

### Como Instalar

1. 🌐 Acesse o site pelo navegador
2. 📲 Clique no ícone de instalação na barra de endereço
3. ✅ Confirme a instalação
4. 🎉 App disponível na tela inicial!

### Recursos PWA

- ✅ Funciona offline
- ✅ Instalável no dispositivo
- ✅ Ícone personalizado
- ✅ Carregamento instantâneo
- ✅ Notificações (futuro)

---

## 🌐 Deploy na Vercel

O projeto está hospedado na **Vercel** com deploy automático:

### Configuração

```yaml
Framework: Vite
Build Command: npm run build
Output Directory: dist
Node Version: 18.x
```

### Deploy Automático

```bash
# Conecte seu repositório GitHub à Vercel
# Cada push na branch main dispara novo deploy
# URL: https://seu-projeto.vercel.app
```

---

## 🎨 Paleta de Cores

<div align="center">

| Cor               | Hex       | Uso                |
| ----------------- | --------- | ------------------ |
| 🟠 **Primary**    | `#F97316` | Laranja - destaque |
| 🔵 **Secondary**  | `#2563EB` | Azul - ações       |
| ⚫ **Neutral**    | `#6B7280` | Cinza - textos     |
| ⚪ **Background** | `#F9FAFB` | Fundo claro        |

</div>

---

## 📸 Screenshots

<div align="center">

### 🏠 Página Inicial

![Home](https://via.placeholder.com/600x300/F97316/FFFFFF?text=Home+Page)

### 🛒 Catálogo de Produtos

![Produtos](https://via.placeholder.com/600x300/2563EB/FFFFFF?text=Produtos)

### 🛍️ Carrinho de Compras

![Carrinho](https://via.placeholder.com/600x300/6B7280/FFFFFF?text=Carrinho)

### 🔐 Painel Admin

![Admin](https://via.placeholder.com/600x300/F97316/FFFFFF?text=Admin+Panel)

</div>

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, aprendi e pratiquei:

### Frontend

- ⚛️ Componentização avançada com React
- 📘 Tipagem estática com TypeScript
- 🎨 Design system com Tailwind CSS
- 🔄 Gerenciamento de estado com Context API
- 🛣️ Navegação com React Router

### Backend & APIs

- 🌐 Consumo de APIs REST com Axios
- 📡 Simulação de backend com JSON Server
- 🔒 Autenticação e controle de acesso
- 💾 Operações CRUD completas

### Performance & SEO

- ⚡ Otimização de build com Vite
- 🔍 SEO com React Helmet Async
- 📱 PWA e Service Workers
- 📦 Code splitting e lazy loading

### DevOps

- 🚀 Deploy automatizado na Vercel
- 🔧 Configuração de CI/CD
- 🌍 Hospedagem em produção
- 📊 Monitoramento de performance

---

## 🔮 Próximos Passos

### Melhorias Planejadas

- [ ] 🔐 Sistema de login com JWT
- [ ] 💳 Integração com gateway de pagamento
- [ ] 📧 Sistema de notificações por email
- [ ] 🖼️ Upload de imagens de produtos
- [ ] 📊 Dashboard com gráficos de vendas
- [ ] 🔍 Busca avançada de produtos
- [ ] ⭐ Sistema de avaliações
- [ ] 📱 App mobile com React Native

---

## 🤝 Contribuindo

Este é um projeto pessoal de aprendizado, mas sugestões são bem-vindas!

```bash
# Fork o projeto
# Crie uma branch: git checkout -b feature/nova-feature
# Commit suas mudanças: git commit -m 'Add nova feature'
# Push para a branch: git push origin feature/nova-feature
# Abra um Pull Request
```

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License - Você pode usar, copiar, modificar e distribuir livremente
```

---

## 👤 Autor

<div align="center">

### Duarte Almeida Oliveira

**Desenvolvedor Frontend em Aprendizado**

[![Email](https://img.shields.io/badge/Email-contato@armazemalmeida.com.br-red?style=for-the-badge&logo=gmail)](mailto:contato@armazemalmeida.com.br)
[![Portfolio](https://img.shields.io/badge/Portfolio-seuportfolio.com-orange?style=for-the-badge&logo=google-chrome)](https://seuportfolio.com)
[![GitHub](https://img.shields.io/badge/GitHub-@seu--usuario-black?style=for-the-badge&logo=github)](https://github.com/seu-usuario)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/seu-perfil)

</div>

---

## 🙏 Agradecimentos

- 🎓 À comunidade React pela documentação excelente
- 💻 Aos criadores do Vite pela ferramenta incrível
- 🎨 À equipe do Tailwind CSS pelo framework fantástico
- 📚 A todos os tutoriais e cursos que me ajudaram nessa jornada

---

<div align="center">

### ⭐ Se este projeto foi útil, considere dar uma estrela!

**Feito com ❤️ e muito ☕ por Duarte Almeida Oliveira**

[⬆ Voltar ao topo](#-armazém-almeida-oliveira)

</div>

---

---

---

<div align="center">

# 🏗️ Armazém Almeida Oliveira

### 🧱 Construction Materials E-commerce

_Built with React, TypeScript and Vite as a learning project_

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[📱 Live Demo](#) • [📖 Documentation](#-how-to-run-locally) • [🔐 Admin](#-admin-access)

![Preview](https://via.placeholder.com/800x400/F97316/FFFFFF?text=Armazem+Almeida+Oliveira)

</div>

---

## 💡 About the Project

This is a **personal learning project** where I applied my knowledge in modern frontend development to create a complete e-commerce for my construction materials store.

### 🎯 Learning Goals

```
✅ React componentization and architecture
✅ State management with Context API
✅ Static typing with TypeScript
✅ Responsive and mobile-first design
✅ REST API integration
✅ Authentication and protected routes
✅ SEO and performance optimization
✅ PWA and offline functionality
✅ Production deployment
```

---

## ⚡ Features

<table>
<tr>
<td width="50%">

### 🛒 For Customers

- 🏠 **Home** - Welcoming landing page
- 📦 **Products** - Complete catalog with images
- 🛍️ **Cart** - Shopping management
- 📱 **Responsive** - Works on all devices
- 🔍 **SEO** - Search optimized
- 📲 **PWA** - Installable as app

</td>
<td width="50%">

### 🔐 For Administration

- 🔒 **Login** - Password protected area
- ➕ **Add** - Register new products
- ✏️ **Edit** - Update information
- 🗑️ **Delete** - Remove products
- 👁️ **View** - Stock table
- 🚪 **Logout** - Secure exit

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

| Frontend     | Backend     | Tools        | Deploy |
| ------------ | ----------- | ------------ | ------ |
| React 19.2   | JSON Server | Vite         | Vercel |
| TypeScript   | Axios       | Tailwind CSS | -      |
| React Router | -           | React Helmet | -      |
| Context API  | -           | PWA Plugin   | -      |

</div>

### 📦 Main Dependencies

```json
{
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "react-router-dom": "^7.11.0",
  "typescript": "~5.9.3",
  "tailwindcss": "^4.1.18",
  "axios": "^1.13.2",
  "react-helmet-async": "^2.0.5"
}
```

---

## 📁 Project Structure

```
📦 armazem-almeida-oliveira
├── 📂 src
│   ├── 📂 api              # Integration services
│   │   └── produtos.ts
│   ├── 📂 components       # Reusable components
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Layout/
│   │   └── ProductCard/
│   ├── 📂 context          # Global state
│   │   └── CarrinhoContext.tsx
│   ├── 📂 hooks            # Custom hooks
│   │   └── useMediaQuery.ts
│   ├── 📂 pages            # Application pages
│   │   ├── Admin/          # Admin panel
│   │   ├── Carrinho/
│   │   ├── Home/
│   │   ├── Produtos/
│   │   ├── Sobre/
│   │   └── Contato/
│   ├── 📂 routes           # Routes configuration
│   ├── 📂 types            # TypeScript definitions
│   ├── 📂 utils            # Helper functions
│   └── 📄 App.tsx          # Root component
├── 📄 db.json              # Fake database
├── 📄 tailwind.config.js   # Tailwind config
├── 📄 vite.config.ts       # Vite config
└── 📄 package.json         # Dependencies
```

---

## 🚀 How to Run Locally

### Prerequisites

```bash
Node.js 18+
npm or yarn
```

### Installation and Execution

1️⃣ **Clone the repository**

```bash
git clone https://github.com/your-username/armazem-almeida-oliveira.git
cd armazem-almeida-oliveira
```

2️⃣ **Install dependencies**

```bash
npm install
```

3️⃣ **Start the fake API** _(in one terminal)_

```bash
npm run server
```

> 🌐 API running at `http://localhost:5000`

4️⃣ **Start development server** _(in another terminal)_

```bash
npm run dev
```

> 🚀 App running at `http://localhost:5173`

5️⃣ **Build for production**

```bash
npm run build
```

> 📦 Files generated in `dist/`

---

## 🔐 Admin Access

To manage products:

<div align="center">

| Item            | Value                         |
| --------------- | ----------------------------- |
| 🔗 **Route**    | `/admin`                      |
| 🔑 **Password** | `admin123`                    |
| 🌐 **Example**  | `http://localhost:5173/admin` |

</div>

### Admin Features

```
📊 Administrative dashboard
➕ Create new products
✏️ Edit existing products
🗑️ Delete products
💾 Save changes
🚪 Secure logout
```

---

## 📱 Progressive Web App (PWA)

The website can be installed as an application:

### How to Install

1. 🌐 Access the website through a browser
2. 📲 Click the installation icon in the address bar
3. ✅ Confirm installation
4. 🎉 App available on home screen!

### PWA Features

- ✅ Works offline
- ✅ Installable on device
- ✅ Custom icon
- ✅ Instant loading
- ✅ Notifications (future)

---

## 🌐 Vercel Deployment

The project is hosted on **Vercel** with automatic deployment:

### Configuration

```yaml
Framework: Vite
Build Command: npm run build
Output Directory: dist
Node Version: 18.x
```

### Automatic Deployment

```bash
# Connect your GitHub repository to Vercel
# Each push to main branch triggers new deployment
# URL: https://your-project.vercel.app
```

---

## 🎨 Color Palette

<div align="center">

| Color             | Hex       | Usage              |
| ----------------- | --------- | ------------------ |
| 🟠 **Primary**    | `#F97316` | Orange - highlight |
| 🔵 **Secondary**  | `#2563EB` | Blue - actions     |
| ⚫ **Neutral**    | `#6B7280` | Gray - text        |
| ⚪ **Background** | `#F9FAFB` | Light background   |

</div>

---

## 📸 Screenshots

<div align="center">

### 🏠 Home Page

![Home](https://via.placeholder.com/600x300/F97316/FFFFFF?text=Home+Page)

### 🛒 Product Catalog

![Products](https://via.placeholder.com/600x300/2563EB/FFFFFF?text=Products)

### 🛍️ Shopping Cart

![Cart](https://via.placeholder.com/600x300/6B7280/FFFFFF?text=Cart)

### 🔐 Admin Panel

![Admin](https://via.placeholder.com/600x300/F97316/FFFFFF?text=Admin+Panel)

</div>

---

## 📚 Key Learnings

Throughout this project development, I learned and practiced:

### Frontend

- ⚛️ Advanced React componentization
- 📘 Static typing with TypeScript
- 🎨 Design system with Tailwind CSS
- 🔄 State management with Context API
- 🛣️ Navigation with React Router

### Backend & APIs

- 🌐 REST API consumption with Axios
- 📡 Backend simulation with JSON Server
- 🔒 Authentication and access control
- 💾 Complete CRUD operations

### Performance & SEO

- ⚡ Build optimization with Vite
- 🔍 SEO with React Helmet Async
- 📱 PWA and Service Workers
- 📦 Code splitting and lazy loading

### DevOps

- 🚀 Automated deployment on Vercel
- 🔧 CI/CD configuration
- 🌍 Production hosting
- 📊 Performance monitoring

---

## 🔮 Next Steps

### Planned Improvements

- [ ] 🔐 JWT authentication system
- [ ] 💳 Payment gateway integration
- [ ] 📧 Email notification system
- [ ] 🖼️ Product image upload
- [ ] 📊 Sales charts dashboard
- [ ] 🔍 Advanced product search
- [ ] ⭐ Review system
- [ ] 📱 Mobile app with React Native

---

## 🤝 Contributing

This is a personal learning project, but suggestions are welcome!

```bash
# Fork the project
# Create a branch: git checkout -b feature/new-feature
# Commit your changes: git commit -m 'Add new feature'
# Push to the branch: git push origin feature/new-feature
# Open a Pull Request
```

---

## 📄 License

This project is under the **MIT** license. See the [LICENSE](LICENSE) file for details.

```
MIT License - You can freely use, copy, modify and distribute
```

---

## 👤 Author

<div align="center">

### Duarte Almeida Oliveira

**Frontend Developer in Training**

[![Email](https://img.shields.io/badge/Email-contato@armazemalmeida.com.br-red?style=for-the-badge&logo=gmail)](mailto:contato@armazemalmeida.com.br)
[![Portfolio](https://img.shields.io/badge/Portfolio-yourportfolio.com-orange?style=for-the-badge&logo=google-chrome)](https://yourportfolio.com)
[![GitHub](https://img.shields.io/badge/GitHub-@your--username-black?style=for-the-badge&logo=github)](https://github.com/your-username)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/your-profile)

</div>

---

## 🙏 Acknowledgments

- 🎓 To the React community for excellent documentation
- 💻 To Vite creators for the amazing tool
- 🎨 To Tailwind CSS team for the fantastic framework
- 📚 To all tutorials and courses that helped me on this journey

---

<div align="center">

### ⭐ If this project was helpful, consider giving it a star!

**Made with ❤️ and lots of ☕ by Duarte Almeida Oliveira**

[⬆ Back to top](#-armazém-almeida-oliveira)

</div>
