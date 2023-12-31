import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Density Exchange Assignment",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
