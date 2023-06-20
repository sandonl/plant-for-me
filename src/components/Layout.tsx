import Head from "next/head";
import type { ReactNode } from "react";
import Header from "./Header";
import NextNProgress from "nextjs-progressbar";

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
      <NextNProgress color="rgb(122, 207, 145)" />
      <Header />
      {children}
    </div>
  );
};
export default Layout;
