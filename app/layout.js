import "./globals.css";

export const metadata = {
  title: "Gestão de Candidaturas",
  description: "Sistema de Gestão de Candidaturas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-pt">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        /> /* google font */
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        /> /* cdn for boxicons */
        <link
          href="/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
