import logo from '../public/logo.JPG';
import fakemenu from "../public/m-menu.png";
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="w-screen flex justify-center">
      <div className="m-3 w-full flex items-center md:w-4/5 xl:w-1/2">
        <div className="w-35px md:w-60px ">
          <Image src={logo} layout="responsive" alt="Synthesis logo" />
        </div>
        <div className="ml-auto w-25px h-25px md:hidden">
          <Image src={fakemenu} layout="responsive" alt="Fake Menu" />
        </div>
        <Link
          href="https://github.com/SilenNaihin/tabular-form"
        >
          <a
            target="_blank"
            className="hidden md:inline ml-auto font-medium text-white"
          >
            <div className="inline-block mr-10">Learn more</div>
            <div className="inline-block">Log in</div>
          </a>
        </Link>
      </div>
    </div>
  );
}
