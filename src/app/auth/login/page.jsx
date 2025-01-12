'use client'
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const [error, setError] = useState(null);

    const onSubmit = handleSubmit(async data => {
        console.log(data);
        const res = await signIn('credentials', { ...data, redirect: false })

        console.log(res);

        if (res.error) {
            setError(res.error)
        } else {
            router.push('/dashboard');
            router.refresh();
        }
    })
    return (
        <>
            <form className="container d-flex justify-content-center align-items-center vh-50 flex-column" onSubmit={onSubmit}>
                {error && <p className="alert alert-danger">{error}</p>}
                <h1 className="text-white fw-bold mt-3">Login</h1>

                <div className="form-floating mb-3">
                    <input type="email"
                        {...(register("email", { required: { value: true, message: "Email is required" } }))}
                        className="form-control" id="floatingEmailInput" placeholder="email@email.com" />
                    <label htmlFor="email">Email</label>
                </div>
                {errors.email && <span className="text-danger fw-bold fs-6 mb-3">{errors.email.message}</span>}


                <div className="form-floating mb-3">
                    <input type="password"
                        {...(register("password", { required: { value: true, message: "Password is required" } }))}
                        className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="password">Password</label>
                </div>
                {errors.password && <span className="text-danger fw-bold fs-6 mb-3">{errors.password.message}</span>}



                <button className="btn btn-primary">Login</button>
            </form>
        </>
    );
}