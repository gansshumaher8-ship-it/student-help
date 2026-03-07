import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // Обязательный импорт для скриптов в Next.js

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"], // Добавили поддержку кириллицы
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"], // Добавили поддержку кириллицы
});

export const metadata = {
  title: 'Помощь студентам без предоплаты | Зачисления, Сессии, Дипломы',
  description: 'Профессиональное сопровождение студентов в ведущих ВУЗах: РУДН, МГУ, РАНХиГС, МГИМО. Оплата только по факту выполнения работы. Конфиденциально.',
  keywords: 'закрыть сессию под ключ, помощь с сессией за деньги, сдать сессию если ничего не знаешь, закрыть долги в универе, купить зачет в вузе, академическая задолженность помощь, как закрыть сессию без отчисления, заказать дипломную работу цена, купить курсовую работу срочно, написание ВКР на заказ, отчет по практике купить с печатью, дипломная работа под ключ, помощь в написании курсовой, повысить оригинальность текста антиплагиат, онлайн помощь на экзамене, решить тест синергия за деньги, сдать экзамен онлайн за меня, ответы на тесты ранхигс (или любой другой ВУЗ), помощь с сопроматом / вышматом онлайн, перевод из одного вуза в другой помощь, помощь при поступлении в вуз, восстановиться в универе после отчисления, купить справку вызов на сессиюпомощь студентам, зачисление в вуз, переводы между вузами, закрыть сессию, помощь с зачетами, диплом на заказ, оплата по факту',
  // Настройки для того, как сайт будет выглядеть при пересылке в Telegram
  openGraph: {
    title: 'Студенческий сервис №1 — Помощь без предоплаты',
    description: 'Решим любой академический вопрос в кратчайшие сроки. Оплата по факту!',
    type: 'website',
    url: 'https://student-helps.vercel.app',
    images: [
      {
        url: 'https://student-helps.vercel.app/og-image.jpg', // Сюда потом загрузим картинку
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
