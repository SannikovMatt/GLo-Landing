const team = () => {

    const command = document.querySelector('#command');


    command.addEventListener('mouseover', (e) => {

        const target = e.target;


        if (target.closest('.command__photo')) {
            const img = target.closest('.command__photo'),
                mLeavePhoto = img.getAttribute('src');

            img.src = img.dataset.img;

            const onMLeave = () => {

                img.src = mLeavePhoto;
                img.removeEventListener('mouseleave', onMLeave);
            };

            img.addEventListener('mouseleave', onMLeave);

        }


    });


};

export default team;