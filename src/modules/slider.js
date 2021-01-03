const slider = () => {


    const slider = document.querySelector('.portfolio-content'),
        slide = slider.querySelectorAll('.portfolio-item'),
        portfolioDotes = slider.querySelector('.portfolio-dots');

    let currentSlide = 0,
        interval,
        dot = slider.querySelectorAll('.dot');

    const setDots = () => {
        let li = '<li class="dot"></li>';
        slide.forEach(() => { portfolioDotes.insertAdjacentHTML('beforeend', li); });
        dot = slider.querySelectorAll('.dot');
        dot[0].classList.add('dot-active');
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const autoSlide = () => {

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        currentSlide++;
        if (currentSlide >= slide.length) { currentSlide = 0; }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');

    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoSlide, time);
    };


    const stopSlide = () => {

        clearInterval(interval);
    };


    slider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if (!target.matches('.dot, .portfolio-btn')) { return; }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('#arrow-left')) {

            currentSlide--;

        } else if (target.matches('.dot')) {

            dot.forEach((item, index) => {

                if (item === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = slide.length - 1;

        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');


    });

    slider.addEventListener('mouseover', (event) => {
        let target = event.target;

        if (target.matches('.portfolio-btn') || (target.matches('.dot'))) {

            stopSlide();
        }

    });
    slider.addEventListener('mouseout', (event) => {
        let target = event.target;

        if (target.matches('.portfolio-btn') || (target.matches('.dot'))) {

            startSlide();
        }

    });

    setDots();
    startSlide(2000);


};

export default slider;