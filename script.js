// Плавная прокрутка по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') === '#') return;
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Простая интерактивность (можно расширять)
console.log('%c Лендинг медицинского центра загружен успешно!', 'color: #0ea5e9; font-size: 16px; font-weight: bold');
