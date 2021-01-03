const sendForm = () => {



    const statusMsg = document.createElement('div'),
        errorMsg = 'Чтото пошло не так',
        loadMsg = 'Загрузка...',
        successMsg = 'Сообщение отправлено';



    statusMsg.style.color = 'white';


    window.addEventListener('submit', (event) => {

        let target = event.target;

        //Проверям какую именно форму подтвердили.
        if (target.closest(`#${target.id}`)) {
            let form = target.closest(`#${target.id}`);
            event.preventDefault();

            //Добавляем div  для сообщений на страницу
            form.appendChild(statusMsg);

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
                        console.log(response);
                        throw new Error(response.status);
                    }
                   ;
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
                    setTimeout(()=>{
                        statusMsg.textContent = '';
                    },5000)
                    form.reset();
                })
                .catch(error => {

                    statusMsg.classList.toggle('loader');
                    statusMsg.textContent = errorMsg;
                    console.error(error);
                })
        }
    });







    const validation = () => {

        document.addEventListener('input', (event) => {

            let target = event.target;

            if (!target.closest('form')) {
                return;
            } else {

                let type = target.id.split('-')[1];

                if (type === 'message') {
                    target.value = target.value.replace(/[A-Za-z]/, '');
                } else if (type === 'phone') {
                    target.value = target.value.replace(/[^\+{,1}(\d+)$]/g, '');
                } else if (type === 'name') {
                    target.value = target.value.replace(/[^а-я ]/gi, '');
                }
            }
        });

    };
    validation();

};

export default sendForm;