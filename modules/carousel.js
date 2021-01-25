export default class SliderCarusel {

    constructor(
        { main, wrap, next, prev, position = 0, slidesToShow = 3, infinity = false, responsive = [] }

    ) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = this.wrap.children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            slidesWidth: Math.floor(100 / this.slidesToShow),
            infinity,
        };
        this.responsive = responsive;
    }

    init() {

        this.addClass();
        this.addStyles();

        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
        if (this.responsive) { this.responseInit(); }

    }

    responseInit() {

        const slidesToShowDefault = this.slidesToShow;
        const allResponse = this.responsive.map(({ breakpoint }) => breakpoint);
        const maxResponse = Math.max(...allResponse);

        const checkResponse = () => {

            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse[i]) {
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.options.slidesWidth = Math.floor(100 / this.slidesToShow);
                        this.addStyles();
                    }
                }
            } else {

                this.slidesToShow = slidesToShowDefault;
                this.options.slidesWidth = Math.floor(100 / this.slidesToShow);
                this.addStyles();
            }
        };

        checkResponse();

        window.addEventListener('resize', checkResponse);

    }

    addClass() {

        this.main.classList.add('carousel-slider');
        this.wrap.classList.add('carousel-slider__wrap');
        for (let item of this.slides) {
            item.classList.add('carousel-slider__item');
        }
    }

    addStyles() {

        let styles = document.getElementById('sliderCarousel-style');
        if (!styles) {
            styles = document.createElement('style');
            styles.id = 'sliderCarousel-style';
        }
        styles.textContent = `
      
        .carousel-slider {
            overflow: hidden !important;
        }
        
        .carousel-slider__wrap {
            display: flex !important;
            transition: transform 0.5s !important;
            will-change: transform !important;
        }
        
        .carousel-slider__item {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: auto 0 !important;
            flex: 0 0 ${this.options.slidesWidth}% !important;
        }

        `;
        document.head.appendChild(styles);
    }
    
    controlSlider() {

        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider() {

        if (this.options.infinity || this.options.position > 0) {


            --this.options.position;

            if (this.options.position < 0) {
                this.options.position = this.slides.length - this.slidesToShow;
            }
            this.wrap.style.transform = `
        translateX(-${this.options.position * this.options.slidesWidth}%)`;

        }
    }

    nextSlider() {

        if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
            ++this.options.position;
            if (this.options.position > this.slides.length - this.slidesToShow) { this.options.position = 0; }
            this.wrap.style.transform = `
        translateX(-${this.options.position * this.options.slidesWidth}%)`;
        }

    }

    addArrow() {

        this.prev = document.createElement('button');
        this.next = document.createElement('button');
        this.prev.classList.add('carousel_slider__prev');
        this.next.classList.add('carousel_slider__next');

        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);

        const style = document.createElement('style');
        style.textContent = `
        .carousel_slider__prev, 
        .carousel_slider__next {
            margin: 0 10px;
            border: 20px solid transparent;
            background: transparent;
        }
        
        .carousel_slider__next {
            border-left-color: #19bbff;
        }
        
        .carousel_slider__prev {
            border-right-color: #19bbff;
        }
        
        .carousel_slider__prev:focus, 
        .carousel_slider__prev:hover, 
        .carousel_slider__next:focus, 
        .carousel_slider__next:hover {
            background: transparent;
            outline: transparent;
        }
        `;
        document.head.appendChild(style);
    }
}
