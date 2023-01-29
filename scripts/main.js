const coll = document.getElementsByClassName('program__list-button');


for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            this.style.background = 'url(../course-img/svg/plus.svg) no-repeat center';
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            this.style.background = 'url(../course-img/svg/minus.svg) no-repeat center';
        };
    });
}