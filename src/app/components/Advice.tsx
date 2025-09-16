import Image from "next/image"
function Advice() {
    return (
        <div>
            <div className="my-8">
                <h2 className="text-xl md:text-2xl font-bold font-mono mb-4 text-center" data-aos="zoom-out">🌸 Sun’iy gullar va dekoratsiya bo‘yicha maslahatlar</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 border border-pink-500 rounded shadow hover:shadow-lg transition" data-aos="zoom-in-right">
                        <Image src="/images/arxideya2.jpg" alt="arxidya 2image" width={400} height={200} className="object-cover w-full h-[250px]" />
                        <h3 className="font-mono font-semibold mt-2">🌸Sun’iy gullarni uzoq vaqt yangi saqlash</h3>
                        <ul className="text-sm font-mono mt-1 list-disc list-inside">
                            <li>Gullarni changdan toza tutish uchun yumshoq mato bilan artib turing.</li>
                            <li>Nam joyda saqlashdan saqlaning, bu rangning o‘zgarishiga olib kelishi mumkin.</li>
                            <li>Har yili yengil sovunli suv bilan yuvib, quritib qo‘ying.</li>
                        </ul>
                    </div>

                    <div className="p-4 border border-pink-500 rounded shadow hover:shadow-lg transition" data-aos="zoom-in-left">
                        <Image src="/images/siren-pink.jpg" alt="siren pink" width={400} height={200} className="object-cover rounded-md w-full h-[250px]" />
                        <h3 className="font-mono font-semibold mt-2">🌸Uy bezaklarida sun’iy gullar kombinatsiyasi</h3>
                        <ul className="text-sm font-mono mt-1 list-disc list-inside">
                            <li>Ranglar uyg‘unligini hisobga oling.</li>
                            <li>Turli balandlikdagi gullarni aralashtiring.</li>
                            <li>Kerak bo‘lsa, dekorativ idish va aksessuarlar bilan bezang.</li>
                        </ul>
                    </div>

                    <div className="p-4 border border-pink-500    rounded shadow hover:shadow-lg transition" data-aos="zoom-in-right">
                        <Image src="/images/married.jpg" alt="married image" width={400} height={200} className="object-cover w-full h-[250px]" />
                        <h3 className="font-mono font-semibold mt-2"> 🌸Bayram va to‘y dekoratsiyasida sun’iy gullar</h3>
                        <ul className="text-sm font-mono mt-1 list-disc list-inside">
                            <li>Rang-barang gullar bilan bayram kayfiyatini oshiring.</li>
                            <li>Kelinlik gullarini mavsumiy ranglar bilan uyg‘unlashtiring.</li>
                            <li>Sun’iy gullar bilan shaxsiy dizayn yaratish mumkin.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advice
