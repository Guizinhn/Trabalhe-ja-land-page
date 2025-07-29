const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  document.querySelectorAll('.js-reveal, .objeto3').forEach(el => {
    observer.observe(el);
  });
 
  window.addEventListener('scroll', () => {
    const img = document.querySelector('.objetocelular img');
    const position = img.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      img.classList.add('show');
    }
  });

