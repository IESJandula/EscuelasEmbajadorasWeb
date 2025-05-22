import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuración de __dirname para módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer el archivo JSON con los datos de Instagram
const postsDataPath = path.join(__dirname, '../data/post.json');
const postsData = JSON.parse(fs.readFileSync(postsDataPath, 'utf8'));
const posts = postsData;
const outputDir = path.join(__dirname, '../../public/img/instagram');

// Asegurarse de que existe el directorio de salida
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Directorio creado: ${outputDir}`);
}

// Función para descargar una imagen
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(outputDir, filename);
    
    // Si el archivo ya existe, no lo descargamos de nuevo
    if (fs.existsSync(filePath)) {
      console.log(`El archivo ${filename} ya existe, omitiendo descarga...`);
      resolve(filePath);
      return;
    }

    console.log(`Descargando ${url} a ${filePath}...`);
    
    https.get(url, (response) => {
      // Manejar redirecciones
      if (response.statusCode === 302 || response.statusCode === 301) {
        console.log(`Redirigiendo a ${response.headers.location}`);
        downloadImage(response.headers.location, filename)
          .then(resolve)
          .catch(reject);
        return;
      }
      
      // Verificar que la respuesta es correcta
      if (response.statusCode !== 200) {
        reject(new Error(`Error al descargar la imagen. Código: ${response.statusCode}`));
        return;
      }
      
      // Crear stream de escritura
      const fileStream = fs.createWriteStream(filePath);
      
      // Pipe la respuesta al archivo
      response.pipe(fileStream);
      
      // Manejar eventos
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Descarga completada: ${filename}`);
        resolve(filePath);
      });
      
      fileStream.on('error', (err) => {
        fs.unlink(filePath, () => {}); // Eliminar archivo parcialmente descargado
        reject(err);
      });
      
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Procesar cada post
async function processPosts() {
  const downloadPromises = [];
  const imageMapData = {};
  
  posts.forEach((post, index) => {
    // Crear un nombre de archivo para la imagen
    const postId = post.id.replace('post', '');
    const filename = `instagram_post_${postId}.jpg`;
    
    // Guardar la relación entre el post original y el nuevo archivo
    imageMapData[post.id] = {
      originalUrl: post.image,
      localPath: `/img/instagram/${filename}`,
      permalink: post.permalink
    };
    
    // Añadir la promesa de descarga
    downloadPromises.push(downloadImage(post.image, filename));
  });
  
  try {
    // Esperar a que todas las descargas se completen
    await Promise.all(downloadPromises);
    
    // Guardar el mapa de imágenes para referencia futura
    fs.writeFileSync(
      path.join(__dirname, '../data/instagram-images-map.json'), 
      JSON.stringify(imageMapData, null, 2)
    );
    
    console.log('Todas las imágenes han sido descargadas correctamente');
    console.log('Mapa de imágenes guardado en instagram-images-map.json');
  } catch (error) {
    console.error('Error durante la descarga:', error);
  }
}

// Ejecutar el procesamiento
processPosts();
