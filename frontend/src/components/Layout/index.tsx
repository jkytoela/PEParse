import * as React from 'react';
import { tw } from 'twind';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => (
  <div className={tw`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
    <div className={tw`max-w-xl mx-auto p-6`}>
      {children}
    </div>
  </div>
);

export default Layout;
