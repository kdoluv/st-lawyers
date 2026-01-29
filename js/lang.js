// ================= LANGUAGE MANAGER =================
(function () {

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // تبديل النصوص
    document.querySelectorAll('[data-ar]').forEach(el => {
      const value = el.getAttribute('data-' + lang);
      if (value) {
        el.innerHTML = value;
      }
    });

    // تبديل placeholders
    document.querySelectorAll('[data-ar-placeholder]').forEach(el => {
      const value = el.getAttribute('data-' + lang + '-placeholder');
      if (value) {
        el.placeholder = value;
      }
    });

    // تبديل العنوان
    const title = document.querySelector('title');
    if (title && title.getAttribute('data-' + lang)) {
      title.textContent = title.getAttribute('data-' + lang);
    }

    localStorage.setItem('site_lang', lang);
  }

  // اجعل الدالة متاحة عالمياً
  window.setLanguage = function (lang) {
    applyLanguage(lang);
  };

  // تحميل اللغة عند فتح الصفحة
  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('site_lang') || 'ar';
    applyLanguage(savedLang);
  });

  function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-ar]').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text !== null) {
      el.innerHTML = text;
    }
  });

  // تغيير عنوان الصفحة
  const title = document.querySelector('title');
  if (title && title.getAttribute('data-' + lang)) {
    title.textContent = title.getAttribute('data-' + lang);
  }
}

// اللغة الافتراضية
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('ar');
});

})();
