import Image from "next/image"

const Flowers = () => {
    return (
        <div className="flex flex-row gap-6 flex-wrap">
            {/* Chap tarafdagi rasmlar */}
            <div className="flex flex-row gap-4 flex-1 min-w-[300px]">
                {/* Katta rasm */}
                <div className="w-1/2 h-[380px]">
                    <Image
                        src="/images/white-arx.jpg"
                        alt="white arxideya"
                        width={600}
                        height={400}
                        className="w-full h-full rounded-xl object-cover shadow-md"
                    />
                </div>

                {/* Ikki kichik rasm */}
                <div className="flex flex-col gap-4 w-1/2 h-[365px]">
                    <div className="h-1/2">
                        <Image
                            src="/images/lola.jpg"
                            alt="lola image"
                            width={200}
                            height={100}
                            className="w-full h-full rounded-lg shadow-md object-cover"
                        />
                    </div>
                    <div className="h-1/2">
                        <Image
                            src="/images/sakura.jpg"
                            alt="sakura image"
                            width={200}
                            height={100}
                            className="w-full h-full rounded-lg shadow-md object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* O‘ng tarafdagi matn */}
            <div className="flex-1 text-justify min-w-[300px]">
                <p className="font-mono leading-7 mb-6 font-medium">
                    Biz gullarni Farg‘ona viloyati, Quva tumanida uy sharoitida yasaladi va sotamiz!
                </p>
                <p className="font-mono leading-6 font-medium mb-6">
                    Buyurtma berish uchun qulay va professional onlayn-do‘konimizdan foydalanishingiz mumkin.
                    Do‘konimiz barcha asosiy onlayn to‘lov usullarini qo‘llab-quvvatlaydi, va biz guldastalarni aniq tasvirlab, suratga olib taqdim etamiz.
                </p>
                <p className="font-mono leading-7 mb-6 font-medium">
                    Buyurtmalarni telefon, elektron pochta orqali qabul qilamiz.
                </p>
                <p className="font-mono leading-7 mb-6 font-medium">
                    Har bir guldasta ishtiyoq bilan yaratiladi va maxsus tanlangan gullardan yig‘iladi.
                    Biz mijozlarimiz bilan yaxshi aloqani, xushmuomalalikni va buyurtmalarning sifatli bajarilishini kafolatlaymiz.
                    Shuningdek, anonimlik va yordam ham ta’minlanadi.
                </p>
            </div>
        </div>
    )
}

export default Flowers
