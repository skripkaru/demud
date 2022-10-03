import {social} from "../constants";
import Icon from "./UI/Icon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container p-4 md:p-8 flex items-center sm:flex-row flex-col">
        <Link href='/'>
          <a className="title-font font-medium text-gray-900 text-2xl">
            De’mud
          </a>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          2022 made by Evgeniy S.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              {social.map(item =>
                <a className="ml-3 text-gray-500 hover:text-gray-600 transition-colors" key={item.id} href={item.href}>
                  <Icon name={item.name} width={20} height={20}/>
                </a>
              )}
            </span>
      </div>
    </footer>
  );
};

export default Footer;
