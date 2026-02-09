import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Помощь студентам без предоплаты | Зачисления, Сессии, Дипломы',
  description: 'Профессиональное сопровождение студентов в ведущих ВУЗах: РУДН, МГУ, РАНХиГС, МГИМО. Оплата только по факту выполнения работы. Конфиденциально.',
  keywords: 'помощь студентам, зачисление в вуз, переводы между вузами, закрыть сессию, помощь с зачетами, диплом на заказ, оплата по факту',
  // Настройки для того, как сайт будет выглядеть при пересылке в Telegram
  openGraph: {
    title: 'Студенческий сервис №1 — Помощь без предоплаты',
    description: 'Решим любой академический вопрос в кратчайшие сроки. Оплата по факту!',
    type: 'website',
    url: 'https://твой-домен.ru',
    images: [
      {
        url: 'https://твой-домен.ru/og-image.jpg', // Сюда потом загрузим картинку
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
