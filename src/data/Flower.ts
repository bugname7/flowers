export interface Flower {
    id: number;
    price: number;
    name: string;
    image: string;
    desc: string;
    slug: string;
}

export const flowers: Flower[] = [
    {
        id: 1,
        name: "Kelin Gul",
        slug: "kelin-gul",
        image: "/images/kelinGul.jpg",
        desc: "To‘y marosimining ajralmas bezagi — nafis va hashamatli kelin gulchambari. Har bir lola va atirgul sizning unutilmas kuningizga go‘zallik va sehr qo‘shadi.",
        price: 200000,
    },
    {
        id: 2,
        name: "Lilya",
        slug: "lilya",
        image: "/images/znak.jpg",
        desc: "Oqlik va poklik ramzi bo‘lgan lilya gullari. Har qanday bayram yoki sovg‘aga nafislik, muloyimlik va samimiyat olib kiradi.",
        price: 60000,
    },
    {
        id: 3,
        name: "Sakura",
        slug: "sakura",
        image: "/images/sakura.jpg",
        desc: "Bahorning ilk nafasi kabi nozik va romantik sakura gullari. Xonangizga iliqlik, qalbingizga esa tinchlik olib kiradi.",
        price: 40000,
    },
    {
        id: 4,
        name: "3b1 Kompozitsiya",
        slug: "3b1-kompozitsiya",
        image: "/images/3b1.jpg",
        desc: "Uch xil gul uyg‘unligi — sevgi, do‘stlik va baxt ramzi. Yaqinlaringizga o‘zgacha quvonch ulashish uchun eng yaxshi tanlov.",
        price: 250000,
    },
    {
        id: 5,
        name: "Arxideya",
        slug: "arxideya",
        image: "/images/arxideya.jpg",
        desc: "Nozik va qimmatbaho arxideya — nafislik va hashamat timsoli. Har bir guli sizning didingiz va darajangizni ifodalaydi.",
        price: 120000,
    },
    {
        id: 6,
        name: "Lola",
        slug: "lola",
        image: "/images/lola.jpg",
        desc: "Bahorning yorqin belgisi — lola gullari. Rang-barang ko‘rinishi bilan kayfiyatingizni ko‘taradi va har bir onni yanada go‘zal qiladi.",
        price: 50000,
    },
    {
        id: 7,
        name: "1 Shoxli Arxideya",
        slug: "1-shoxli-arxideya",
        image: "/images/arxideya1.jpg",
        desc: "Shoxli Arxideya – bu o‘zining noyob gullari va bezakli barglari bilan ajralib turadigan dekorativ o‘simlikdir. U ichki makonlarni go‘zal qilish, ofis yoki uy dizaynini jonlantirish uchun ideal tanlovdir. Har bir shox barglari va gullari bilan tabiatning nafisligini aks ettiradi.",
        price: 100000,
    },
    {
        id: 8,
        name: "Atirgul",
        slug: "atirgul",
        image: "/images/atirgul.jpg",
        desc: "Atirgul – go‘zal hidli va rang-barang gullari bilan mashhur bo‘lgan klassik o‘simlik. U muhabbat va romantikani ramziy qiladi, bog‘lar, uy bezaklari va sovg‘a sifatida juda mashhur. Har bir gulining nafisligi va chiroyi atrof-muhitga iliqlik va go‘zallik bag‘ishlaydi.",
        price: 65000,
    },
    {
        id: 9,
        name: "Palmasimon",
        slug: "palmasimon",
        image: "/images/palmasimon.jpg",
        desc: "Palmasimon – uzun, silliq barglari va mustahkam tanasi bilan tropik muhitni eslatadi. Bu o‘simlik asosan dekorativ maqsadda uy va bog‘larda yetishtiriladi. Issiq va nam havoni yaxshi ko‘radi, u joyga tinchlik va ekzotik go‘zallik olib keladi.",
        price: 700000,
    },
    {
        id: 10,
        name: "Kapalak-buketi",
        slug: "kapalak-buketi",
        image: "/images/buket-kapalak.jpg",
        desc: "Buket-Kapalak gullari yorqin ranglari va nozik shakllari bilan diqqatni tortadi. Har bir gul o‘zining nafis ko‘rinishi va o‘ziga xos energiyasi bilan bezak sifatida mukammal tanlovdir. U xonalarni va tadbirlarni jonlantirish, romantik va quvnoq kayfiyat yaratish uchun ideal.",
        price: 180000,
    },
    {
        id: 11,
        name: "Ramashka",
        slug: "ramashka",
        image: "/images/ramashka.jpg",
        desc: "Ramashka gullari oddiyligi va sof go‘zalligi bilan ajralib turadi. Ular tinchlik va tabiat bilan uyg‘unlik ramzi bo‘lib, har qanday joyga iliqlik va quvnoqlik olib kiradi. Oddiy shakli va yorqin oq-pushti barglari bilan bu gul har doim e’tiborni tortadi.",
        price: 45000,
    },
    {
        id: 12,
        name: "Katta-atirgul",
        slug: "katta-atirgul",
        image: "/images/katta-atrigul.jpg",
        desc: "Katta atirgullar o‘zining nafis va boy shakli bilan ajralib turadi. Har bir gul barglari zich va quyuq ranglarda bo‘lib, hashamat va romantikani ramziy qiladi. Bu gul sovg‘a sifatida iliq his-tuyg‘ularni ifodalashda eng zo‘r tanlovdir. Har hil ranglaridan bor",
        price: 150000,
    },
    {
        id: 13,
        name: "Palma",
        slug: "palma",
        image: "/images/palma.jpg",
        desc: "Ushbu sun’iy palmasimon gul bezak sifatida ishlatiladi va har doim yangi ko‘rinishda bo‘ladi. Barglari chiroyli va realistik qilib ishlab chiqilgan bo‘lib, xona yoki ofis dekoratsiyasini jonlantiradi. Parvarish talab qilmaydi va uzoq muddat davomida o‘z shakli va rangini saqlaydi.",
        price: 500000,
    },
    {
        id: 14,
        name: "Sakura",
        slug: "sakura1",
        image: "/images/sakura1.jpg",
        desc: "Bu sun’iy Sakura guli real gul kabi go‘zal va bezakli ko‘rinishga ega, lekin uzoq vaqt rangini yo‘qotmaydi va gullashi bilan sizga bahor hissini berib turadi. Ideal bezak, stol yoki sovg‘a uchun mos, parvarish talab qilmaydi va har doim yangi ko‘rinishda qoladi. Boshqa ranglari ham mavjud",
        price: 500000,
    },
];
