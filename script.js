(function () {
  const ui = document.getElementById('ui');
  const heartCount = 100;
  const phrases = [
    'I Love You',
    'Я люблю тебя',
    'Леночка',
    '♥',
    'Forever',
  ];

  for (let i = 0; i < heartCount; i++) {
    const love = document.createElement('div');
    love.className = 'love';
    love.style.setProperty('--delay', `${i * -300}ms`);
    love.style.setProperty('--index', i);

    const text = phrases[i % phrases.length];
    love.innerHTML = `
      <div class="love_horizontal">
        <div class="love_vertical">
          <div class="love_word">${text}</div>
        </div>
      </div>
    `;

    ui.appendChild(love);
  }

  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => observer.observe(el));

  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => {
      img.closest('.photo-frame')?.classList.add('is-placeholder');
      img.remove();
    });
  });
})();
