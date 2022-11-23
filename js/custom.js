$('document').ready(function () {
    const burger = document?.querySelector('[data-burger]');
    const nav = document?.querySelector('.nav');
    const navLinks = nav?.querySelectorAll('.header__nav-link');
    const body = document.body;
    const header = document?.querySelector('.header');
    const headerButtons = document?.querySelector('.header__callback')
    
    burger?.addEventListener('click', () => {
      body.classList.toggle('stop-scroll');
      burger?.classList.toggle('burger_active');
      nav?.classList.toggle('header__nav_visible');
      headerButtons?.classList.toggle('header__callback_visible');
    });
    
    navLinks.forEach(el => {
      el.addEventListener('click', () => {
       body.classList.remove('stop-scroll');
       burger?.classList.remove('burger_active');
       nav?.classList.remove('header__nav_visible');
       headerButtons?.classList.toggle('header__callback_visible');
      });
    });
        const swiper3 = new Swiper('.manufacture__swiper', {
       speed: 400,  
       spaceBetween: 20,
       navigation: {
          nextEl: ".manufacture__swiper-button-next",
          prevEl: ".manufacture__swiper-button-prev",
       },   
       pagination: {
         el: '.swiper-pagination',
         clickable: true,
       },
    
       breakpoints: {    
        320: {
          slidesPerView: 3,
          spaceBetween: 20
        },    
        997: {
          slidesPerView: 4,
          spaceBetween: 30
        },   
       
      }
     });
        const swiper = new Swiper(".production__thumbsSlider", {
       spaceBetween: 10,
       slidesPerView: 3,
       freeMode: true,
       watchSlidesProgress: true,
     });
    const swiper2 = new Swiper('.production__swiper', {
       speed: 400,
       spaceBetween: 100,
       navigation: {
          nextEl: ".production__swiper-button-next",
          prevEl: ".production__swiper-button-prev",
        },
       thumbs: {
          swiper: swiper,
        },
     });
   
    // inputmask
    const forms = document.querySelectorAll('.form');
    const feedbackInputTel = document.querySelector('.feedback__input-tel')
    const heroInputTel = document.querySelector('.hero__input-tel')
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(feedbackInputTel);
    inputMask.mask(heroInputTel);

    const validation = new JustValidate('.hero__form');

    validation
      .addField('.input-name', [
        {
          rule: 'minLength',
          value: 3,
          errorMessage: 'Имя должно состоять минимум из 3 символов'
        },
        {
          rule: 'maxLength',
          value: 30,
        },
        {
          rule: 'required',
          value: true,
          errorMessage: 'Введите имя!'
        }
      ])
      .addField('.input-mail', [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Email обязателен',
        },
        {
          rule: 'email',
          value: true,
          errorMessage: 'Введите корректный Email',
        },
      ])
      .addField('.input-tel', [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Телефон обязателен',
        },
        {
          rule: 'function',
          validator: function() {
            const phone = heroInputTel.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: 'Введите корректный телефон',
        },
      ]).onSuccess((event) => {
        console.log('Validation passes and form submitted', event);

        let formData = new FormData(event.target);

        console.log(...formData);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        event.target.reset();
      });    

      const validation2 = new JustValidate('.feedback__form');

      validation2
        .addField('.feedback__input-name', [
          {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Имя должно состоять минимум из 3 символов'
          },
          {
            rule: 'maxLength',
            value: 30,
          },
          {
            rule: 'required',
            value: true,
            errorMessage: 'Введите имя!'
          }
        ])
        .addField('.feedback__input-mail', [
          {
            rule: 'required',
            value: true,
            errorMessage: 'Email обязателен',
          },
          {
            rule: 'email',
            value: true,
            errorMessage: 'Введите корректный Email',
          },
        ])
        .addField('.feedback__input-tel', [
          {
            rule: 'required',
            value: true,
            errorMessage: 'Телефон обязателен',
          },
          {
            rule: 'function',
            validator: function() {
              const phone = feedbackInputTel.inputmask.unmaskedvalue();
              return phone.length === 10;
            },
            errorMessage: 'Введите корректный телефон',
          },
        ]).onSuccess((event) => {
          console.log('Validation passes and form submitted', event);
  
          let formData = new FormData(event.target);
  
          console.log(...formData);
  
          let xhr = new XMLHttpRequest();
  
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
                console.log('Отправлено');
              }
            }
          }
  
          xhr.open('POST', 'mail.php', true);
          xhr.send(formData);
  
          event.target.reset();
        });    
});

