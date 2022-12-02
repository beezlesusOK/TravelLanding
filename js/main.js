(function () {
    const header = document.querySelector(`.header`);
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add(`header_active`);
        } else {
            header.classList.remove(`header_active`);
        }
    }; 
}());

(function (){
    const burgerItem = document.querySelector(`.burger`);
    const menu = document.querySelector(`.header_nav`);
    const first = document.querySelector(`.burger_line_first`);
    const second = document.querySelector(`.burger_line_second`);
    const third = document.querySelector(`.burger_line_third`);
    const burgerClose = document.querySelector(`.burger_close`);
    const burgerClose2 = document.querySelector(`.close`);

        burgerItem.addEventListener(`click`, () => {
            menu.classList.add(`header_nav_active`);
            first.classList.add(`burger_line_first_active`);
            second.classList.add(`burger_line_second_active`);
            third.classList.add(`burger_line_third_active`);
            burgerClose.classList.add(`burger_close_active`);
        });
        burgerClose.addEventListener(`click`, () => {
            menu.classList.remove(`header_nav_active`);
            first.classList.remove(`burger_line_first_active`);
            second.classList.remove(`burger_line_second_active`);
            third.classList.remove(`burger_line_third_active`);
            burgerClose.classList.remove(`burger_close_active`);
        });
        burgerClose2.addEventListener(`click`, () => {
            menu.classList.remove(`header_nav_active`);
            first.classList.remove(`burger_line_first_active`);
            second.classList.remove(`burger_line_second_active`);
            third.classList.remove(`burger_line_third_active`);
            burgerClose.classList.remove(`burger_close_active`);
        });

}());

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());
