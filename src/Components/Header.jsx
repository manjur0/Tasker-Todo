import logo from "../assets/lws-logo-en.svg";

const Header = () => {
  return (
    <nav className="container mx-auto py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className=" flex items-center justify-between gap-x-6">
        <a href="/">
          <img className="h-[45px]" src={logo} alt="Lws" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
