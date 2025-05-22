// Actividades del curso 2024/2025 obtenidas de Instagram
import type { Activity } from './activities';
// Importamos los datos de post.json para usarlos directamente
import postsData from './post.json';

// Función para extraer un título de la caption
function extractTitle(caption: string): string {
  // Si la caption empieza con emojis y luego texto en mayúsculas, lo usamos como título
  const titleMatch = caption.match(/^[\p{Emoji}\s🇪🇺🇪🇸🫶🏼🤝🏼🖼️👉🏼🗣️🚍💪🏼]+([^.!?\n]+)/u);
  if (titleMatch && titleMatch[1]) {
    // Limitar a 100 caracteres y poner en mayúsculas
    return titleMatch[1].trim().toUpperCase().substring(0, 100);
  }
  
  // Si la caption comienza con "Photo shared by", extraemos la parte relevante
  if (caption.startsWith('Photo shared by')) {
    const parts = caption.split('.');
    if (parts.length > 1) {
      return parts[0].trim().toUpperCase();
    }
  }
  
  // Si no encontramos un título claro, usamos las primeras palabras
  return caption.split('\n')[0].substring(0, 100).trim().toUpperCase();
}

// Función para formatear la fecha
function formatDate(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toISOString().split('T')[0]; // Formato YYYY-MM-DD
}

// Convertir los posts en actividades
export const activities2425: Activity[] = postsData.map((post, index) => ({
  id: 100 + index + 1,
  title: extractTitle(post.caption),
  date: formatDate(post.timestamp),
  content: post.caption.replace(/\n/g, ' ').trim(),
  image: `/img/instagram/instagram_post_${post.id.replace('post', '')}.jpg`,
  year: "24-25",
  permalink: post.permalink
}));
