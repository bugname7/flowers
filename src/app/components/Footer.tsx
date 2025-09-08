import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-center py-6 mt-12 overflow-hidden">
      <div className="mb-4 flex justify-center" data-aos="zoom-out">
        <Link href={'/'}>
          <img
            src="/images/logo-image.png"
            alt="logo image"
            className="w-24 sm:w-28 md:w-32 lg:w-40 max-w-full h-auto"
          />
        </Link>
      </div>
      <p className="text-sm text-pink-500 font-mono">
        © {new Date().getFullYear()} Florist Diyora. Barcha huquqlar himoyalangan.
      </p>
    </footer>
  );
}
