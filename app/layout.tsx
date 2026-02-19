import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // Обязательный импорт для скриптов в Next.js

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Помощь студентам без предоплаты | Зачисления, Сессии, Дипломы',
  description: 'Профессиональное сопровождение студентов в ведущих ВУЗах: РУДН, МГУ, РАНХиГС, МГИМО. Оплата только по факту выполнения работы. Конфиденциально.',
  keywords: 'помощь студентам, зачисление в вуз, переводы между вузами, закрыть сессию, помощь с зачетами, диплом на заказ, оплата по факту',
  openGraph: {
    title: 'Студенческий сервис №1 — Помощь без предоплаты',
    description: 'Решим любой академический вопрос в кратчайшие сроки. Оплата по факту!',
    type: 'website',
    url: 'https://твой-домен.ru',
    images: [
      {
        url: 'https://твой-домен.ru/og-image.jpg',
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
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* --- Yandex.Metrika counter --- */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(106911321, "init", {
                 clickmap:true,
                 trackLinks:true,
                 accurateTrackBounce:true,
                 webvisor:true,
                 ecommerce:"dataLayer"
            });
          `}
        </Script>
        <noscript>
          <div>
            <img 
              src="https://mc.yandex.ru/watch/106911321" 
              style={{ position: "absolute", left: "-9999px" }} 
              alt="" 
            />
          </div>
        </noscript>
        {/* --- /Yandex.Metrika counter --- */}
        
      </body>
    </html>
  );
}
