import Image from "next/image"
const Flowers = () => {
    return (
        <div className="flex gap-5">
            <div className="flex flex-col md:flex-row gap-0">

                <div className="relative w-[330px] h-[200px]">
                    <Image
                        src="/images/white-arx.jpg"
                        alt="White arxideya"
                        width={310}
                        height={200}
                        className="rounded-lg shadow-md object-cover"
                    />
                </div>

                <div className="flex flex-col gap-4 ">
                    <div className="relative w-[330px] h-[200px]">
                        <Image
                            src="/images/lola.jpg"
                            alt="lola image"
                            fill
                            className="rounded-lg shadow-md object-cover"
                        />
                    </div>
                    <div className="relative w-[330px] h-[200px]">
                        <Image
                            src="/images/sakura.jpg"
                            alt="sakura image"
                            fill
                            className="rounded-lg shadow-md object-cover"
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className="font-mono leading-7 mb-10 font-medium">Biz gullarni Farg‘ona viloyati, Quva tumanida uy sharoitida yasaladi va sotamiz!
                </p>
                <p className="font-mono leading-6 font-medium mb-6">Buyurtma berish uchun qulay va professional onlayn-do‘konimizdan foydalanishingiz mumkin. Do‘konimiz barcha asosiy onlayn
                    to‘lov usullarini qo‘llab-quvvatlaydi, va biz guldastalarni aniq tasvirlab, suratga olib taqdim etamiz.
                </p>
                <p className="font-mono leading-7 mb-12 font-medium "> Buyurtmalarni
                    telefon, elektron pochta orqali  qabul qilamiz.</p>
                <p className="font-mono leading-7 mb-8 font-medium">Har bir guldasta ishtiyoq bilan yaratiladi va maxsus tanlangan gullardan yig‘iladi. Biz mijozlarimiz bilan yaxshi aloqani,
                    xushmuomalalikni va buyurtmalarning sifatli bajarilishini kafolatlaymiz. Shuningdek, anonimlik va yordam ham ta’minlanadi.
                </p>
            </div>
        </div>
    )
}

export default Flowers
