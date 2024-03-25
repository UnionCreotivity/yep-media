window.onload = function () {
    var window_width = window.screen.width;
    var window_height = window.innerHeight;
    let vh = window.innerHeight * 0.01;
    gsap.registerPlugin(MotionPathPlugin);
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

    function menuAboutClick() {
        let aboutBtn = document.querySelector('.menu-moblie .link-box .about-box')
        let hidden = document.querySelector('.about-hidden-box-moblie');
        let open = false;
        aboutBtn.addEventListener('click', () => {

            if (open === false) {
                let tl = gsap.timeline({
                });
                tl.to(hidden, {
                    opacity: 1,
                    zIndex: 1,
                    height: '17vw',
                    marginBottom: '10vw',
                    ease: "power1.inOut",
                }
                )
                open = true;
            } else if (open === true) {
                let tl = gsap.timeline({
                });
                tl.to(hidden, {
                    opacity: 0,
                    zIndex: '-1',
                    height: '0vw',
                    marginBottom: '0vw',
                    ease: "power1.inOut",
                }
                )
                open = false;
            }

        });



    }
    menuAboutClick();

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
        let tl = gsap.timeline({

        });
        if (window_width <= 1024) {
            tl.from('.top-person-box', {
                y: 150,
                opacity: 0,
                duration: 1,
                ease: "power1.inOut",

            })

        } else {
            tl.from('.top-person-box', {
                x: -200,
                opacity: 0,
                duration: 1,
                ease: "power1.inOut",

            })
        }

    }
    openAni();

    function itemAni() {
        let items = document.querySelectorAll('.person-box');

        if (window_width <= 1024) {
            items.forEach((item, index) => {
                let delay = index * 0.1;

                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 110%',
                    }
                });

                tl.from(item, {
                    x: -100,
                    opacity: 0,
                    duration: 1,
                    ease: "power1.inOut",
                    delay: delay
                })
            });
        } else {

            items.forEach((item, index) => {
                let delay = index * 0.25;

                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        // end: '+=500',
                        start: 'top 100%',
                        // scrub: 5
                    }
                });

                tl
                    .from(item, {
                        x: -250,
                        opacity: 0,
                        duration: 1,
                        ease: "power1.inOut",
                        delay: delay
                    })
            });
        }
    }
    itemAni();



}