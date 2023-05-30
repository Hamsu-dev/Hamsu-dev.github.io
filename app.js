document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');
  const sectBtns = document.querySelectorAll('.controls');
  const sectBtn = document.querySelectorAll('.control');
  const allSections = document.querySelectorAll('.main-content');

  function PageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
      sectBtn[i].addEventListener('click', function () {
        let currentBtn = document.querySelector('.active-btn');
        if (currentBtn) {
          currentBtn.classList.remove('active-btn');
        }
        this.classList.add('active-btn');
      });
    }

    // Sections Active class
    allSections.forEach((section) => {
      section.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
          // Remove selected from the other btns
          sectBtns.forEach((btn) => {
            btn.classList.remove('active');
          });
          e.target.classList.add('active');

          // Hide other sections as well
          sections.forEach((section) => {
            section.classList.remove('active');
          });

          const element = document.getElementById(id);
          element.classList.add('active');
        }
      });
    });

    // Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
      let element = document.body;
      element.classList.toggle('light-mode');
    });
  }

  PageTransitions();
});
