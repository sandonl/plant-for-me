interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <>
      <footer className="bottom-0 z-40 box-border max-h-12 w-full border-t border-t-slate-200 bg-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="flex h-12 flex-row-reverse items-center justify-between space-x-1">
            <p className="text-xs">
              Made by
              <span className="font-bold">
                <a href="https://github.com/sandonl" target="_blank">
                  {" "}
                  @sandonl{" "}
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
