import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/navbar/NavBar";
import Footer from "@/components/shared/footer/Footer";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Odyssey Event",
  description: "Odyssey Event by Foysal Mahmood",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  );
}
