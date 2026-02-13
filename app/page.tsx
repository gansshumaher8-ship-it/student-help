'use client';
import React, { useState } from 'react';
import { GraduationCap, BookOpen, Send, CheckCircle2, ShieldCheck, Wallet, Clock, FileCheck } from 'lucide-react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // Хитрая формулировка услуг: звучит как "решение проблемы", но юридически это "помощь"
  const services = [
    { title: "Сопровождение сессии", desc: "Помощь по всем предметам", icon: <Clock /> },
    { title: "Выпускные работы", desc: "Оформление, план, источники", icon: <FileCheck /> },
    { title: "Переводы в ВУЗы", desc: "Консультация по зачислению", icon: <GraduationCap /> },
    { title: "Закрытие долгов", desc: "Помощь с «хвостами»", icon: <CheckCircle2 /> },
    { title: "Курсовые проекты", desc: "Подбор материала + ГОСТ", icon: <BookOpen /> },
    { title: "Онлайн-помощь", desc: "Срочная поддержка", icon: <Send /> },
    { title: "Восстановление", desc: "Решение сложных ситуаций", icon: <ShieldCheck /> },
    { title: "Индивидуальный план", desc: "Работа с деканатом", icon: <FileCheck /> }
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
      await fetch('/api/send-message', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      setSent(true);
    } catch (err) {
      alert("Ошибка. Попробуйте снова.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      
      {/* Навигация с акцентом на "Без предоплаты" */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-700">
            <GraduationCap size={28} />
            <span>StudentHelp</span>
          </div>
          <div className="flex items-center gap-2 text-green-600 font-bold text-sm bg-green-50 px-3 py-1 rounded-full border border-green-200">
            <Wallet size={16} />
            <span className="hidden sm:inline">Работаем без предоплаты</span>
          </div>
        </div>
      </nav>

      {/* Hero Section - Агрессивный, но безопасный */}
      <header className="py-20 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-blue-800 bg-blue-100 rounded-full">
          🚀 СРОЧНАЯ ПОМОЩЬ СТУДЕНТАМ
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900 leading-tight">
          Решим проблемы с учебой <br /> 
          <span className="text-blue-600">с оплатой по факту</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Берем на себя всю рутину: от подбора материалов до оформления документов. 
          Вы платите только тогда, когда видите результат.
        </p>
        
        {/* Триггеры доверия */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
           <div className="flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-200">
             <Wallet className="text-green-500" /> 
             <span className="font-bold text-slate-700">0₽ Аванс</span>
           </div>
           <div className="flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-200">
             <ShieldCheck className="text-blue-500" /> 
             <span className="font-bold text-slate-700">Гарантия результата</span>
           </div>
        </div>

        <a href="#form" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-blue-200">
          Оставить заявку <Send size={20} />
        </a>
      </header>

      {/* Список услуг (Адаптированный под Яндекс) */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Чем мы можем помочь?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div key={s.title} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-400 hover:shadow-lg transition group">
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-slate-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Логотипы ВУЗов */}
      <section className="py-12 bg-slate-100 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Работаем со студентами:
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg font-bold text-slate-500 opacity-70">
            <span>МГУ</span> <span>РУДН</span> <span>РАНХиГС</span> <span>ПМГМУ</span> <span>МГИМО</span> <span>МГТУ</span> <span>РГСУ</span> <span>Синергия</span>
          </div>
        </div>
      </section>

      {/* Форма захвата */}
      <section id="form" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center border border-slate-100 p-8 rounded-[40px] bg-gradient-to-br from-white to-blue-50 shadow-2xl shadow-slate-200/50">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Узнайте стоимость решения</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Опишите ситуацию. Мы проанализируем её и скажем, как можем помочь. Это бесплатно и ни к чему вас не обязывает.
            </p>
            <div className="space-y-4 font-medium text-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                Вы оставляете заявку
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                Мы предлагаем варианты
              </div>
              <div className="flex items-center gap-3 text-blue-700">
                <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold"><CheckCircle2 size={18} /></div>
                Вы платите только за результат
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg">
            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input name="name" required placeholder="Ваше имя" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                <input name="contact" required placeholder="Telegram или телефон" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                <select name="service" className="w-full p-4 rounded-xl border border-slate-200 bg-white">
                  <option>Нужна помощь с сессией</option>
                  <option>Вопрос по диплому/курсовой</option>
                  <option>Зачисление / Перевод</option>
                  <option>Другое</option>
                </select>
                <button disabled={loading} className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition flex justify-center items-center gap-2 shadow-lg shadow-blue-200/50">
                  {loading ? "..." : "Рассчитать стоимость"} <ArrowRight size={20} />
                </button>
                <p className="text-xs text-center text-slate-400 mt-2">Конфиденциальность гарантирована.</p>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle2 size={40} /></div>
                <h3 className="text-xl font-bold">Заявка принята!</h3>
                <p className="text-slate-500">Пишем вам в Telegram...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Обязательный Disclaimer для Яндекса (мелкий, но есть) */}
      <footer className="py-8 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-[10px] text-slate-400 text-center leading-relaxed">
           <p>© 2026 StudentHelp. Информационно-консультационные услуги.</p>
           <p className="mt-2 opacity-70">
             Отказ от ответственности: Компания оказывает услуги по подбору материалов, репетиторству и консультированию. 
             Мы не выполняем научные работы, которые сдаются в качестве итоговой аттестации (дипломы, диссертации). 
             Результаты нашей работы используются клиентами как справочный материал.
           </p>
        </div>
      </footer>
    </div>
  );   
}