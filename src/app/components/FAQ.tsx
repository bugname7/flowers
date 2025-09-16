import React from 'react'

function FAQ() {
    return (
        <div>
            <div className="my-8">
                <h2 className="text-xl md:text-2xl font-bold font-mono mb-4 text-center" data-aos="zoom-in">❓ Tez-tez so‘raladigan savollar</h2>
                <div className="space-y-4">

                    <div className="p-4 border border-pink-400 rounded shadow" data-aos="fade-up-right">
                        <h3 className="font-mono font-semibold">🌸 Gullarning yangi ekanligiga kafolat bormi?</h3>
                        <p className="text-sm font-mono mt-1">Ha, barcha gullarimiz har kuni yangilanadi va sifatga kafolat beriladi.</p>
                    </div>
                    <div className="p-4 border border-pink-400 rounded shadow" data-aos="fade-up-left">
                        <h3 className="font-mono font-semibold ">🌸 Maxsus dizayn buyurtma qilish mumkinmi?</h3>
                        <p className="text-sm font-mono mt-1">Albatta, sizning xohishingizga mos keladigan shaxsiy dizaynlar tayyorlaymiz.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
