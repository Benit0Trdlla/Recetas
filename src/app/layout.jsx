import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InstallBootstrap from "./components/InstallBootstrap";
// import Navbar from "./components/Navbar";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Recetas - Terrand",
  description: "Crea tus recetas y comparte con la comunidad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body className={inter.className}>
        {/* <Navbar />   */}
        <InstallBootstrap />
        {children}
      </body>
    </html>
  );
}
