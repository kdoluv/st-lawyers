<script>
function toggleMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('open');

  // إعادة تطبيق اللغة بعد فتح القائمة
  const lang = localStorage.getItem('site_lang') || 'ar';
  if (window.setLanguage) {
    setLanguage(lang);
  }
}

</script>
