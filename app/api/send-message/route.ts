import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, contact, service } = await req.json();

    // ЗАМЕНИ ЭТИ ДАННЫЕ НА СВОИ
    const BOT_TOKEN = '8342323616:AAG1HzWu04JBGH9Wda8tc3UyRfJhlVaf6Es';
    const CHAT_ID = '7833997285';
    
    const message = `
🚀 **Новая заявка!**
👤 **Имя:** ${name}
📱 **Контакт:** ${contact}
🎓 **Услуга:** ${service}
    `;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) throw new Error('Ошибка Telegram API');

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}