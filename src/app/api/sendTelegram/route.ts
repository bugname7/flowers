import { NextRequest, NextResponse } from "next/server";

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
    try {
        const { message } = await req.json();

        if (!token || !chatId) {
            return NextResponse.json({ error: "Token yoki Chat ID mavjud emas" }, { status: 500 });
        }

        const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: message }),
        });

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Telegramga yuborishda xato 😢" }, { status: 500 });
    }
}
