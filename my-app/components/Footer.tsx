'use client';
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '../constants/index';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10 px-6 sm:px-16 flex flex-col items-center">
      { }
      <div className="flex flex-col items-center gap-4 mb-10">
        <Image
          src="/boss.svg"  
          alt="boss"
          width={140}
          height={240}
          className="object-contain"
        />
        <p className="text-center text-gray-400">
          Clothing Empire since 1967 <br />
          All rights reserved &copy;
        </p>
      </div>

      { }
      <div className="flex flex-col md:flex-row gap-10 justify-center items-start w-full max-w-6xl text-center md:text-left">
        {footerLinks.map((linkGroup) => (
          <div key={linkGroup.title} className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">{linkGroup.title}</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {linkGroup.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-400 hover:text-white transition"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
