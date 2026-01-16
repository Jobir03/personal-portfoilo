import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            console.error('Telegram credentials invalid or missing');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const text = `
New Contact Form Submission:
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Message: ${message}
    `;

        const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
            }),
        });

        if (!response.ok) {
            console.error('Telegram API error:', await response.text());
            return NextResponse.json(
                { error: 'Failed to send message' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
