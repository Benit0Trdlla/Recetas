'use client'
import { signOut } from "next-auth/react"

export default function DashboardPage() {
    return (
        <div>
            DashboardPage
            <button className="btn btn-primary" onClick={() => signOut()}> Logout </button>
        </div>
    )
}