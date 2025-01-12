'use client'
import { signOut } from "next-auth/react"

export default function DashboardPage() {
    return (
        <div>
            <h1 className="text-white fw-bold text-center fs-3">¡Bienvenido al Dashboard donde podras crear y compartir tus recetas!</h1>
        </div>
    )
}