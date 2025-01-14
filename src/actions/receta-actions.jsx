"use server";
import db from "@/libs/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { unlink } from 'fs/promises';
import cloudinary from "@/libs/cloudinary";
import { processImage } from "@/libs/processImage";


export async function createRecetas(formData) {
    const session = await getServerSession(authOptions);
    // console.log('SESSION', session.user);

    const title = formData.get("title");
    const ingredientes = formData.get("ingredientes");
    const descripcion = formData.get("descripcion");
    const imagen = formData.get("imagen");

    if (!title || !ingredientes || !descripcion) {
        return;
    }

    const imagenPath = await processImage(imagen);

    // Subir una imagen a Cloudinary
    const uploadResult = await cloudinary.uploader
        .upload(imagenPath)
        .catch((error) => {
            console.log(error);
        });

    if (uploadResult) {
        await unlink(imagenPath);
    }

    const userId = await db.usuario.findUnique({ where: { email: session.user.email }, select: { id_usuario: true } });

    const newReceta = await db.receta.create({
        data: {
            titulo: title,
            descripcion: descripcion,
            ingredientes: ingredientes,
            imagen: uploadResult?.secure_url,
            usuarioCreador: {
                connect: {
                    id_usuario: userId.id_usuario
                }
            }
        }
    })
    console.log('Receta creada');
    redirect('/dashboard');
}

export async function eliminarReceta(formData) {
    const recetaId = formData.get('recetaId').toString();

    if (!recetaId) return;

    await db.receta.delete({ where: { id_receta: parseInt(recetaId) } });

    revalidatePath('/dashboard');
}

export async function editarReceta(formData) {
    const recetaId = formData.get('id');
    const title = formData.get('title');
    const ingredientes = formData.get('ingredientes');
    const descripcion = formData.get('descripcion');
    const imagen = formData.get('imagen');
    let secure_url;

    if (!recetaId || !title || !ingredientes || !descripcion) return;

    if (imagen) {
        // Guarda la iamgen en local y luego la borra
        const imagenPath = await processImage(imagen);

        // Subir una imagen a Cloudinary
        const uploadResult = await cloudinary.uploader
            .upload(imagenPath)
            .catch((error) => {
                console.log(error);
            });
        secure_url = uploadResult?.secure_url;
        if (uploadResult) {
            await unlink(imagenPath);
        }
    }

    await db.receta.update({
        where: {
            id_receta: parseInt(recetaId)
        },
        data: { titulo: title, descripcion: descripcion, ingredientes: ingredientes, imagen: secure_url  }
    });

    console.log('Receta actualizada');
    redirect('/dashboard');
}