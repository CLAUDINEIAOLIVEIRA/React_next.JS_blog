// app/layout.js
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Meu Blog",
  description: "Blog pessoal criado com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
