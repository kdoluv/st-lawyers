function setLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

document.querySelectorAll("input[data-ar], textarea[data-ar]").forEach(el => {
  el.placeholder = el.getAttribute(`data-${lang}`);
});
}

