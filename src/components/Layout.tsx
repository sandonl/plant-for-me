import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

const Layout = ({ children, pageTitle }: LayoutProps) => {
  const title = `${pageTitle} | Planter`;

  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
    </div>
  );
};
export default Layout;
