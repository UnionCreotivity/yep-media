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

    // function c2EnterAni() {
    //     let gl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".content-box",
    //             start: "top top",
    //             endTrigger: ".content-box2",
    //             end: "bottom top",
    //         }
    //     });

    //     gl
    //         .to('.content-box', { display: 'none', duration: 0.5, ease: "power1.inOut", }, '<')
    //         .to('.content-box', { opacity: 0, duration: 0.5, ease: "power1.inOut", })
    //         .to('.content-box2', { display: 'flex', duration: 0.5, ease: "power1.inOut", }, '<')
    //         .to('.content-box2', { opacity: 1, duration: 0.5, ease: "power1.inOut", }, '<')

    // }

    // function c2LeaveAni() {
    //     gl.reversed();

    // }

    // function pinC2Ani() {
    //     gsap.registerPlugin(ScrollTrigger);

    //     // 將c2-box固定
    //     gsap.to('.c2-box', {
    //         scrollTrigger: {
    //             trigger: ".c2-box",
    //             start: "top top",
    //             endTrigger: ".content-box",
    //             end: "bottom top",
    //             pin: true,
    //             // 更改此處的markers:true以在開發期間可見觸發器
    //             markers: true
    //         }
    //     });

    //     // 監聽觸發事件，將content-box切換為content-box2
    //     ScrollTrigger.create({
    //         trigger: ".content-box",
    //         start: "top top",
    //         endTrigger: ".content-box2",
    //         end: "bottom top",
    //         onEnter: () => {
    //             c2EnterAni();
    //         },
    //         onLeaveBack: () => {
    //             c2LeaveAni();
    //         },
    //         // 更改此處的markers:true以在開發期間可見觸發器
    //         markers: true
    //     });



    // }
    // pinC2Ani();


}