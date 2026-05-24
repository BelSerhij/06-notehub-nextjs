
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Providers from "../components/TanStackProvider/TanStackProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head />
      <body>
        <Header />
       
      <Providers>
          <main>{children}</main>
      </Providers>
       
      <Footer />
      </body>
    </html>
  );
}