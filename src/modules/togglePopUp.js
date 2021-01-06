import toggleMenu from "./toggleMenu";

const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = popup.querySelector('.popup-content');

    const appearPopUp = () => {
        let counter = 1;
        let stopAnim;
        popup.style.display = 'block';

        if (screen.width < 768) { return; }

        const comeRight = () => {
            if (counter >= 10) {
                cancelAnimationFrame(stopAnim);
                return;
            }

            popupContent.style.top = counter + '%';
            counter += (parseInt(popupContent.style.top) - counter) / 7 + 1;

            stopAnim = requestAnimationFrame(comeRight);
        };
        comeRight();




    };

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {

            popup.style.display = 'block';
            appearPopUp();
        });
    });


    popup.addEventListener('click', (e) => {

        let target = e.target;
        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {

            if (!target.closest('.popup-content')) { popup.style.display = 'none'; }

        }

    });

};

export default togglePopUp;