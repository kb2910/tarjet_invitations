#!/bin/bash

# Nombre del proyecto
PROJECT_NAME="invitacion-animada"

echo "🚀 Iniciando la creación del proyecto: $PROJECT_NAME"

# 1. Crear proyecto Vite con React y TypeScript
npm create vite@latest $PROJECT_NAME -- --template react-ts

# 2. Entrar al directorio
cd $PROJECT_NAME

# 3. Instalar dependencias base
echo "📦 Instalando dependencias de React..."
npm install

# 4. Instalar Framer Motion (para animaciones) y Lucide React (iconos)
echo "✨ Instalando Framer Motion y Lucide..."
npm install framer-motion lucide-react

# 5. Instalar y configurar Tailwind CSS
echo "🎨 Configurando Tailwind CSS..."
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 6. Configurar el archivo tailwind.config.js
cat <<EOF > tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#D4AF37',
        'ivory': '#FFFFF0',
      },
    },
  },
  plugins: [],
}
EOF

# 7. Configurar index.css con las directivas de Tailwind
cat <<EOF > src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #fdfcf0;
  margin: 0;
  font-family: 'Inter', sans-serif;
}
EOF

echo "✅ ¡Todo listo! Para comenzar:"
echo "cd $PROJECT_NAME"
echo "npm run dev"