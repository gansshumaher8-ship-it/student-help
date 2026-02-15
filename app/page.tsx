'use client';
import React, { useState } from 'react';
import { BookOpen, Send, CheckCircle2, ShieldCheck, FileText, UserCheck, Library, GraduationCap, ArrowRight } from 'lucide-react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // АБСОЛЮТНО БЕЛЫЕ УСЛУГИ (Юридически это репетиторство и клининг текста)
  const services = [
    { title: "Репетиторство", desc: "Разбор сложных тем с преподавателем", icon: <UserCheck /> },
    { title: "Подбор литературы", desc: "Сбор источников для исследований", icon: <Library /> },
    { title: "Оформление по ГОСТ", desc: "Нормоконтроль и корректура текста", icon: <FileText /> },
    { title: "Перевод текстов", desc: "Профессиональный академический перевод", icon: <BookOpen /> },
    { title: "Повышение оригинальности", desc: "Рерайт и стилистическая правка", icon: <CheckCircle2 /> },
    { title: "Консультации", desc: "Помощь в выборе темы исследования", icon: <Send /> },
    { title: "Документооборот", desc: "Помощь в заполнении заявлений", icon: <ShieldCheck /> },
    { title: "Мастер-классы", desc: "Обучение академическому письму", icon: <GraduationCap /> }
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
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Навигация */}
      <nav className="sticky top-0 z-50 bg-white/95 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-800">
            <Library size={28} />
            <span>AcademicCenter</span>
          </div>
          <div className="hidden md:flex text-xs text-slate-500 gap-4">
            <span>Официальный договор</span>
            <span>Консультационные услуги</span>
          </div>
        </div>
      </nav>

      {/* Hero Section - СТРОГО ИНФОРМАЦИОННЫЙ СТИЛЬ */}
      <header className="py-20 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-800 bg-blue-50 rounded-full">
          ИНФОРМАЦИОННО-КОНСУЛЬТАЦИОННЫЙ ЦЕНТР
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
          Профессиональная помощь <br /> 
          <span className="text-blue-700">в учебном процессе</span>
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Оказываем услуги репетиторства, подбора учебных материалов и технического оформления текстов. 
          Помогаем разобраться в сложных дисциплинах.
        </p>
        
        <a href="#form" className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-800 transition">
          Получить консультацию <ArrowRight size={20} />
        </a>
      </header>

      {/* Список услуг */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center text-slate-800">Наши направления</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-6 bg-white border border-slate-200 rounded-xl hover:shadow-md transition">
                <div className="text-blue-700 mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма */}
      <section id="form" className="py-20 px-6">
        <div className="max-w-3xl mx-auto bg-white border border-slate-200 p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-2 text-center">Заявка на консультацию</h2>
          <p className="text-center text-slate-500 mb-8 text-sm">Менеджер свяжется с вами для уточнения деталей</p>
          
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" required placeholder="Ваше имя" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" />
              <input name="contact" required placeholder="Телефон или Telegram" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" />
              <select name="service" className="w-full p-3 rounded-lg border border-slate-300 bg-white">
                <option>Нужен репетитор</option>
                <option>Подбор литературы</option>
                <option>Оформление по ГОСТ</option>
                <option>Другое</option>
              </select>
              <button disabled={loading} className="w-full bg-blue-700 text-white p-4 rounded-lg font-bold hover:bg-blue-800 transition flex justify-center items-center gap-2">
                {loading ? "..." : "Отправить"} <Send size={18} />
              </button>
              <p className="text-xs text-center text-slate-400">Согласен на обработку персональных данных</p>
            </form>
          ) : (
            <div className="text-center py-8">
              <CheckCircle2 size={48} className="mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-bold">Спасибо!</h3>
              <p>Мы скоро с вами свяжемся.</p>
            </div>
          )}
        </div>
      </section>

      {/* DISCLAIMER - САМОЕ ВАЖНОЕ ДЛЯ ЯНДЕКСА */}
      <footer className="py-8 px-6 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-[11px] text-slate-500 text-justify leading-relaxed">
           <p className="font-bold mb-2">Отказ от ответственности (Disclaimer):</p>
           <p>
             Данный сайт предлагает исключительно информационно-консультационные услуги, услуги по подбору, обработке и структурированию информации, а также услуги репетиторства. 
             <strong>Мы не оказываем услуги по написанию научных работ, дипломов, курсовых, диссертаций и иных работ, предусмотренных государственной системой научной аттестации или необходимых для прохождения промежуточной или итоговой аттестации обучающихся.</strong> 
             Все материалы, подготовленные в рамках оказания услуг, могут использоваться заказчиком только в качестве образцов, справочных материалов или источников информации для самостоятельной подготовки работы.
           </p>
           <p className="mt-2">© 2026 AcademicCenter. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}