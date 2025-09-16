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
        name: "Rosaa",
        slug: "rosaa",
        image: "/images/kelinGul.jpg",
        desc: "Bu kelinning to‘yda qo‘lida tutadigan, sevgi va baxt ramzi bo‘lgan gulchambar.",
        price: 250000,
    },
    {
        id: 2,
        name: "Lilya",
        slug: "lily",
        image: "/images/znak.jpg",
        desc: "Go‘zal oq gullar    ",
        price: 60000,
    },
    {
        id: 3,
        name: "Tulip",
        slug: "tulip",
        image: "/images/sakura.jpg",
        desc: "Bahorning ramzi",
        price: 40000,
    },
    {
        id: 4,
        name: "3b1",
        slug: "3b1",
        image: "/images/3b1.jpg",
        desc: "3 xil gul kompozitsiyasi",
        price: 100000,
    },
    {
        id: 5,
        name: "Arxideya",
        slug: "arxideya",
        image: "/images/arxideya.jpg",
        desc: "Nozik va qimmatbaho gul",
        price: 120000,
    },
    {
        id: 6,
        name: "Arxideya",
        slug: "arxideya",
        image: "/images/lola.jpg    ",
        desc: "Nozik va qimmatbaho gul",
        price: 120000,
    },
];
