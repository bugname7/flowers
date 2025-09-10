import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-center py-4 mt-12 overflow-hidden">
     
      <div className="mb-3 flex justify-center" data-aos="zoom-out">
        <Link href={"/"}>
          <Image
            src="/images/logo-image.png"
            alt="Logo"
            width={100}   
            height={100}
            priority
          />
        </Link>
      </div>

      <p className="text-xs md:text-sm text-pink-500 font-mono font-bold">
        © {new Date().getFullYear()} Florist Diyora. Barcha huquqlar himoyalangan.
      </p>
    </footer>
  );
}
