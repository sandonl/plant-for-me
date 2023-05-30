import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

const Layout = ({ children, pageTitle }: LayoutProps) => {
  const title = `${pageTitle} | Plant4Me`;

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
};
export default Layout;
