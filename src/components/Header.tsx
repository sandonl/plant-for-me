import Link from "next/link";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  // NextAuth logic goes here to render appropriate header elements

  return (
    <header className="sticky top-0 z-40 box-border w-full border-b border-b-slate-200">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between space-x-1">
          <Link href={"/"}>
            <h2 className="text-2xl font-bold hover:text-slate-600">
              Plant<span className="text-green-300">er</span>
            </h2>
          </Link>
          <div className="flex items-center space-x-5">
            {/* <Link href={"/"}>
              <h2 className="text-md font-semibold hover:text-slate-600">
                Dashboard
              </h2>
            </Link> */}
            <Link href={"/"}>
              <h2 className="text-md font-semibold hover:text-slate-600">
                About
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
