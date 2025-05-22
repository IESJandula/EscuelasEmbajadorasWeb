/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(4, 4, 133)',     // Azul oscuro para la navegación
        'secondary': 'rgb(255, 217, 3)', // Amarillo para hover
        'text': 'rgb(63, 63, 63)',       // Gris oscuro para texto
        'bg-light': 'rgb(239, 240, 240)' // Gris claro para fondo
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
