import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

const Layout = ({ children, pageTitle }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title> {pageTitle} </title>
      </Head>
      <Header />
      {children}
    </div>
  );
};
export default Layout;
