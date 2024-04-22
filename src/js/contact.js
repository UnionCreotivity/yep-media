window.onload = function () {
    var window_width = window.screen.width;
    var window_height = window.innerHeight;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    //loading
    let loadingScreen = document.querySelector(".loading-screen");
    let allBody = document.querySelector(".container");
    let loadingText = document.getElementById("loading-text");
    let percent = 1;

    //loading
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

            speechBubbles();
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

    function floatBubbles() {

        if (window_width <= 1024) {
            let tl = gsap.timeline({
                repeat: -1,
                delay: 3,
                yoyo: true
            });

            tl.from('.speech-bubbles1', {
                duration: 1,
                ease: "power0.inOut",
                y: -20
            })
                .from('.japan', {
                    duration: 1,
                    ease: "power0.inOut",
                    y: 10
                }, '<')
                .from('.en', {
                    duration: 1,
                    ease: "power0.inOut",
                    y: -20
                }, '<')
                .from('.speech-bubbles3', {
                    duration: 1,
                    ease: "power0.inOut",
                    y: -25
                }, '<')
                .from('.bonjour', {
                    duration: 1,
                    ease: "power0.inOut",
                    y: 15
                }, '<')
                .from('.korean', {
                    duration: 1,
                    ease: "power0.inOut",
                    y: -15
                }, '<')

        } else {
            let tl = gsap.timeline({
                repeat: -1,
                delay: 2,
                yoyo: true
            });

            tl.from('.speech-bubbles1 img', {
                duration: 1,
                ease: "power0.inOut",
                y: -40
            })
                .from('.speech-bubbles2 img', {
                    duration: 1,
                    ease: "power0.inOut",
                    y: 20
                }, '<')
                .from('.speech-bubbles3 img', {
                    duration: 1,
                    ease: "power0.inOut",
                    y: -40
                }, '<')
                .from('.speech-bubbles4 img', {
                    duration: 1,
                    ease: "power0.inOut",
                    y: -15
                }, '<')
                .from('.speech-bubbles5 img', {
                    duration: 1,
                    ease: "power0.inOut",
                    y: 30
                }, '<')
                .from('.speech-bubbles6 img', {
                    duration: 1,
                    ease: "power0.inOut",
                    y: 45
                }, '<')
        }

    }
    floatBubbles();

    function speechBubbles() {

        if (window_width <= 1024) {
            const item = document.querySelectorAll('.speech-bubbles')
            let tl = gsap.timeline({

            });

            tl.from(item, {
                duration: 1.5,
                y: 200,
                scale: 1.7,
                ease: "power2.inOut",
                stagger: {
                    each: 0.08,
                    from: 'random'
                },

                xPercent: (pos) => gsap.utils.random(-500, 500),
                yPercent: (pos) => gsap.utils.random(-300, 300),
            })
                .from('.top-box .content .text-moblie', {
                    duration: 1,
                    y: 70,
                    opacity: 0,
                    ease: "power1.inOut",

                }, '<1.5')
        } else {

            const item = document.querySelectorAll('.speech-bubbles')
            const dot = document.querySelectorAll('.dot');
            let tl = gsap.timeline({

            });

            tl.from(item, {
                duration: 1.5,
                y: 600,
                scale: 2,
                ease: "power2.inOut",
                stagger: {
                    each: 0.08,
                    from: 'random'
                },

                xPercent: (pos) => gsap.utils.random(-800, 800),
                yPercent: (pos) => gsap.utils.random(-300, 300),
            })
                .from('.top-box .content .text', {
                    duration: 1,
                    y: 100,
                    opacity: 0,
                    ease: "power1.inOut",

                }, '<1.2')

            // dot    
            let dl = gsap.timeline({
                repeat: -1,
                delay: 2
            });
            dl.from(dot, {
                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                    each: 0.25,
                    from: 'start'
                },
            })

        }
    }


}