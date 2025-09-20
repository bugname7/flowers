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
        price: 250000,
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
        price: 100000,
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
];
