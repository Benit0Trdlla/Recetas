import Link from "next/link"
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CrearRecetaModal from "./Dashboard/CrearRecetaModal";
async function Navbar() {
    const session = await getServerSession(authOptions);
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid ">
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {!session?.user ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" aria-current="page" href="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="/auth/login">Login </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="/auth/register">Register </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="/dashboard">Dashboard </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="/api/auth/signout">Logout </Link>
                                </li>
                                <CrearRecetaModal />
                            </>
                        )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar