import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db";
import bcrypt from "bcrypt";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials, req) {
                try {
                    console.log(credentials);

                    const userFound = await db.usuario.findUnique({ where: { email: credentials.email } });

                    if (!userFound) throw new Error("User/Email not found");
                    console.log(userFound);

                    const matchPassword = await bcrypt.compare(credentials.password, userFound.contraseña);

                    if (!matchPassword) throw new Error("Password incorrect");

                    // Token de autorización 
                    return {
                        id: userFound.id_usuario,
                        name: userFound.nombre,
                        email: userFound.email,
                    };
                } catch (error) {
                    console.error("Error during authorize:", error);
                    throw new Error("Invalid credentials");
                }
            }
        })
    ],
    pages: {
        signIn: "/auth/login"
    },
    secret: process.env.NEXTAUTH_SECRET, // Protege la información de sesión/cookies
    debug: true
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };