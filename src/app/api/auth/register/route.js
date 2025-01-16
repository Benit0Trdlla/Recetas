import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import db from '@/libs/db';

export async function POST(request) {
    try {
        const data = await request.json();
        const emailFound = await db.usuario.findUnique({ where: { email: data.email } });

        if (emailFound) {
            return NextResponse.json({ message: 'Email already exists' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(data.contraseña, 10);
        const newUsuario = await db.usuario.create({ data: { ...data, contraseña: hashedPassword } });

        // Excluir la contraseña del objeto que se devuelve
        const { contraseña: _, ...user } = newUsuario;
        return NextResponse.json(user);

    } catch (error) {
       return NextResponse.json({ message: error.message }, { status: 500 });
    } 
}