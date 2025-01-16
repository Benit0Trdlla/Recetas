// 'use client'
// import { signOut } from "next-auth/react"
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import db from "@/libs/db";
import RecetaCard from "../components/Dashboard/RecetaCard";
import NavbarDashboard from "../components/Dashboard/Navbar";
export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    const userId = await db.usuario.findUnique({ where: { email: session.user.email }, select: { id_usuario: true } });
    const recetas = await db.receta.findMany({
        where: { usuarioCreador: { id_usuario: userId.id_usuario } },
    });

    return (
        <>
            <NavbarDashboard />
            <h1 className="text-white fw-bold text-center fs-3">¡Bienvenido al Dashboard donde podras crear y compartir tus recetas!</h1>
            <div className="row">
                {recetas.map((receta) => (
                    <RecetaCard key={receta.id_receta} receta={receta} />
                ))}
            </div>
        </>
    )
}