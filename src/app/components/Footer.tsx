import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-black text-center py-6 mt-12 overflow-hidden">
      <div className="mb-4 flex justify-center" data-aos="zoom-out">
        <Link href={'/'}>
          <Image
            src="/images/logo-image.png"
            alt="Logo"
            width={200}
            height={200}
            priority
          />
        </Link>
      </div>
      <p className="text-sm text-pink-500 font-mono font-bold">
        © {new Date().getFullYear()} Florist Diyora. Barcha huquqlar himoyalangan.
      </p>
    </footer>
  );
}
