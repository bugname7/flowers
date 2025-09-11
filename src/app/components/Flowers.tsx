import Image from "next/image"

const Flowers = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      {/* Birinchi blok */}
      <div className="container mx-auto max-w-full flex flex-row gap-6 flex-wrap">
        <div className="flex flex-row gap-4 flex-1 min-w-[300px]">
          {/* Katta rasm */}
          <div className="relative w-full h-[380px]" data-aos="fade-right">
            <Image
              src="/images/white-arx.jpg"
              alt="white arxideya"
              fill
              className="animate-slide-in-from-left rounded-xl object-cover shadow-md"
            />
          </div>

          {/* Ikki kichik rasm */}
          <div className="flex flex-col gap-4 basis-1/2 h-[365px]">
            <div className="relative h-1/2" data-aos="fade-up">
              <Image
                src="/images/lola.jpg"
                alt="lola image"
                fill
                className="rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="relative h-1/2" data-aos="fade-up-right">
              <Image
                src="/images/sakura.jpg"
                alt="sakura image"
                fill
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>

        {/* Matn qismi */}
        <div className="flex-1 text-justify min-w-[300px]">
          <p className="font-mono leading-7 mb-2 sm:mb-8 font-medium" data-aos="zoom-in-left">
            🌸 Biz gullarni Farg‘ona viloyati, Quva tumanida uy sharoitida yasaladi va sotamiz!
          </p>
          <p className="font-mono leading-6 font-medium mb-6" data-aos="fade-right">
            🌸 Buyurtma berish uchun qulay va professional onlayn-do‘konimizdan foydalanishingiz mumkin. Do‘konimiz barcha asosiy onlayn to‘lov usullarini qo‘llab-quvvatlaydi, va biz guldastalarni aniq tasvirlab, suratga olib taqdim etamiz.
          </p>
          <p className="font-mono leading-7 mb-2 sm:mb-8 font-medium" data-aos="zoom-in-left">
            🌸 Buyurtmalarni oz vaqtida qilib berishga harakat qilamiz
          </p>
          <p className="font-mono leading-7 mb-6 font-medium" data-aos="fade-right">
            🌸 Har bir guldasta ishtiyoq bilan yaratiladi va maxsus tanlangan gullardan yig‘iladi. Biz mijozlarimiz bilan yaxshi aloqani, xushmuomalalikni va buyurtmalarning sifatli bajarilishini kafolatlaymiz. Shuningdek, anonimlik va yordam ham ta’minlanadi.
          </p>
        </div>
      </div>

      {/* O‘rta matn */}
      <div data-aos="zoom-out-right" className="container mx-auto max-w-full my-6">
        <h4 className="font-mono leading-7 mb-6 font-medium">
          🌸 Siz Quvada guldastaga ishonch bilan buyurtma berishingiz mumkin, chunki biz sotib olingan gullardan imkon qadar uzoq vaqt zavq olishingiz uchun gul tuzilmalarimizning yuqori sifati, yangiligi va mustahkamligiga kafolat beramiz.
        </h4>
      </div>

      {/* Ikkinchi blok */}
      <div className="container mx-auto max-w-full flex flex-row gap-6 flex-wrap">
        {/* Chap tarafdagi matn */}
        <div className="flex-1 text-justify min-w-[300px]">
          <h3 className="font-mono leading-7 text-xl mb-2 sm:mb-8 font-bold" data-aos="fade-right">
            🌸 Nima uchun bizning gul do'konimizdan foydalanasiz?
          </h3>
          <p className="font-mono leading-6 font-medium mb-6" data-aos="fade-left">
            🌸 Buyurtma berish uchun qulay va professional onlayn-do‘konimizdan foydalanishingiz mumkin. Do‘konimiz barcha asosiy onlayn to‘lov usullarini qo‘llab-quvvatlaydi, va biz guldastalarni aniq tasvirlab, suratga olib taqdim etamiz.
          </p>
          <p className="font-mono leading-7 mb-2 sm:mb-8 font-medium" data-aos="fade-right">
            🌸 Buyurtmalarni telefon, elektron pochta orqali qabul qilamiz.
          </p>
          <p className="font-mono leading-7 mb-6 font-medium" data-aos="fade-left">
            🌸 Har bir guldasta ishtiyoq bilan yaratiladi va maxsus tanlangan gullardan yig‘iladi. Biz mijozlarimiz bilan yaxshi aloqani, xushmuomalalikni va buyurtmalarning sifatli bajarilishini kafolatlaymiz. Shuningdek, anonimlik va yordam ham ta’minlanadi.
          </p>
        </div>

        {/* O‘ng tarafdagi rasmlar */}
        <div className="flex flex-row gap-4 flex-1 sm:min-w-[300px]">
          <div className="flex flex-col gap-4 basis-1/2 h-[365px]">
            <div className="relative h-1/2" data-aos="zoom-in-right">
              <Image
                src="/images/lola1.jpg"
                alt="lola1 image"
                fill
                className="rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="relative h-1/2" data-aos="zoom-out">
              <Image
                src="/images/znak.jpg"
                alt="znak image"
                fill
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>

          <div className="relative basis-1/2 h-[380px]" data-aos="zoom-in-left">
            <Image
              src="/images/arxideya.jpg"
              alt="arxideya"
              fill
              className="rounded-xl object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flowers
