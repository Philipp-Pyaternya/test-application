import { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

interface ILayout {
  children: ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <div>
      <Header />
      <main className="mt-[90px] container px-4 mx-auto flex">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
