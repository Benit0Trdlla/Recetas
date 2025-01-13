"use server";
import db from "@/libs/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export async function createRecetas(formData) {
    const session = await getServerSession(authOptions);
    console.log('SESSION', session.user);

    const title = formData.get("title");
    const ingredientes = formData.get("ingredientes");
    const descripcion = formData.get("descripcion");
    console.log({ title, ingredientes, descripcion });

    if (!title || !ingredientes || !descripcion) {
        return;
    }
    const userId = await db.usuario.findUnique({ where: { email: session.user.email }, select: { id_usuario: true } });
    console.log('USER', userId);

    const newReceta = await db.receta.create({
        data: {
            titulo: title,
            descripcion: descripcion,
            ingredientes: ingredientes,
            usuarioCreador: {
                connect: {
                    id_usuario: userId.id_usuario
                }
            }
        }
    })
    console.log('CREATED', newReceta);
    redirect('/dashboard');
}