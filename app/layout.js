import { Inter } from "next/font/google";
import "./globals.css";
import { StateContextProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather App",
  description: "Know the weather in your city",
};

export default function RootLayout({ children }) {
  return (
    <StateContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StateContextProvider>
  );
}
