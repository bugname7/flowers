import Image from "next/image"
function Features() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-center">
                <div className="p-4 border-2 border-pink-400 rounded-lg shadow hover:shadow-lg transition" data-aos="fade-up-right">
                    <Image
                        src="/images/pochta.png"
                        alt="Tez yetkazib berish"
                        width={300}
                        height={100}
                        className="object-contain w-full h-[150px]"
                    />
                    <h3 className="font-mono font-semibold mt-2">🌸Tez yetkazib berish</h3>
                    <p className="text-sm mt-1 font-mono  font-semibold">Buyurtmangizni yetkazib berish hizmatini ham yaqin kunlarda yo'lga qo'yamiz</p>
                </div>

                <div className="p-4 border-2 border-pink-400 rounded-lg shadow hover:shadow-lg transition" data-aos="fade-up-left">
                    <Image
                        src="/images/flowers.jpg"
                        alt="Yangi gullar"
                        width={300}
                        height={200}
                        className="object-contain w-full h-[150px]"
                    />
                    <h3 className="font-mono font-semibold mt-2">🌸Yangi gullar</h3>
                    <p className="text-sm mt-1 font-mono font-semibold">Har kuni yangi gullar bilan ta’minlaymiz.</p>
                </div>

                <div className="p-4 border-2 border-pink-400 rounded-lg shadow hover:shadow-lg transition" data-aos="fade-up-right" >
                    <Image
                        src="/images/my.jpg"
                        alt="Shaxsiy dizayn"
                        width={300}
                        height={200}
                        className="object-contain w-full h-[150px]"
                    />
                    <h3 className="font-mono font-semibold mt-2">🌸Shaxsiy dizayn</h3>
                    <p className="text-sm mt-1 font-mono font-semibold">Sizning xohishingiz bo‘yicha gul bezaklari.</p>
                </div>
            </div>
        </div>
    )
}

export default Features
