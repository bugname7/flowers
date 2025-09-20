import { NextRequest, NextResponse } from "next/server";

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
    try {
        const { message } = await req.json();

        if (!token || !chatId) {
            return NextResponse.json({ error: "Token yoki Chat ID mavjud emas" }, { status: 500 });
        }

        if (!message || message.trim() === "") {
            return NextResponse.json({ error: "Xabar bo‘sh bo‘lishi mumkin emas" }, { status: 400 });
        }

        const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: message }),
        });

        const data = await res.json();

        if (!data.ok) {
            return NextResponse.json({ error: data.description || "Telegram xatosi" }, { status: 500 });
        }

        return NextResponse.json({ ok: true, result: data.result });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Telegram API xato:", error.message);
            return NextResponse.json({ error: "Telegramga yuborishda xato 😢" }, { status: 500 });
        } else {
            console.error("Telegram API xato:", error);
            return NextResponse.json({ error: "Telegramga yuborishda noma’lum xato 😢" }, { status: 500 });
        }
    }

}
