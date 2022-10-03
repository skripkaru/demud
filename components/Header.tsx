import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10">
      <div className="container p-4 md:p-8 mx-auto flex flex-wrap md:flex-row items-center">
        <Link href='/'>
          <a className="title-font font-medium text-gray-900 text-2xl">
            De’mud
          </a>
        </Link>

        {/*<button className='lg:hidden ml-auto'>Menu</button>*/}

        {/*<nav className="hidden lg:flex flex-wrap items-center justify-center md:ml-auto text-base">*/}
        {/*  <Link href='/'>*/}
        {/*    <a className="mr-5 hover:text-gray-800">Главная</a>*/}
        {/*  </Link>*/}
        {/*  <Link href='/catalog'>*/}
        {/*    <a className="mr-5 hover:text-gray-800">Каталог</a>*/}
        {/*  </Link>*/}
        {/*  <Link href='/'>*/}
        {/*    <a className="mr-5 hover:text-gray-800">Контакты</a>*/}
        {/*  </Link>*/}
        {/*</nav>*/}
      </div>
    </header>
  );
};

export default Header;
