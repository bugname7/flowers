import React from 'react'

function Customer() {
    return (
        <div>
            <div className="my-8">
                <h2 className="text-xl md:text-2xl font-bold font-mono mb-4 text-center">🌸 Mijozlarimiz nima deydi?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded shadow">
                        <p className="font-mono">"Florist Diyora xizmatidan juda mamnunman, gullar har doim yangi va go‘zal!"</p>
                        <span className="font-bold mt-2 block">— Malika</span>
                    </div>
                    <div className="p-4 border rounded shadow">
                        <p className="font-mono">"Tez yetkazib berish va shaxsiy dizayn juda yoqdi."</p>
                        <span className="font-bold mt-2 block">— Sardor</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer
