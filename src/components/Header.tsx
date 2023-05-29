interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200">
      <div className="flex h-16">
        <div>Plant For Me</div>
      </div>
    </header>
  );
};
export default Header;
