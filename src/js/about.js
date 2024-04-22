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
                    x: -70,
                    opacity: 0,
                    duration: 1,
                    ease: "power1.inOut",
                    delay: delay
                })
            });
        } else {

            items.forEach((item, index) => {
                let delay = index * 0.2;

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
            itemAni();
        }
    }

    updateProgress();

    function hoverDirectorNameText() {
        if (window_width > 1024) {
            let filmTitle = gsap.utils.toArray(".director-name");
            let splitFilmTitle = filmTitle.map(heading => new SplitText(heading, {
                type: "chars,words,lines", linesClass: "clip-text"
            }));

            const directorName = document.querySelector(".director-name");

            const ease = CustomEase.create(
                "custom",
                "M0,0 C0.275,0 0.230,1 0.4,1 0.794,1 0.744,0 1,0 "
            );

            const hoverTextTl = gsap.timeline({ paused: true });

            hoverTextTl.to(splitFilmTitle[0].chars, {
                y: -100,
                ease: ease,
                stagger: {
                    amount: 1
                }
            });

            directorName.addEventListener("mousemove", function (event) {
                let rect = this.getBoundingClientRect();
                let xPosition = event.clientX - rect.left;
                let width = rect.width;
                let mappedValue = xPosition / width;

                mappedValue = Math.min(1, Math.max(0, mappedValue));

                hoverTextTl.progress(mappedValue);
            });

            directorName.addEventListener("mouseleave", function (event) {
                hoverTextTl.progress(0);
            });
        }
    }
    hoverDirectorNameText();

    function hoverNameText() {
        if (window_width > 1024) {
            let item = document.querySelectorAll(".name");
            let Names = gsap.utils.toArray(".name");
            let itemName = Names.map(heading => new SplitText(heading, {
                type: "chars,words,lines", linesClass: "clip-text"
            }));

            const ease = CustomEase.create(
                "custom",
                "M0,0 C0.275,0 0.230,1 0.4,1 0.794,1 0.744,0 1,0"
            );
            item.forEach((name, index) => {

                const hoverNameTl = gsap.timeline({ paused: true });

                hoverNameTl.to(itemName[index].chars, {
                    y: -60,
                    ease: ease,
                    scale: 1.3,
                    stagger: {
                        amount: 0.5
                    }
                });

                name.addEventListener("mousemove", function (event) {
                    let rect = this.getBoundingClientRect();
                    let xPosition = event.clientX - rect.left;
                    let width = rect.width;
                    let mappedValue = xPosition / width;

                    mappedValue = Math.min(1, Math.max(0, mappedValue));

                    hoverNameTl.progress(mappedValue);
                });

                name.addEventListener("mouseleave", function (event) {
                    hoverNameTl.progress(0);
                });
            });
        }
    }
    hoverNameText();
}