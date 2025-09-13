const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Função para criar diretórios
function createDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`📁 Criado diretório: ${dirPath}`);
  }
}

// Função para criar arquivos
function createFile(filePath, content) {
  fs.writeFileSync(filePath, content);
  console.log(`📄 Criado arquivo: ${filePath}`);
}

// Criação da estrutura de pastas
createDir('src');

// Arquivo tailwind.config.js
const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`;

createFile('tailwind.config.js', tailwindConfig);

// Arquivo postcss.config.js
const postcssConfig = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`;

createFile('postcss.config.js', postcssConfig);

// Arquivo src/index.css
const indexCss = `@tailwind base;
@tailwind components;
@tailwind utilities;
`;

createFile('src/index.css', indexCss);

// Criar o arquivo de entrada principal src/main.jsx
const mainJsx = `import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`;

createFile('src/main.jsx', mainJsx);

// Criar o componente principal src/App.jsx
const appJsx = `import React from 'react'

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-center p-10">Olá, Mundo com React + Vite + Tailwind!</h1>
    </div>
  )
}

export default App
`;

createFile('src/App.jsx', appJsx);

// Criação do index.html (arquivo base)
const indexHtml = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React + Vite + Tailwind</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;

createFile('index.html', indexHtml);

// Executar npm install para garantir que as dependências sejam instaladas
console.log('🔧 Instalando dependências...');
execSync('npm install', { stdio: 'inherit' });

console.log('✅ Projeto configurado com sucesso!');
console.log('🚀 Para iniciar, execute: npm run dev');
