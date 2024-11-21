import "@/styles/globals.css";

const inter = "'Poppins";

export const metadata = {
  title: "Hand-E-Sport",
  description:
    "Un événement e-sportif pour mettre en lumière les handicaps dans le monde du jeu vidéo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
