import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  const { status } = useSession();

  return (
    <header className="sticky top-0 z-40 box-border w-full border-b border-b-slate-200 bg-slate-100 ">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between space-x-1">
          <Link href={"/"}>
            <h2 className="text-2xl font-bold hover:text-slate-600">
              Plant<span className="text-green-300">er</span>
            </h2>
          </Link>
          <div className="flex items-center space-x-5">
            {status === "authenticated" && (
              <>
                <Button
                  asChild
                  variant="secondary"
                  className="hover:text-slate-600"
                >
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button onClick={() => void signOut()}>Logout</Button>
              </>
            )}
            {status === "unauthenticated" && (
              <Button
                onClick={() =>
                  void signIn("discord", { callbackUrl: "/dashboard" })
                }
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
