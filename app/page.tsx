'use client';
import React, { useState } from 'react';
import { GraduationCap, BookOpen, Send, MessageSquare, ArrowRight, ShieldCheck, FileText, UserCheck } from 'lucide-react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // "Белые" формулировки услуг для модерации
  const services = [
    { title: "Консультации по переводу", desc: "Анализ академической разницы", icon: <UserCheck /> },
    { title: "Репетиторство", desc: "Подготовка к экзаменам и зачетам", icon: <BookOpen /> },
    { title: "Оформление работ", desc: "Нормоконтроль по ГОСТ", icon: <FileText /> },
    { title: "Подбор литературы", desc: "Помощь с источниками для статей", icon: <BookOpen /> },
    { title: "Академический отпуск", desc: "Юридическая помощь в оформлении", icon: <ShieldCheck /> },
    { title: "Восстановление", desc: "Консультация по документам", icon: <UserCheck /> },
    { title: "Апелляции", desc: "Помощь в составлении заявлений", icon: <MessageSquare /> },
    { title: "Индивидуальный план", desc: "Составление графика обучения", icon: <FileText /> }
  ];

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    
    // Собираем данные
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-700">
            <GraduationCap size={28} />
            <span>StudentConsult</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs text-slate-500">
            <span>Официальный договор</span>
            <div className="w-px h-4 bg-slate-300"></div>
            <span>Конфиденциально</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-16 md:py-24 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-800 bg-blue-50 rounded-full border border-blue-100">
          Юридическая и консультационная помощь
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 leading-tight">
          Комплексное сопровождение <br /> 
          <span className="text-blue-600">учебного процесса</span>
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Оказываем консультационные услуги и репетиторскую помощь студентам ВУЗов. 
          Помогаем разобраться с документами, переводами и сложными предметами.
        </p>
        <a href="#form" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
          Получить консультацию <ArrowRight size={20} />
        </a>
      </header>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-slate-800">Наши услуги</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-md transition group">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="py-12 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Экспертиза по программам ВУЗов:
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-bold text-slate-600">
            <span>МГУ</span> <span>РУДН</span> <span>РАНХиГС</span> <span>ПМГМУ</span> <span>МГИМО</span> <span>МГТУ</span> <span>ВШЭ</span> <span>РЭУ</span>
          </div>
        </div>
      </section>

      {/* Conversion Form */}
      <section id="form" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-blue-600 rounded-3xl p-1 md:p-12 shadow-2xl shadow-blue-200 text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center p-6">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Бесплатная консультация</h2>
                    <p className="text-blue-100 mb-6">
                        Оставьте заявку, и наш менеджер свяжется с вами в Telegram для уточнения деталей вашей ситуации.
                    </p>
                    <div className="flex items-center gap-3 text-sm text-blue-100/80">
                        <ShieldCheck size={18} />
                        <span>Работаем по договору оферты</span>
                    </div>
                </div>

                <div className="bg-white text-slate-900 p-6 rounded-2xl shadow-lg">
                    {!sent ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input name="name" required placeholder="Ваше имя" className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                        <input name="contact" required placeholder="Telegram / Телефон" className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                        <select name="service" className="w-full p-3 rounded-lg border border-slate-200 bg-white">
                            <option>Консультация по учебе</option>
                            <option>Репетиторство</option>
                            <option>Оформление документов</option>
                            <option>Другое</option>
                        </select>
                        <button disabled={loading} className="w-full bg-blue-600 text-white p-4 rounded-lg font-bold hover:bg-blue-700 transition flex justify-center items-center gap-2">
                           {loading ? '...' : 'Отправить заявку'} <Send size={18} />
                        </button>
                        <p className="text-[10px] text-center text-slate-400">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
                    </form>
                    ) : (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-xl font-bold">Принято!</h3>
                        <p className="text-slate-500 text-sm">Мы напишем вам в ближайшее время.</p>
                    </div>
                    )}
                </div>
            </div>
        </div>
      </section>

      {/* DISCLAIMER FOOTER - КРИТИЧНО ДЛЯ ЯНДЕКСА */}
      <footer className="py-12 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto text-xs text-slate-400 leading-relaxed text-center">
            <p className="mb-4">
                © 2026 StudentConsult. Информационно-консультационные услуги.
            </p>
            <p className="max-w-3xl mx-auto border-t border-slate-200 pt-4">
                <strong>Отказ от ответственности:</strong> Компания оказывает исключительно консультационные услуги, услуги по подбору материала и репетиторству. 
                Мы не занимаемся написанием научных работ, дипломов, курсовых и диссертаций. Мы не сдаем экзамены и зачеты за студентов. 
                Вся предоставляемая информация используется клиентами исключительно как справочный материал.
            </p>
        </div>
      </footer>
    </div>
  );
}