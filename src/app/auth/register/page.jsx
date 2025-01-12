'use client'
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
export default function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const onSubmit = handleSubmit(async data => {
        if (data.password !== data.confirmPassword) {
            return alert('Passwords do not match');
        }

        console.log(data.password);
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: data.name,
                apellido: data.lastName,
                email: data.email,
                contraseña: data.password
            }),
        })
        if (res.ok) {
            router.push('/dashboard');
        }
    });
    console.log(errors);

    return (
        <>
            <form className="container d-flex justify-content-center align-items-center vh-50 flex-column" onSubmit={onSubmit}>
                <h1 className="text-white fw-bold mt-3">Register</h1>

                <div className="form-floating mb-3">
                    <input type="text"
                        {...(register("name", { required: { value: true, message: "Name is required" } }))}
                        className="form-control" id="floatingNameInput" placeholder="Jhon" />
                    <label htmlFor="name">Name</label>
                </div>
                {errors.name && <span className="text-danger fw-bold fs-6 mb-3">{errors.name.message}</span>}

                <div className="form-floating mb-3">
                    <input type="text"
                        {...(register("lastName", { required: { value: true, message: "Last name is required" } }))}
                        className="form-control" id="floatingLastNameInput" placeholder="Folk" />
                    <label htmlFor="lastName">Last name</label>
                </div>
                {errors.lastName && <span className="text-danger fw-bold fs-6 mb-3">{errors.lastName.message}</span>}


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

                <div className="form-floating mb-3">
                    <input type="password"
                        {...(register("confirmPassword", { required: { value: true, message: "Confirm password is required" } }))}
                        className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                </div>
                {errors.confirmPassword && <span className="text-danger fw-bold fs-6 mb-3">{errors.confirmPassword.message}</span>}


                <button className="btn btn-primary">Register</button>
            </form>
        </>
    );
}