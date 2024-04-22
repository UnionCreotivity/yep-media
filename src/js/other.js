window.onload = function () {
    var window_width = window.screen.width;
    var window_height = window.innerHeight;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    $('.content-box3-scrolltop-btn').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 800);
    });

    // loading
    let loadingScreen = document.querySelector(".loading-screen");
    let allBody = document.querySelector(".container");
    let loadingText = document.getElementById("loading-text");
    let percent = 1;

    // loading
    function updateProgress() {

        loadingText.textContent = percent + "%";
        percent++;
        if (percent <= 100) {
            setTimeout(updateProgress, 10);
        } else {

            let tl = gsap.timeline({});
            tl.to(loadingScreen, { duration: 1, opacity: 0, ease: "power1.inOut" })
                .to(allBody, { duration: 1, opacity: 1 }, '<0.5')
                .to(loadingScreen, { duration: 1, display: 'none', })

        }
    }
    updateProgress();

    function menuClick() {
        let menu_btn = document.querySelector('.menu-btn');
        let menu_box = document.querySelector('.menu-moblie');
        let menu_close = document.querySelector('.close-btn');
        var menu_tl = gsap.timeline({
            paused: true
        });
        var menu_close_tl = gsap.timeline({

        });

        menu_tl.
            to(menu_box,
                {
                    duration: 1,
                    opacity: 1,
                    zIndex: 9999999,
                    height: '100vh',
                    ease: "power1.inOut"
                }
            )

        menu_btn.addEventListener('click', () => {
            menu_tl.play(0);
            $('body').css('overflow', 'hidden');
        });

        menu_close.addEventListener('click', () => {
            $('body').css('overflow', 'unset');
            menu_close_tl

                .to(menu_box,
                    {
                        duration: 1,
                        opacity: 0,
                        zIndex: 0,
                        height: '0vh',
                        ease: "power1.inOut"
                    }
                )
        });
    };
    menuClick();

    function headerAboutMenu() {
        let about = document.querySelector('.nohidden-box');
        let hidden = document.querySelector('.hidden-about');

        about.addEventListener('mouseenter', () => {
            let tl = gsap.timeline({
            });
            tl.to('.hidden-about', { opacity: 1, zIndex: 1, ease: "power1.inOut", })
        });

        hidden.addEventListener('mouseleave', () => {
            let tl = gsap.timeline({
            });
            tl.to('.hidden-about', { opacity: 0, zIndex: -1, ease: "power1.inOut", })
        });
    }
    headerAboutMenu();

    function scrollHeaderBg() {
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 50) {
                $(".header-box").addClass("active");
            } else {
                $(".header-box").removeClass("active");
            }
        });
    }
    scrollHeaderBg();

    function tabChange() {
        if (window_width > 1024) {
            let tabs = document.querySelectorAll('.tab');
            let contents = document.querySelectorAll('.change-content');
            let originMachine = document.querySelectorAll('.origin-machine')

            tabs.forEach((tab, index) => {
                tab.addEventListener('click', (e) => {

                    tabs.forEach((t) => {
                        if (t !== tab) {
                            t.classList.remove('tab-active');
                        }
                    });

                    contents.forEach((content, i) => {
                        if (index === i) {
                            let tl = gsap.timeline({})
                            tl.to(content, { duration: 0.7, opacity: 1, zIndex: '11', ease: "power0.in" })
                        }
                        else {
                            let tl = gsap.timeline({})
                            tl.to(content, { duration: 0.7, opacity: 0, zIndex: '-1', ease: "power0.in" })
                        }

                        if (index === 1) {
                            let tl = gsap.timeline({})
                            tl.to(originMachine, { duration: 0.7, opacity: 1, ease: "power0.in" })
                        } else {
                            let tl = gsap.timeline({})
                            tl.to(originMachine, { duration: 0.7, opacity: 0, ease: "power0.in" })
                        }
                    });
                    tab.classList.toggle('tab-active');

                });
            });
        }
    }
    tabChange();

    function tabChangeMoblie() {
        if (window_width <= 1024) {
            let tabs = document.querySelectorAll('.tab-moblie');
            let contents = document.querySelectorAll('.change-content-moblie');

            tabs.forEach((tab, index) => {
                tab.addEventListener('click', (e) => {

                    tabs.forEach((t) => {
                        if (t !== tab) {
                            t.classList.remove('tab-active-moblie');
                        }
                    });

                    contents.forEach((content, i) => {
                        if (index === i) {
                            let tl = gsap.timeline({})
                            tl.to(content, { duration: 0.7, display: 'block', opacity: 1, zIndex: '11', ease: "power0.in" })
                        } else {
                            let tl = gsap.timeline({})
                            tl.to(content, { duration: 0.7, display: 'none', opacity: 0, zIndex: '-1', ease: "power0.in" })
                        }
                    });
                    tab.classList.toggle('tab-active-moblie');

                });
            });
        }
    }
    tabChangeMoblie();

    function hoverButton() {
        if (window_width > 1024) {
            let btn = document.querySelectorAll('.content2-button');
            let btnContent = document.querySelectorAll('.item-content');
            let changeItem = document.querySelectorAll('.change-item')

            btn.forEach((item, index) => {

                item.addEventListener('mouseenter', () => {

                    let tl = gsap.timeline({
                    });
                    tl.to(btnContent[index], { duration: 1, opacity: 1, ease: "power1.inOut", })
                        .to(changeItem[index], { duration: 1, opacity: 1, ease: "power1.inOut", }, '<')
                });

                item.addEventListener('mouseleave', () => {

                    let tl = gsap.timeline({
                    });
                    tl.to(btnContent[index], { duration: 1, opacity: 0, ease: "power1.inOut", })
                        .to(changeItem[index], { duration: 1, opacity: 0, ease: "power1.inOut", }, '<')
                });
            })
        }
    }
    hoverButton();

    function hoverContent2Btn() {
        if (window_width > 1024) {
            let btn = document.querySelectorAll('.content-box3 .button-box .button');
            let content = document.querySelectorAll('.content-text-box .text');

            btn.forEach((item, index) => {

                item.addEventListener('mouseenter', () => {

                    let tl = gsap.timeline({
                    });
                    tl.to(content[index], { duration: 1, opacity: 1, ease: "power1.inOut", })

                });

                item.addEventListener('mouseleave', () => {

                    let tl = gsap.timeline({
                    });
                    tl.to(content[index], { duration: 1, opacity: 0, ease: "power1.inOut", })

                });
            })
        }
    }
    hoverContent2Btn();

    function clickTab2Btn() {
        if (window_width <= 1024) {
            let btn = document.querySelectorAll('.button-swiper .swiper-wrapper .swiper-slide .button-box');
            let btnContent = document.querySelectorAll('.item-content-moblie');
            let machineImg = document.querySelectorAll('.change-item-moblie');

            btn.forEach((item, index) => {

                item.addEventListener('click', () => {
                    btn.forEach((t) => {
                        if (t !== index) {
                            t.classList.remove('tab2-active-moblie');
                        }
                    });
                    btnContent.forEach((content, i) => {
                        if (index === i) {
                            let tl = gsap.timeline({})
                            tl.to(content, { duration: 0.7, opacity: 1, ease: "power0.in" })
                        } else {
                            let tl = gsap.timeline({})
                            tl.to(content, { duration: 0.7, opacity: 0, ease: "power0.in" })
                        }
                    });
                    machineImg.forEach((content, i) => {
                        if (index === i) {
                            let tl = gsap.timeline({})
                            tl.to(content, { duration: 0.7, opacity: 1, ease: "power0.in" })
                        } else {
                            let tl = gsap.timeline({})
                            tl.to(content, { duration: 0.7, opacity: 0, ease: "power0.in" })
                        }
                    });

                    item.classList.toggle('tab2-active-moblie');
                });

            })
        }
    }
    clickTab2Btn();

    function clcikTab3Btn() {
        if (window_width <= 1024) {
            let btn = document.querySelectorAll('.tab3-button')
            let tab3Content = document.querySelectorAll('.tab3-content-text')

            btn.forEach((item, index) => {

                item.addEventListener('click', () => {
                    btn.forEach((t) => {
                        if (t !== index) {
                            t.classList.remove('tab3-active-moblie');
                        }
                    });
                    tab3Content.forEach((content, i) => {
                        if (index === i) {
                            let tl = gsap.timeline({})
                            tl.to(content, { duration: 0.7, opacity: 1, ease: "power0.in" })
                        } else {
                            let tl = gsap.timeline({})
                            tl.to(content, { duration: 0.7, opacity: 0, ease: "power0.in" })
                        }
                    });

                    item.classList.toggle('tab3-active-moblie');
                });

            })
        }
    }
    clcikTab3Btn();

}