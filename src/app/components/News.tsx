import Image from "next/image"
function News() {
    return (
        <div>
            <div className="my-8">
                <h2 className="text-xl md:text-2xl font-bold font-mono mb-4 text-center" data-aos="zoom-out-up">🌸 So‘nggi yangiliklar</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded overflow-hidden shadow-lg" data-aos="fade-right">
                        <Image src="/images/lola.jpg" alt="Yangilik 1" width={400} height={200} className="object-cover w-full h-[200px]" />
                        <div className="p-4" >
                            <h3 className="font-mono font-semibold">🌸Bahor kolleksiyasi</h3>
                            <p className="text-sm font-mono font-medium mt-1">Yangi bahor gullari bilan uylaringizni bezating.</p>
                        </div>
                    </div>
                    <div className="rounded overflow-hidden shadow-lg" data-aos="fade-left">
                        <Image src="/images/kelinGul.jpg" alt="Yangilik 2" width={500} height={200} className="object-cover w-full h-[200px]" />
                        <div className="p-4">
                            <h3 className="font-mono font-semibold">🌸Kelinlik gullari</h3>
                            <p className="text-sm font-mono font-medium mt-1">To‘y marosimida kelin kiyimi bilan uyg‘un keladigan gullardir</p>
                        </div>
                    </div>
                    <div className="rounded overflow-hidden shadow-lg" data-aos="fade-right">
                        <Image src="/images/ramadan.jpg" alt="Yangilik 2" width={400} height={200} className="object-cover w-full h-[200px]" />
                        <div className="p-4">
                            <h3 className="font-mono font-semibold">🌸Bayram gullari</h3>
                            <p className="text-sm font-mono font-medium mt-1">Bayram kunlarini bezash va quvonchni ifodalash uchun ishlatiladigan gullardir</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
