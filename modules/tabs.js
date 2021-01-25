const tabs = () => {

    const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {

        tabContent.forEach((elem, i) => {

            if (index === i) {
                elem.classList.remove('d-none');
                tab[i].classList.add('active');
            } else {

                elem.classList.add('d-none');
                tab[i].classList.remove('active');
            }

        });
    };
    tabHeader.addEventListener('click', (e) => {

        let target = e.target;

        target = target.closest('.service-header-tab');


        if (target) {

            tab.forEach((item, i) => {

                if (item === target) {

                    toggleTabContent(i);
                }

            });
        }

    });

};

export default tabs;
