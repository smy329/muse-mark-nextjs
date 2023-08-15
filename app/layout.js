import '@/styles/globals.css';
import Nav from '@/components/Nav';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Muse Mark',
  description: 'Where Creativity Finds Its Digital Canvas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <div className="main"></div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
