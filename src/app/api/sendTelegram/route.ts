import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { message, photoUrl } = await req.json();

        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!token || !chatId) {
            return NextResponse.json(
                { success: false, error: "Token yoki chatId topilmadi" },
                { status: 500 }
            );
        }

        // Agar rasm bo'lsa, sendPhoto endpoint ishlatiladi
        if (photoUrl) {
            const res = await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    photo: photoUrl,
                    caption: message,
                }),
            });

            if (!res.ok) throw new Error("Telegram API xato berdi");
        } else {
            // Faqat text yuborish
            const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                }),
            });

            if (!res.ok) throw new Error("Telegram API xato berdi");
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { success: false, error: (err as Error).message },
            { status: 500 }
        );
    }
}
