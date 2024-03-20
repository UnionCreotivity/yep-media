window.onload = function () {
    var window_width = window.screen.width;
    var window_height = window.innerHeight;
    let vh = window.innerHeight * 0.01;

    gsap.registerPlugin(MotionPathPlugin);
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    let loadingScreen = document.querySelector(".loading-screen");
    let allBody = document.querySelector(".container");

    let loadingText = document.getElementById("loading-text");
    let percent = 1;

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


    let content = document.querySelectorAll(".text-1");
    let content1 = gsap.utils.toArray(content);

    content1.forEach(content =>
        gsap.set(content.parentNode, { perspective: 1500 })
    );

    let tl = gsap.timeline({
    });


    const mySwiper = new Swiper('.swiper', {
        effect: "fade",
        fadeEffect: { crossFade: true },
        parallax: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },

    });


    function swiperAni() {

        let gl = gsap.timeline({
            scrollTrigger: {
                trigger: '.c3-box',
                start: "-40%",
            }
        });
        gl.from('.swiper-slide div', {
            duration: 1,
            y: 150,
            ease: "power2.inOut",
            scale: 1.1,
            stagger: {
                each: 0.1,
                from: 'start'
            }
        }, '<')
    }

    function sweiprHover() {
        let slide = document.querySelectorAll('.swiper-slide div img')
        slide.forEach((item) => {

            let tl = gsap.timeline({});
            item.addEventListener('mouseenter', () => {
                tl.to(item, { filter: 'initial', ease: "power1.inOut", })
            });

            item.addEventListener('mouseleave', () => {
                tl.to(item, { filter: 'grayscale(1)', ease: "power1.inOut", })
            });
        })
    } sweiprHover();


    function openAni() {
        const textPath = document.getElementById('texto'),
            comprimento = textPath.getAttribute('startOffset');
        TweenMax.set('#texto', { attr: { startOffset: comprimento } });

        let tl = gsap.timeline({
            delay: 0.5
        });

        if (window_width <= 1024) {
            tl.from('.c1-left-box', {
                duration: 1.5,
                opacity: 0,
                width: '0vw',
                overflow: 'initial',
                ease: "power1.inOut",
            })
                .fromTo('.text-1', {
                    'will-change': 'opacity, transform',
                    z: () => gsap.utils.random(500, 950),
                    opacity: 0,
                    scale: 10,
                    filter: 'blur(10px)',
                    xPercent: (pos) => gsap.utils.random(-100, 100),
                    yPercent: (pos) => gsap.utils.random(-300, 10),
                    rotationX: () => gsap.utils.random(-90, 90)
                },
                    {
                        ease: 'expo',
                        opacity: 1, scale: 1,
                        rotationX: 0,
                        rotationY: 0,
                        xPercent: 0,
                        yPercent: 0,
                        duration: 1.5,
                        ease: "power1.inOut",
                        z: 0,
                        filter: 'blur(0px)',
                        stagger: {
                            each: 0.3,
                            from: 'random'
                        }
                    }, '<0.3')
                .fromTo('.text-2', {
                    'will-change': 'opacity, transform',
                    z: () => gsap.utils.random(500, 950),
                    opacity: 0,
                    scale: 10,
                    filter: 'blur(10px)',
                    xPercent: (pos) => gsap.utils.random(-100, 100),
                    yPercent: (pos) => gsap.utils.random(-300, 10),
                    rotationX: () => gsap.utils.random(-90, 90)
                },
                    {
                        ease: 'expo',
                        opacity: 1, scale: 1,
                        rotationX: 0,
                        rotationY: 0,
                        xPercent: 0,
                        yPercent: 0,
                        duration: 1.5,
                        // ease: "power1.inOut",
                        z: 0,
                        filter: 'blur(0px)',
                        stagger: {
                            each: 0.3,
                            from: 'random'
                        }
                    }, '<0.3')

                .fromTo(textPath,
                    {
                        attr:
                            { startOffset: "-700" }
                    }, {
                    attr:
                        { startOffset: 30 },
                    duration: 2,
                    ease: "power1.inout"
                }, '<0.3')

                .from('.top-small-box', {
                    opacity: 0,
                    duration: 1
                }, '<')

                .from('.yep-line', {
                    duration: 1,
                    opacity: 0,
                    ease: "power1.inOut",
                }, '<')
                .from('.middle-line', {
                    duration: 1,
                    opacity: 0,
                    ease: "power1.inOut",
                }, '<')
                .from('.media-line,.open-circle-moblie', {
                    duration: 1,
                    opacity: 0,
                    ease: "power1.inOut",
                }, '<')
                .from('.float-box', {
                    opacity: 0,
                    duration: 1,
                    left: '-30vw',

                    ease: "power1.inout"
                }, '<')

        } else {
            tl.from('.c1-left-box', {
                duration: 1.5,
                opacity: 0,
                width: '0vw',
                transform: 'translateX(-5vw)',
                overflow: 'initial',
                ease: "power1.inOut",
            })

                .fromTo(textPath,
                    {
                        attr:
                            { startOffset: "-700" }
                    }, {
                    attr:
                        { startOffset: 30 },
                    duration: 2,
                    ease: "power1.inout"
                }, '<0.3')

                .from('.top-small-box', {
                    opacity: 0,
                    duration: 1
                }, '<')

                .fromTo('.bottom-float-box', {
                    opacity: 0
                }, {
                    duration: 1.6,
                    opacity: 1,
                    ease: "power1.in",
                    maskSize: '105%'
                }, '<0.3')
                .from('.float-box', {
                    opacity: 0,
                    duration: 1.5,
                    left: '-3vw',
                    top: '-3vw',
                    ease: "power1.inout"
                }, '<0.3')
                .to('.float-box',
                    {
                        duration: 1.5,
                        maskSize: '100%',
                        ease: "power1.inout"
                    }, '<')
                .from('.c1-right-box,.header-box', {
                    duration: 1,
                    opacity: 0,
                    ease: "power1.inOut",
                }, '<0.3')

                .from('.yep-line', {
                    duration: 1,
                    opacity: 0,
                    ease: "power1.inOut",
                }, '<')
                .from('.middle-line', {
                    duration: 1,
                    opacity: 0,
                    ease: "power1.inOut",
                }, '<')
                .from('.media-line,.circle-box', {
                    duration: 1,
                    opacity: 0,
                    ease: "power1.inOut",
                }, '<')

                .fromTo('.text-1', {
                    'will-change': 'opacity, transform',
                    z: () => gsap.utils.random(500, 950),
                    opacity: 0,
                    scale: 10,
                    filter: 'blur(10px)',
                    xPercent: (pos) => gsap.utils.random(-100, 100),
                    yPercent: (pos) => gsap.utils.random(-300, 10),
                    rotationX: () => gsap.utils.random(-90, 90)
                },
                    {
                        ease: 'expo',
                        opacity: 1, scale: 1,
                        rotationX: 0,
                        rotationY: 0,
                        xPercent: 0,
                        yPercent: 0,
                        duration: 1.5,
                        ease: "power1.inOut",
                        z: 0,
                        filter: 'blur(0px)',
                        stagger: {
                            each: 0.3,
                            from: 'random'
                        }
                    }, '<0.3')
                .fromTo('.text-2', {
                    'will-change': 'opacity, transform',
                    z: () => gsap.utils.random(500, 950),
                    opacity: 0,
                    scale: 10,
                    filter: 'blur(10px)',
                    xPercent: (pos) => gsap.utils.random(-100, 100),
                    yPercent: (pos) => gsap.utils.random(-300, 10),
                    rotationX: () => gsap.utils.random(-90, 90)
                },
                    {
                        ease: 'expo',
                        opacity: 1, scale: 1,
                        rotationX: 0,
                        rotationY: 0,
                        xPercent: 0,
                        yPercent: 0,
                        duration: 1.5,
                        // ease: "power1.inOut",
                        z: 0,
                        filter: 'blur(0px)',
                        stagger: {
                            each: 0.3,
                            from: 'random'
                        }
                    }, '<0.3')
        }

    }


    function c1ScrollAni() {

        if (window_width <= 1024) {
            let gl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c1-box',
                    start: "10%",
                    end: '+=300',
                    scrub: 5,
                }
            });
            gl.to('.open-circle-moblie .circle-box img', { duration: 1, marginTop: '0vw', ease: "power1.inOut", }, "<")

        } else {
            let gl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c1-box',
                    start: "40%",
                    end: '+=1000',
                    scrub: 3,

                }
            });
            gl.to('.c1-left-box .video-box video', { duration: 1, width: '0%', ease: "power1.inOut", })
                .to('.bottom-float-box', { duration: 1, maskSize: '0%', ease: "power1.inOut", }, "<")
        }

        if (window_width <= 1024) {
            let itemGl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c1-box',
                    start: "50%",
                    end: 'center',
                    scrub: 2,
                }
            });

        } else {
            let itemGl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c1-box',
                    start: "10%",
                    end: 'center',
                    scrub: 2,
                }
            });

            itemGl.to('.open-circle', { duration: 1, y: -300, ease: "power1.inOut", }, "<")
                .to('.float-box', { duration: 1, y: -300, ease: "power1.inOut", }, "<")
        }

    }
    c1ScrollAni();

    //moblie
    function c1RightScrollAni() {
        if (window_width <= 1024) {
            let integral = document.querySelector(".text-integral");
            let integralText = gsap.utils.toArray(".text-integral");
            let splitIntegral = integralText.map(heading => new SplitText(heading, {
                type: "chars,words,lines", linesClass: "clip-text"
            }));
            splitIntegral[0].chars.forEach(integral => gsap.set(integral.parentNode, { perspective: 1000 }));

            let marketing = document.querySelector(".text-marketing");
            let marketingText = gsap.utils.toArray(".text-marketing");
            let splitMarketing = marketingText.map(heading => new SplitText(heading, {
                type: "chars,words,lines", linesClass: "clip-text"
            }));
            splitMarketing[0].chars.forEach(marketing => gsap.set(marketing.parentNode, { perspective: 1000 }));

            let planning = document.querySelector(".text-planning");
            let planningText = gsap.utils.toArray(".text-planning");
            let splitplanning = planningText.map(heading => new SplitText(heading, {
                type: "chars,words,lines", linesClass: "clip-text"
            }));
            splitplanning[0].chars.forEach(planning => gsap.set(planning.parentNode, { perspective: 1000 }));

            let design = document.querySelector(".text-design");
            let designText = gsap.utils.toArray(".text-design");
            let splitdesign = designText.map(heading => new SplitText(heading, {
                type: "chars,words,lines", linesClass: "clip-text"
            }));
            splitdesign[0].chars.forEach(planning => gsap.set(planning.parentNode, { perspective: 1000 }));

            let gl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c1-left-box',
                    start: "30%",
                }
            });


            gl.from('.c1-right-box .title-moblie .text1', { duration: 1, opacity: 0, y: -50, x: 50, ease: "power1.inOut", }, "<")
                .from('.c1-right-box .title-moblie .text2', { duration: 1, opacity: 0, y: 50, x: -50, ease: "power1.inOut", }, "<")


            //內容
            gsap.utils.toArray([splitIntegral[0].chars,
            splitMarketing[0].chars,
            splitplanning[0].chars,
            splitdesign[0].chars]).forEach(chars => {
                gsap.fromTo(chars, {
                    'will-change': 'opacity, transform',
                    z: () => gsap.utils.random(800, 950),
                    opacity: 0,
                    xPercent: (pos) => gsap.utils.random(-100, 100),
                    yPercent: (pos) => gsap.utils.random(-10, 10),
                    rotationX: () => gsap.utils.random(-90, 90)
                },
                    {
                        ease: 'expo',
                        opacity: 1,
                        rotationX: 0,
                        rotationY: 0,
                        xPercent: 0,
                        yPercent: 0, duration: 1,
                        z: 0,
                        ease: "power1.inOut",
                        stagger: {
                            each: 0.15,
                            from: 'random'
                        }
                    });
            });


        }
    }
    c1RightScrollAni();

    function c2Ani() {

        if (window_width <= 500) {
            let gl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c2-box',
                    start: "-60%",
                }
            });
            gl.from('.c2-box .left-box .title-box', { duration: 1, ease: "power1.inOut", opacity: 0, y: '100' })
                .from('.list-content .list', {
                    duration: 1,
                    ease: "power1.inOut",
                    opacity: 0,
                    y: 100,
                    stagger: { each: 0.15, from: "end", },
                }, '<0.3')

        } else if (window_width <= 1024) {
            let gl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c2-box',
                    start: "-40%",
                }
            });
            gl.from('.c2-box .left-box .title-box', { duration: 1, ease: "power1.inOut", opacity: 0, y: '100' })
                .from('.list-content .list', {
                    duration: 1,
                    ease: "power1.inOut",
                    opacity: 0,
                    y: 100,
                    stagger: { each: 0.15, from: "end", },
                }, '<0.3')

        } else {
            let gl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c2-box',
                    start: "-60%",
                    end: '+=1000',
                    scrub: 10,
                }
            });
            gl.to('.c2-cover-bg', { duration: 1, width: '0vw', ease: "power1.inOut", zIndex: '-1' })
                .to('.c2-cover-bg', { duration: 1, opacity: 0, ease: "power1.inOut", }, '<0.8')
        }

    }
    c2Ani();

    function c3ScrollAni() {
        if (window_width <= 1024) {
            let gl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c2-box',
                    start: "top",
                }
            });

            gl.from('.c3-circle-box', {
                duration: 1,
                opacity: 0,
                y: 100,
                ease: "power1.inOut",
            })
                .from('.c3-box .right-box .swiper .swiper-wrapper .swiper-slide div', {
                    duration: 1.5,
                    opacity: 0,
                    y: 100,
                    stagger: { each: 0.1, from: "start", },
                    ease: "power1.inOut",
                })
        } else {
            let gl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c2-box',
                    start: "10%",
                    end: '+=1200',
                    scrub: 3,
                }
            });

            gl.from('.c3-circle', {
                duration: 1, width: '8vw',
                height: '8vw', ease: "power1.inOut",
            })
                .from('.c2-circle-img', {
                    duration: 1, marginTop: '0vw', ease: "power1.inOut",
                }, '<')
                .from('.partner', {
                    duration: 2, opacity: 0, ease: "power1.inOut",
                }, '<')

                .from('.c3-box .left-box .title-box', {
                    duration: 1, opacity: 0, ease: "power1.inOut",
                }, '<')

            swiperAni();
        }

    }
    c3ScrollAni();

    function c4ScrollAni() {

        if (window_width <= 1024) {

            let gl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c3-box',
                    start: '30%',
                }
            });

            gl.to('.c4-box-moblie .item3', {
                duration: 1,
                maskSize: '100%',
                ease: "power1.inOut",
            })
                .to('.c4-box-moblie .item2', {
                    duration: 2,
                    maskSize: '100%',
                    ease: "power1.inOut",
                }, '<')


            c4FloatAni();
            c4ScrollTextAni();

        } else {

            let gl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c4-box',
                    start: "-25%", end: '+=80',

                    // end: '+=1500',
                    scrub: 5,
                }
            });

            gl.from('.c4-box .item3 img', {
                duration: 1,
                maskSize: '0%',
                ease: "power1.inOut",
                borderRadius: '0%'
            })
                .to('.c4-box .item2 img', {
                    duration: 1,
                    maskSize: '100%',
                    ease: "power1.inOut",

                })

            c4FloatAni();
            c4ScrollTextAni();
        }



    }
    c4ScrollAni();

    function c4ScrollTextAni() {
        if (window_width <= 500) {

            let gl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c4-box-moblie',
                    start: "-60%",
                    end: '+=80',
                    scrub: 5,
                }
            });

            //文字區塊
            let content = document.querySelector(".c4-box-moblie .text");
            let zhTitle = gsap.utils.toArray(".c4-box-moblie .text");

            let splitC4Content = zhTitle.map(heading => new SplitText(heading, {
                type: "chars,words,lines", linesClass: "clip-text"
            }));

            splitC4Content[0].chars.forEach(content => gsap.set(content.parentNode, { perspective: 1000 }));

            gl2.fromTo(splitC4Content[0].chars, {
                z: () => gsap.utils.random(500, 950),
                opacity: 0,
                scale: 4,
                filter: 'blur(10px)',
                xPercent: (pos) => gsap.utils.random(-100, 100),
                yPercent: (pos) => gsap.utils.random(-10, 10),
                rotationX: () => gsap.utils.random(-90, 90)
            },
                {
                    ease: 'expo',
                    opacity: 1,
                    scale: 1,
                    rotationX: 0,
                    rotationY: 0,
                    xPercent: 0,
                    yPercent: 0,
                    duration: 3,
                    ease: "power1.inOut",
                    z: 0,
                    filter: 'blur(0px)',
                    stagger: {
                        each: 0.3,
                        from: 'random'
                    }
                })
        }
        else if (window_width <= 1024) {
            let gl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c4-box-moblie',
                    start: "-10%",
                    end: '+=80',
                    scrub: 5,
                }
            });

            //文字區塊
            let content = document.querySelector(".c4-box-moblie .text");
            let zhTitle = gsap.utils.toArray(".c4-box-moblie .text");

            let splitC4Content = zhTitle.map(heading => new SplitText(heading, {
                type: "chars,words,lines", linesClass: "clip-text"
            }));

            splitC4Content[0].chars.forEach(content => gsap.set(content.parentNode, { perspective: 1000 }));

            gl2.fromTo(splitC4Content[0].chars, {
                z: () => gsap.utils.random(500, 950),
                opacity: 0,
                scale: 4,
                filter: 'blur(10px)',
                xPercent: (pos) => gsap.utils.random(-100, 100),
                yPercent: (pos) => gsap.utils.random(-10, 10),
                rotationX: () => gsap.utils.random(-90, 90)
            },
                {
                    ease: 'expo',
                    opacity: 1,
                    scale: 1,
                    rotationX: 0,
                    rotationY: 0,
                    xPercent: 0,
                    yPercent: 0,
                    duration: 3,
                    ease: "power1.inOut",
                    z: 0,
                    filter: 'blur(0px)',
                    stagger: {
                        each: 0.3,
                        from: 'random'
                    }
                })
        } else {
            let gl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.c4-box',
                    start: "-35%", end: '+=80',
                    scrub: 5,
                }
            });

            //文字區塊
            let content = document.querySelector(".c4-box .text");
            let zhTitle = gsap.utils.toArray(".c4-box .text");

            let splitC4Content = zhTitle.map(heading => new SplitText(heading, {
                type: "chars,words,lines", linesClass: "clip-text"
            }));

            splitC4Content[0].chars.forEach(content => gsap.set(content.parentNode, { perspective: 1000 }));

            gl2.fromTo(splitC4Content[0].chars, {

                z: () => gsap.utils.random(500, 950),
                opacity: 0,
                scale: 4,
                filter: 'blur(10px)',
                xPercent: (pos) => gsap.utils.random(-100, 100),
                yPercent: (pos) => gsap.utils.random(-10, 10),
                rotationX: () => gsap.utils.random(-90, 90)
            },
                {
                    ease: 'expo',
                    opacity: 1,
                    scale: 1,
                    rotationX: 0,
                    rotationY: 0,
                    xPercent: 0,
                    yPercent: 0,
                    duration: 3,
                    ease: "power1.inOut",
                    z: 0,
                    filter: 'blur(0px)',
                    stagger: {
                        each: 0.3,
                        from: 'random'
                    }
                })
        }
    }

    function c4FloatAni() {
        if (window_width <= 1024) {
            let tl = gsap.timeline({
                repeat: -1,
                yoyo: true
            });

            tl.from('.c4-box-moblie .item1', {
                duration: 1,
                ease: "power0.inOut",
                y: -40
            }).to('.c4-box-moblie .item3', {
                duration: 1,
                y: -15,
                ease: "power1.inOut",
            }, '<')
                .to('.c4-box-moblie .top-box .yep-box .yep', {
                    duration: 1,
                    x: -15,
                    y: 5,
                    ease: "power1.inOut",
                }, '<')
                .to('.c4-box-moblie .top-box .yep-box .yep-line-svg', {
                    duration: 1,
                    x: -15,
                    y: 5,
                    ease: "power1.inOut",
                }, '<')

                .to('.c4-box-moblie .top-box .media-svg .media', {
                    duration: 1,
                    x: 10,
                    y: 10,
                    ease: "power1.inOut",
                }, '<')
                .to('.c4-box-moblie .top-box .media-svg .media-line-svg', {
                    duration: 1,
                    x: 10,
                    y: 10,
                    ease: "power1.inOut",
                }, '<')
        } else {
            // 飄動
            let tl = gsap.timeline({
                repeat: -1,
                yoyo: true,
                delay: 0.8
            });

            tl.from('.c4-box .item1', {
                duration: 1,
                ease: "power0.inOut",
                y: -40
            })
                .to('.c4-box .yep-svg .yep', {
                    duration: 1,
                    x: -15,
                    y: 5,
                    ease: "power1.inOut",
                }, '<')
                .to('.c4-box .yep-svg .yep-line-svg', {
                    duration: 1,
                    x: -15,
                    y: 5,
                    ease: "power1.inOut",
                }, '<')

                .to('.c4-box .media-svg .media', {
                    duration: 1,
                    x: 10,
                    y: 10,
                    ease: "power1.inOut",
                }, '<')
                .to('.c4-box .media-svg .media-line-svg', {
                    duration: 1,
                    x: 10,
                    y: 10,
                    ease: "power1.inOut",
                }, '<')
        }
    }

    // c1 item parallax.
    function c1FloatItemParallax() {

        if (window_width > 1024) {
            $(".float-item").attr("data-depth", "0.14");
            let float = document.querySelector("#scene-float");
            let parallaxFloat = new Parallax(float, {
                relativeInput: true,
            });

            parallaxFloat.friction(0.3, 0.3);
        }
    }
    c1FloatItemParallax();

    // c1 item parallax.
    function c1BottomItemParallax() {

        if (window_width > 1024) {
            $(".bottom-float-item").attr("data-depth", "0.14");
            let float = document.querySelector("#scene-item1");
            let parallaxFloat = new Parallax(float, {
                relativeInput: true,
            });

            parallaxFloat.friction(0.1, 0.1);
        }
    }
    c1BottomItemParallax();

    // c1 item parallax.
    function c1BottomCircleItemParallax() {

        if (window_width > 1024) {
            $(".bottom-circle-item").attr("data-depth", "0.1");
            let float = document.querySelector("#scene-circle1");
            let parallaxFloat = new Parallax(float, {
                relativeInput: true,
            });

            parallaxFloat.friction(0.2, 0.2);
        }
    }
    c1BottomCircleItemParallax();

}