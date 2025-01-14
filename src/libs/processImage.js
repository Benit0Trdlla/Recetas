import { writeFile } from 'fs/promises';
import path from "path";

export async function processImage(imagen) {
    const bytes = await imagen.arrayBuffer()
    const buffer = Buffer.from(bytes);
    const imagenPath = path.join(process.cwd(), 'public', imagen.name)
    await writeFile(imagenPath, buffer);

    return imagenPath
}