window.onload = function () {
    var window_width = window.screen.width;
    var window_height = window.innerHeight;
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    function C1Float() {
        let tl = gsap.timeline({
            repeat: -1,
            yoyo: true,
            delay: 0.8
        });

        tl.from('.c1-box .item1', {
            duration: 1,
            ease: "power0.inOut",
            y: -30
        })

    }

    function openAni() {

        if (window_width <= 1024) {
            let ENtitle = gsap.utils.toArray(".c1-content .title-box-moblie .en-text");
            let splitEN = ENtitle.map(heading => new SplitText(heading, {
                type: "chars,words,lines", linesClass: "clip-text"
            }));

            let ZHtitle = gsap.utils.toArray(".c1-content .title-box-moblie .content-text-box .content-text");
            let splitZH = ZHtitle.map(heading => new SplitText(heading, {
                type: "chars,words,lines", linesClass: "clip-text"
            }));

            let tl = gsap.timeline({});

            tl.from(splitEN[0].chars, {
                x: -70,
                ease: "power1.inOut",
                duration: 1,
                opacity: 0,
                stagger: {
                    each: 0.05,
                    from: 'start'
                }
            })
                .from(splitZH[0].chars, {
                    x: -70,
                    ease: "power1.inOut",
                    duration: 1,
                    opacity: 0,
                    stagger: {
                        each: 0.05,
                        from: 'start'
                    }
                }, '<0.3')
                .from(splitZH[1].chars, {
                    x: -70,
                    ease: "power1.inOut",
                    duration: 1,
                    opacity: 0,
                    stagger: {
                        each: 0.05,
                        from: 'start'
                    }
                }, '<0.3')
                .from(splitZH[2].chars, {
                    x: -70,
                    ease: "power1.inOut",
                    duration: 1,
                    opacity: 0,
                    stagger: {
                        each: 0.05,
                        from: 'start'
                    }
                }, '<0.3')
            C1Float();
        } else {

            let ENtitle = gsap.utils.toArray(".c1-content .en-text");
            let splitEN = ENtitle.map(heading => new SplitText(heading, {
                type: "chars,words,lines", linesClass: "clip-text"
            }));

            let ZHtitle = gsap.utils.toArray(".c1-content .zh-text");
            let splitZH = ZHtitle.map(heading => new SplitText(heading, {
                type: "chars,words,lines", linesClass: "clip-text"
            }));

            let tl = gsap.timeline({});

            tl.from(splitEN[0].chars, {
                x: -100,
                ease: "power1.inOut",
                duration: 1,
                opacity: 0,
                stagger: {
                    each: 0.05,
                    from: 'start'
                }
            })
                .from('.c1-box .top-small-text', { opacity: 0, duration: 1, transform: 'skewX(58deg)', ease: "power1.inOut", }, '<')
                .from(splitZH[0].chars, {
                    opacity: 0,
                    duration: 1,
                    x: -100,
                    opacity: 0,
                    ease: "power1.inOut",
                    stagger: {
                        each: 0.05,
                        from: 'start'
                    }
                }, '<0.3')
                .from(splitZH[1].chars, {
                    opacity: 0,
                    duration: 1,
                    x: -100,
                    opacity: 0,
                    ease: "power1.inOut",
                    stagger: {
                        each: 0.05,
                        from: 'start'
                    }
                }, '<0.3')
                .from(splitZH[2].chars, {
                    opacity: 0,
                    duration: 1,
                    x: -100,
                    ease: "power1.inOut",
                    stagger: {
                        each: 0.05,
                        from: 'start'
                    }
                }, '<0.3')

            C1Float();
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

    const mySwiperC6 = new Swiper('.swiperC6', {

        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev'
        },

    });

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

    // function menuAboutClick() {
    //     let aboutBtn = document.querySelector('.menu-moblie .link-box .about-box')
    //     let hidden = document.querySelector('.about-hidden-box-moblie');
    //     let open = false;
    //     aboutBtn.addEventListener('click', () => {

    //         if (open === false) {
    //             let tl = gsap.timeline({
    //             });
    //             tl.to(hidden, {
    //                 opacity: 1,
    //                 zIndex: 1,
    //                 height: '17vw',
    //                 marginBottom: '10vw',
    //                 ease: "power1.inOut",
    //             }
    //             )
    //             open = true;
    //         } else if (open === true) {
    //             let tl = gsap.timeline({
    //             });
    //             tl.to(hidden, {
    //                 opacity: 0,
    //                 zIndex: '-1',
    //                 height: '0vw',
    //                 marginBottom: '0vw',
    //                 ease: "power1.inOut",
    //             }
    //             )
    //             open = false;
    //         }

    //     });



    // }
    // menuAboutClick();

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


    function c2Ani() {

        if (window_width <= 1024) {
            let filmTitle = gsap.utils.toArray(".text-film");
            let splitFilmTitle = filmTitle.map(heading => new SplitText(heading, {
                type: "chars,words,lines", linesClass: "clip-text"
            }));

            let st = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c2-box',
                    start: "-45%",
                }
            })

            st.from(splitFilmTitle[0].chars, {
                duration: 1,
                x: -70,
                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                    each: 0.15,
                    from: 'start'
                }
            })

            //順序
            let tl = gsap.timeline({
                repeat: -1,
                yoyo: true,
                repeatDelay: 2
            });

            tl.from('.c2-content .bottom .item', {
                duration: 1.5,
                opacity: 0,
                y: -70,
                ease: "power1.inOut",
                stagger: {
                    each: 0.2,
                    from: 'start'
                }
            }, '<0.3')


        } else {

            let filmTitle = gsap.utils.toArray(".text-film");
            let splitFilmTitle = filmTitle.map(heading => new SplitText(heading, {
                type: "chars,words,lines", linesClass: "clip-text"
            }));

            let st = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c2-box',
                    start: "-40%",
                }
            })

            st.from(splitFilmTitle[0].chars, {
                duration: 1,
                x: -100,
                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                    each: 0.05,
                    from: 'start'
                }
            })

            //順序
            let tl = gsap.timeline({
                repeat: -1,
                yoyo: true,
                repeatDelay: 2
            });

            tl.from('.c2-content .bottom .item', {
                duration: 1,
                opacity: 0,
                x: -100,
                ease: "power1.inOut",
                stagger: {
                    each: 0.2,
                    from: 'start'
                }
            }, '<0.3')
        }

    }
    c2Ani();

    function c3Ani() {

        let st = gsap.timeline({
            scrollTrigger: {
                trigger: '.c3-box',
                start: "-40%",
            }
        })
        st.from('.c3-box .circle-item-box',
            {
                duration: 2, opacity: 0,
                transform: 'skewX(30deg) translateX(-15vw)',
                ease: "bounce.out(10)",
            })
            .from('.c3-box .right-box .yt-box',
                {
                    opacity: 0,
                    duration: 1,

                    ease: "power0.inOut",
                }, '<0.3')

    }
    c3Ani();

    function c4Ani() {

        if (window_width <= 1024) {
            let st = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c4-box',
                    start: "-10%",
                }
            })
            st.from('.c4-content .yt-video-item-box',
                {
                    opacity: 0,
                    duration: 1,
                    y: 100,
                    ease: "power1.inOut",
                    stagger: {
                        each: 0.4,
                        from: 'start',
                    }
                })
        } else {
            let st = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c4-box',
                    start: "-40%",
                }
            })
            st.from('.c4-content .yt-video-item-box',
                {
                    opacity: 0,
                    duration: 1,
                    x: -130,
                    ease: "power1.inOut",
                    stagger: {
                        each: 0.2,
                        from: 'start',
                    }
                })
        }


    }
    c4Ani();

    function c5Ani() {
        let designTitle = gsap.utils.toArray(".text-design-layout");
        let splitTitle = designTitle.map(heading => new SplitText(heading, {
            type: "chars,words,lines", linesClass: "clip-text"
        }));

        if (window_width <= 1024) {
            let st = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c5-box',
                    start: "-30%",
                }
            })
            st.from(splitTitle[0].chars, {
                duration: 1,
                x: -70,
                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                    each: 0.05,
                    from: 'start'
                }
            })
                .from('.c5-content .text', {
                    duration: 1,
                    x: -70,
                    opacity: 0,
                    ease: "power1.inOut",

                }, '<0.7')
                .from('.c5-content .img-box img', {
                    duration: 1,
                    transform: 'rotate(90deg)',
                    ease: "power1.inOut",
                }, '<0.3')
        } else {
            let st = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c5-box',
                    start: "-40%",
                }
            })
            st.from(splitTitle[0].chars, {
                duration: 1,
                x: -100,
                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                    each: 0.05,
                    from: 'start'
                }
            })

                .from('.c5-content .text', {
                    duration: 1,
                    x: -100,
                    opacity: 0,
                    ease: "power1.inOut",
                }, '<0.8')
                .from('.c5-content .img-box img', {
                    duration: 1,
                    transform: 'rotate(90deg)',
                    ease: "power1.inOut",
                }, '<0.3')
        }

    }
    c5Ani();

    function c5ItemAni() {
        if (window_width <= 1024) {
            return;
        } else {
            let st = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c5-c6-box',
                    start: "-30%",
                    end: '+=500',
                    scrub: 3,
                }
            })
            st.from('.c5-c6-box .cirlce-item', { duration: 1, y: 300, ease: "power1.inOut", })
        }
    }
    c5ItemAni();

    function c6Ani() {

        if (window_width <= 1024) {
            let st = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c6-box',
                    start: "-60%",
                }
            })
            st.from('.c6-content .stagger-text', {
                duration: 1,
                y: 70,
                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                    each: 0.15,
                    from: 'start'
                }
            }, '<0.3')

        } else {
            let st = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c6-box',
                    start: "-40%",
                }
            })
            st
                // .from('.c6-content .circle', {
                //     duration: 1,
                //     scale: 0.5,
                //     opacity: 0,
                //     ease: "power1.inOut",

                // })
                .from('.c6-content .stagger-text', {
                    duration: 1,
                    y: 170,
                    opacity: 0,
                    ease: "power1.inOut",
                    stagger: {
                        each: 0.15,
                        from: 'start'
                    }
                }, '<0.3')

        }



    }
    c6Ani();

    function c7Ani() {
        let WebTitle = gsap.utils.toArray(".text-web-design");
        let splitTitle = WebTitle.map(heading => new SplitText(heading, {
            type: "chars,words,lines", linesClass: "clip-text"
        }));

        if (window_width <= 1024) {
            let st = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c7-box',
                    start: "-60%",
                }
            })
            st.from(splitTitle[0].chars, {
                duration: 1,
                x: -70,
                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                    each: 0.05,
                    from: 'start'
                }
            }).from('.c7-content .title-box div', {
                duration: 1,
                y: 70,
                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                    each: 0.1,
                    from: 'start'
                }
            }, '<0.3')
        } else {
            let st = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c7-box',
                    start: "-40%",
                }
            })
            st.from(splitTitle[0].chars, {
                duration: 1,
                x: -100,
                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                    each: 0.05,
                    from: 'start'
                }
            }).from('.c7-content .title-box div', {
                duration: 1,
                y: 100,
                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                    each: 0.1,
                    from: 'start'
                }
            }, '<0.3')
        }


    }
    c7Ani();

    function c8Ani() {

        if (window_width <= 1024) {

            let st = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c8-box',
                    start: "-30%",
                }
            })
            st
                .from('.c8-content .title-box', { duration: 1, y: 50, opacity: 0, ease: "power1.inOut", })
                .from('.c8-content .content-moblie', { duration: 1, y: 50, opacity: 0, ease: "power1.inOut", }, '<0.3')
                .from('.c8-swiper .swiper-slide img', { duration: 1, opacity: 0, ease: "power1.inOut", }, '<')


            let st2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c8-box',
                    start: "-40%",
                }
            })
            st2.from('.big-circle', { duration: 1.5, transform: 'rotate3d(1, 1, 1, -50deg)', opacity: 0, ease: "power1.inOut", })


        } else {

            let st = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c8-box',
                    start: "-40%",
                }
            })
            st
                .from('.c8-content .title-box', { duration: 1, y: 100, opacity: 0, ease: "power1.inOut", })
                .from('.c8-content .content', { duration: 1, y: 100, opacity: 0, ease: "power1.inOut", }, '<0.3')
                .from('.c8-swiper .swiper-slide img', { duration: 1, opacity: 0, ease: "power1.inOut", }, '<')


            let st2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c8-box',
                    start: "-70%",
                    end: '+=800',
                    scrub: 5,
                }
            })
            st2.from('.big-circle', { duration: 1.5, transform: 'rotate3d(1, 1, 1, -80deg)', opacity: 0, ease: "power1.inOut", }, '<')
        }


    }
    c8Ani();

    function c9Ani() {

        if (window_width <= 1024) {

            let st = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c9-box',
                    start: "-40%",
                }
            })
            st.from('.c9-content .title-box', { duration: 1, y: 50, opacity: 0, ease: "power1.inOut", })
                .from('.c9-content .content-moblie', { duration: 1, y: 50, opacity: 0, ease: "power1.inOut", }, '<0.3')
                .from('.c9-swiper .swiper-slide img', { duration: 1, opacity: 0, ease: "power1.inOut", }, '<')

            let st2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c9-box',
                    start: "-40%",
                }
            })
            st2.from('.big-circle2', { duration: 1.5, transform: 'rotate3d(1, 1, 1, -50deg)', opacity: 0, ease: "power1.inOut", })


        }
        else {


            let st = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c9-box',
                    start: "-20%",
                }
            })
            st.from('.c9-content .title-box', { duration: 1, y: 100, opacity: 0, ease: "power1.inOut", })
                .from('.c9-content .content', { duration: 1, y: 100, opacity: 0, ease: "power1.inOut", }, '<0.3')
                .from('.c9-swiper .swiper-slide img', { duration: 1, opacity: 0, ease: "power1.inOut", }, '<')

        }
    }
    c9Ani();
}