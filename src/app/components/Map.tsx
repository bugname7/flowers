import Image from "next/image";

export default function Map() {
    return ( 
        <div className="w-full flex flex-col md:gap-14 md:flex-row items-center justify-center py-6 px-4 mt-20">

            <div className="w-full md:w-1/3 h-[300px] md:h-[500px] relative" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">

                <iframe allowFullScreen src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6066.0907624694055!2d72.01807111501688!3d40.51848801224343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sQo&#39;shkechik%20qishlog&#39;i%20murotkosa!5e0!3m2!1sru!2s!4v1757330478116!5m2!1sru!2s" className="w-full h-full rounded-lg shadow-xl border-0" loading="lazy" ></iframe>
            </div>

            <div
                className="w-full md:w-1/4 bg-white shadow-xl p-6 md:p-8 mt-6 md:mt-0 md:ml-6 cursor-pointer "
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                <div className="flex flex-col items-center text-center ">
                    <Image
                        src="/images/logo-image.png"
                        alt="Flowers Ukraine Logo"
                        width={180}
                        height={80}
                    />
                    <h2 className="mt-2 text-lg md:text-xl font-semibold font-mono">
                        🌸  FLOWERS-Diyora
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base font-mono">
                        🌸 Eng jozibali gullar
                    </p>
                </div>

                <div className="mt-6 space-y-4 text-gray-700 text-sm md:text-base ">
                    <p className="flex items-center gap-3 font-mono">📞 +998 (94) 212 83 37</p>

                    <p className="flex items-center gap-3 font-mono">💬 Skype: Flowers-Diyora</p>
                    <p className="flex items-center gap-3 font-mono">
                        flowersdiyora@gmail.com
                    </p>
                </div>

                <div className="flex gap-6 justify-center mt-6 text-gray-600 text-lg md:text-xl">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-skype"></i></a>
                    <a href="#"><i className="fab fa-telegram"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                </div>
            </div>
        </div>
    );
}
