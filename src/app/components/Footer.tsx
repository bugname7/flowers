import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-center py-6 mt-12">
      <div className="mb-4 flex justify-center" data-aos="zoom-out">
        <Link href={'/'}>
          <img
            src="/images/logo-image.png"
            alt="logo image"
            className="w-32 sm:w-36 md:w-40 object-contain"
          /></Link>
      </div>
      <p className="text-sm text-pink-500 font-mono" >
        © {new Date().getFullYear()} Florist Diyora. Barcha huquqlar himoyalangan.
      </p>
    </footer>
  );
}
