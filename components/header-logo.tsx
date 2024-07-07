import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logo.svg" alt="logo" height={120} width={120} />
        <p className="font-semibold text-white text-2xl ml-2.5">Finance ERP</p>
      </div>
    </Link>
  );
};
