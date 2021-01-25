const sendForm = () => {



    const statusMsg = document.createElement('div'),
        errorMsg = 'Чтото пошло не так',
        loadMsg = 'Загрузка...',
        successMsg = 'Сообщение отправлено';
    let isValid = false,
        timeOut;



    statusMsg.style.color = 'white';





    window.addEventListener('submit', (event) => {

        let target = event.target;



        //Проверям какую именно форму подтвердили.
        if (target.closest(`#${target.id}`)) {
            let form = target.closest(`#${target.id}`);
            event.preventDefault();

            //Добавляем div  для сообщений на страницу
            form.appendChild(statusMsg);


            if (!isValidF(form)) {

                if (timeOut) { clearTimeout(timeOut); }
                timeOut = setTimeout(() => {
                    statusMsg.textContent = '';
                }, 3000);
                return;
            }


            //Анимация для ожидания ответа от сервера
            statusMsg.classList.toggle('loader');


            const postData = (body) => {

                return fetch('./server.php', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'aplication/json'
                    },
                    body: JSON.stringify(body),
                    // mode:'cors'

                }).then(response => {
                    if (!response.ok) {
                        
                        throw new Error(response.status);
                    }

                });



            };


            const formData = new FormData(form);
            let body = {};
            for (let val of formData.entries()) {

                body[val[0]] = val[1];
            }



            postData(body)
                .then(() => {


                    statusMsg.classList.toggle('loader');
                    statusMsg.textContent = successMsg;
                    setTimeout(() => {
                        statusMsg.textContent = '';
                    }, 5000);
                    form.reset();
                })
                .catch(error => {

                    statusMsg.classList.toggle('loader');
                    statusMsg.textContent = errorMsg;
                    console.error(error);
                });
        }
    });




    const isValidF = (form) => {

        let inputs = form.querySelectorAll('input');

        for (let target of inputs) {
            let type = target.id.split('-')[1];
            if (type === 'email') {
                isValid = /[\w0-9.]+@\w+\.\w{0,6}/i.test(target.value);
               
                if (!isValid) {
                    statusMsg.innerHTML = 'Заявка не отправлена <br/>Проверьте корректность емаил..';
                    return isValid;
                }
            }
        }
        return isValid;
    };

    const validation = () => {
        const validate = (event) => {

            let target = event.target;

            if (!target.closest('form')) {
                return;
            }
            let type = target.id.split('-')[1];

            if (type === 'message') {
                target.value = target.value.replace(/[A-Za-z]/, '');
            } else if (type === 'phone') {
                target.value = target.value.replace(/[^\+{,1}(\d+)$]/g, '');
            } else if (type === 'name') {
                target.value = target.value.replace(/[^а-я ]/gi, '');
            } else if (type === 'email') {
                target.value = target.value.replace(/[^@.0-9\w]/gi, '');
            }

        };

        document.addEventListener('input', validate);


    };
    validation();

};

export default sendForm;