window.onload = function () {
    var window_width = window.screen.width;
    var window_height = window.innerHeight;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
        // let b = document.querySelector('.nohidden-box .arrow');

        about.addEventListener('mouseenter', () => {
            // b.style.cssText += 'border-color: #5186c4 #fff #fff;';

            let tl = gsap.timeline({
            });
            tl.to('.hidden-about', { opacity: 1, zIndex: 1, ease: "power1.inOut", })
        });

        hidden.addEventListener('mouseleave', () => {
            // b.style.cssText -= 'border-color: #5186c4 #fff #fff;';
            let tl = gsap.timeline({
            });
            tl.to('.hidden-about', { opacity: 0, zIndex: -1, ease: "power1.inOut", })
        });
    }
    headerAboutMenu();

    function openAni() {
        let tl = gsap.timeline({});

        if (window_width <= 1024) {
            let text = document.querySelectorAll('.ani-text')
            tl.from(text, {
                duration: 1,
                y: 60,
                opacity: 0,
                stagger: {
                    each: 0.25,
                    from: 'start'
                }
            })
        } else {

            tl.from('.left-box img', { duration: 1, opacity: 0, ease: "power1.inOut" })
                .from('.middle-box img', { duration: 1, opacity: 0, ease: "power1.inOut" }, '<0.3')
                .from('.right-box img', { duration: 1, opacity: 0, ease: "power1.inOut" }, '<0.3')
                .from('.middle-box .text', { duration: 1, y: 100, filter: 'blur(10px)', opacity: 0, ease: "power1.inOut" }, '<')
        }
    }
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

            openAni();

        }
    }
    updateProgress();

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

    function c1FloatAni() {
        let tl = gsap.timeline({
            repeat: -1,
            yoyo: true,
            delay: 0.8
        });

        tl.to('.c1-box .content .item1', {
            duration: 1,
            ease: "power0.inOut",
            y: -40
        })


    }
    c1FloatAni();

    function itemAni() {
        let items = document.querySelectorAll('.content-box .content');

        items.forEach((item, index) => {

            let leftAndRight = item.querySelectorAll('.ani-box')
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: 'top 100%',
                }
            });

            if (window_width <= 1024) {
                tl
                    .from(leftAndRight, {
                        y: 100,
                        opacity: 0,
                        duration: 1,
                        ease: "power1.inOut",
                        stagger: {
                            each: 0.5,
                            from: 'start'
                        }

                    })
            } else {
                tl
                    .from(leftAndRight, {
                        y: 300,
                        opacity: 0,
                        duration: 1,
                        ease: "power1.inOut",
                        stagger: {
                            each: 0.5,
                            from: 'start'
                        }

                    })
            }

        });
    }
    itemAni();


}