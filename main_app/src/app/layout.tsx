import React, { ReactNode } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css'; 
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
        <title>SehatJiwo</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        />
      </head>
      <body className="bg-white relative overflow-x-hidden mx-auto">
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default Layout;
