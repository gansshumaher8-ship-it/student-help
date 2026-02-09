'use client';
import React, { useState } from 'react';
import { GraduationCap, CheckCircle2, Send, MessageSquare, ArrowRight, ShieldCheck, Wallet } from 'lucide-react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const services = [
    { title: "Зачисления", desc: "Помощь в поступлении" },
    { title: "Переводы", desc: "Между ВУЗами" },
    { title: "Сессии", desc: "Закрытие под ключ" },
    { title: "Зачеты", desc: "Любая сложность" },
    { title: "Экзамены", desc: "Гарантия результата" },
    { title: "Доп. пересдачи", desc: "Даже после дедлайна" },
    { title: "Восстановления", desc: "Обсуждается отдельно" },
    { title: "Дипломы", desc: "Спец. заказ под ключ" }
  ];

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    const formData = {
      name: e.target.name.value,
      contact: e.target.contact.value,
      service: e.target.service.value,
    };
    try {
      const res = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) setSent(true);
    } catch (err) {
      alert("Ошибка отправки. Попробуйте еще раз.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <GraduationCap size={28} />
            <span>StudentSupport</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:flex items-center gap-1 text-sm font-medium text-green-600">
              <ShieldCheck size={16} /> Без предоплаты
            </span>
            <a href="#form" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
              Оставить заявку
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-16 md:py-24 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-green-700 bg-green-50 rounded-full border border-green-100">
          РАБОТАЕМ БЕЗ ПРЕДОПЛАТЫ — ОПЛАТА ПО ФАКТУ
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
          Помощь студентам в <br /> 
          <span className="text-blue-600">сложных ситуациях</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Профессиональное сопровождение в ведущих ВУЗах. Вы платите только тогда, когда задача полностью выполнена.
        </p>
        <div className="flex justify-center gap-4">
           <div className="flex items-center gap-2 text-slate-500 font-medium">
             <Wallet className="text-blue-500" /> 0₽ аванс
           </div>
           <div className="w-px h-6 bg-slate-300"></div>
           <div className="flex items-center gap-2 text-slate-500 font-medium">
             <ShieldCheck className="text-blue-500" /> 100% гарантия
           </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Направления помощи</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div key={s.title} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
              <CheckCircle2 className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-slate-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-12 bg-slate-100 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            Подходит для университетов:
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg font-bold text-slate-500 opacity-80">
            <span>РУДН</span> <span>МГУ</span> <span>РАНХиГС</span> <span>ПМГМУ</span> <span>МГИМО</span> <span>МГТУ</span> <span>РГСУ</span> <span>Синергия</span>
          </div>
        </div>
      </section>

      {/* Conversion Form */}
      <section id="form" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center border border-slate-100 p-8 rounded-[40px] bg-gradient-to-br from-white to-slate-50 shadow-2xl shadow-slate-200/50">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Никаких рисков</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Мы уверены в качестве своей работы, поэтому **не берем предоплату**. Вы проверяете результат и только после этого производите оплату.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-700 font-semibold">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">1</div>
                Оставляете заявку
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-semibold">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">2</div>
                Согласовываем детали
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-semibold text-blue-600">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm underline decoration-2 underline-offset-4">3</div>
                Оплата по факту решения
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm shadow-blue-100">
            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Описать ситуацию:</h3>
                <input name="name" required placeholder="Ваше имя" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition" />
                <input name="contact" required placeholder="Telegram / Телефон" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition" />
                <select name="service" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition bg-white cursor-pointer">
                  {services.map(s => <option key={s.title}>{s.title}</option>)}
                </select>
                <button 
                  disabled={loading}
                  className="w-full bg-blue-600 text-white p-5 rounded-xl font-bold text-lg flex justify-center items-center gap-3 hover:bg-blue-700 disabled:opacity-50 transition"
                >
                  {loading ? "Отправка..." : "Получить консультация"} <Send size={20} />
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-4">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Готово!</h3>
                <p className="text-slate-600 text-sm">Мы уже получили вашу заявку и скоро напишем в Telegram.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center text-slate-400 text-xs border-t border-slate-100">
        © 2026 StudentSupport | Помощь студентам
      </footer>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Помощь студентам",
      "description": "Помощь в зачислении, переводах и сдаче сессий без предоплаты.",
      "areaServed": "Russia",
      "provider": {
        "@type": "Organization",
        "name": "StudentSupport"
      }
    }),
  }}
/>
    </div>
  );
}