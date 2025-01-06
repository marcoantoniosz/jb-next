import { League_Spartan } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/style.scss";
import "./assets/css/materialdesignicons.min.css";

const league = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-league",
});

export const metadata = {
  title: "JB Imóveis",
  description: "Imobiliária",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={league.variable}>{children}</body>
    </html>
  );
}
