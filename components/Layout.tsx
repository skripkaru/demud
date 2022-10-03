import {FC, ReactNode} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode | JSX.Element
}

const Layout: FC<LayoutProps> = (props) => {
  const {children} = props

  return (
    <>
      <Head>
        <title>De’mud</title>
        <meta name="description" content="Современный декор для дома"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className='flex flex-col h-full'>
        <Header/>
        <main className='flex-1'>
          {children}
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default Layout;
