<template>
    <div id="about-me">
        <header>
            <div class="header-text-wrapper">
                <h1 class="rellax" data-rellax-speed="3">
                    Hello! 👋 I’m<br>
                    Steven B-M Nguyen<br>
                    <b>aka Mechetle</b>
                </h1>
            </div>
            <div class="background-header rellax" data-rellax-speed="4.5"></div>
            <div class="background-header-two">
                <div class="actual-bg"></div>
            </div>
        </header>
        <main id="contact-contents" class="rellax" data-rellax-speed="2" data-rellax-percentage="0.25">
            <section id="second-part">
                <div class="grid-container">
                    <div class="grid-x grid-margin-x">
                        <h2 class="regular">I'm an enthusiastic and cheerful</h2>
                    </div>
                </div>
                <div class="big-text-scroll" id="what-i-do">
                    <div class="text-scroll-inner hover-fx">
                        <a href="#md">Motion designer</a>, <a href="#bd">Brand designer</a>, <a href="#uiux">UI & UX designer</a>
                    </div>
                </div>
            </section>
        </main>
        <section id="third-part">
            <div class="grid-container">
                <div class="grid-x grid-margin-x">
                    <div class="cell medium-5" id="map-wrapper">
                        <div id="map-aus">
                            <img src="~/assets/img/map.svg" alt="Where I'm from" draggable="false">
                            <a href="https://earth.google.com/web/search/melbourne/@-37.81126235,144.96315095,27.04077189a,4203.45541779d,35y,0h,45t,0r/data=CjoaEAoKL20vMDI2Mm5tcxgCIAEiJgokCVNZ7Da8qTVAEb0WtCC8qTXAGYrY9UFB9ElAIdnNRRVB9EnAKAI" alt="View on Google Earth" target="_blank" rel="noopener noreferrer">
                                <img src="~/assets/img/map-pin.svg" alt="Where I'm from roughly" id="map-pin" draggable="false">
                            </a>
                            <img src="~/assets/img/map-shadow.svg" alt="lol this is a shadow for the map" id="map-shadow" draggable="false">
                            <img src="~/assets/img/map-shadow.svg" alt="lol this is a shadow for the map" id="map-shadow-2" draggable="false">
                            <!-- <div id="map-pin"></div> -->
                        </div>
                    </div>
                    <div class="cell medium-7">
                        <div id="where-from-wrapper" class="rellax" data-rellax-speed="3.5" data-rellax-percentage="0.25">
                            <h2 class="regular">Based in Melbourne, Australia.</h2>
                        </div>
                        <p id="time-right-now"><b>Time right now:</b>
                            <br><span id="trn-insert">12:30 AM - Tuesday</span>
                        </p>
                    </div>
        
                </div>
            </div>
        </section>
        <section id="fourth-part">
            <div class="grid-container">
                <div class="grid-x grid-margin-x hover-fx">
                    <p class="bigboi">My hobbies include reading books, <a href="#">sketching & drawing</a>, <a href="#">painting</a> (sometimes) and <a href="#">coding</a></p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
onMounted(() => {
    const  // Declaring page section elements
    second = document.getElementById("second-part"),
    third = document.getElementById("third-part"),
    fourth = document.getElementById("fourth-part")
    

    // Get viewport dimensions:
    let window_w, window_h

    function getWindowD() {
        window_w = window.innerWidth;
        window_h = window.innerHeight;
    }
    window.onresize = getWindowD;
    getWindowD();


    // scroll events:
    var runOnScroll =  function(evt) {
        var scrollPos = window.scrollY;
        const wid = second.querySelector("#what-i-do");
        wid.scroll({
            left: scrollPos * 0.9 - 800
        });

        /// activate animation when scrolled into frame:
        let scrollBoundFP = fourth.getBoundingClientRect().top;

        if (scrollBoundSomeTransition <= 343) {
            someTransition.play();
        } else if (scrollBoundFP > 150) {
            someTransition.stop();
        }

        if (document.getElementById("first-ever-work").getBoundingClientRect().top <= 50) {
            
        }
    };
    window.addEventListener("scroll", runOnScroll, {passive: true});


    // Mouse 3d map par. stuff:
    let yMap = 44,
        xMap = 24;

    const map = third.querySelector("#map-aus");
    const mapPin = third.querySelector("#map-pin");

    let windowH_w = window_w / 2;
    let windowH_h = window_h / 2;

    var mousePal = function(event) {
        let mY = event.movementY;
        let mX = event.movementX;

        // console.log("Mouse 3d map - cursor position");
        // console.log(mX, mY );

        yMap += mY / (windowH_w / 16);
        xMap -= mX / (windowH_h / 3);

        map.style.transform = `rotateX( ${yMap}deg) rotateY(${xMap}deg) rotateZ(-15deg) scale(1.8)`;
        mapPin.style.transform = `rotateX(-20deg) rotateZ(30deg) rotateY(-${180 - xMap}deg) scale(0.25)`;
    }
    document.addEventListener('mousemove', mousePal);


    // load svg animation in:
    var someTransition = bodymovin.loadAnimation({
        container: document.getElementById('some-transition'),
        path: '/img/about-me/about-page-ls.json', 
        renderer: 'svg', 
        loop: false,
        autoplay: false, 
    });

    // psudo-pollyfill to smooth scroll to Dom object
    /*  because behaviour smooth for this function 
        is not on by default on some chromium browsers. 
    */
    function mScroll(destination, block) {
        // detect whether destination is ua string or an object
        switch (typeof destination) {
            case "object": // if it's a DOM object
                console.group("📜 mScroll: Scroll to object");  
                to = destination;
                console.log(to);
                console.groupEnd();
                break;
            case "string": // if it's a selector (String)
                to = document.querySelector(destination);
                if (to == null) {
                    throw "📜 mScroll: The selector you put in is selecting something that doesn't exist, check the value of the destination parameter."
                }
                console.group("📜 mScroll: Scroll to querySelector");
                console.log(to);
                console.groupEnd();
                break;

            default:
                console.error("📜 mScroll: Destination on mScroll should either be a DOM object or a Selector"); 
                break;
        }

        // for chromium browsers
        let otherBlock = to.getBoundingClientRect().top;
        switch (block) {
            case "start":
                otherBlock = to.getBoundingClientRect().top;
                break;

            case "end":
                otherBlock = to.getBoundingClientRect().top - (window.innerHeight - to.offsetHeight) 
                break;
        
            default:
                block = "start";
                break;
        }

        if (!!window.chrome) {  // if chromium browser
            window.scrollBy({
                top: otherBlock,
                behavior: "smooth"
            });
        } else {    // else, use regular scroll into view
            to.scrollIntoView({behavior: "smooth", block: block})
        }
    }


    const time = document.getElementById("trn-insert");
    const tFormat = { weekday: "long", hour: "numeric", minute: "numeric", second: "numeric" };
    function MelbClock() {
        let offset = "+11";

        var d = new Date();
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        var newDate = new Date(utc + (3600000 * offset));

        time.innerText = newDate.toLocaleString("en-US", tFormat);

        // setTimeout(MelbClock, 60000);
        setTimeout(MelbClock, 1000);
    }
    MelbClock();  
})
</script>

<style lang="scss" scoped>
header {
    height: 90vh;
    min-height: auto;
    outline: none;
    background: none;
    margin-bottom: 19em;
    position: relative;
    display: flex;

    .background-header {
      background: linear-gradient(200deg, #039be5 0%, #01579b 35.2%, #d81b60 100%);
      mix-blend-mode: screen;
      height: 100%;
      width: 100%;
      position: absolute;
      opacity: 0.66;
    }
    .background-header-two {
      height: 100%;
      width: 160rem;
      max-width: 100%;
      position: absolute;
      z-index: -1;
      margin-top: 11%;
      overflow-x: hidden;

      .actual-bg {
        background: linear-gradient(200deg, #039be5 0%, #01579b 35.2%, #d81b60 100%);
        height: 100%;
        width: 100%;
      }
    }
    
    .header-text-wrapper {
      align-self: flex-end;
      padding-right: 6.8rem!important;
      padding-left: 6.1rem!important;
      z-index: 22;
      padding-bottom: 2em;
    }

    h1 {
      text-transform: initial;
      font-size: 7.209em;
      line-height: 1.20149253731;

    }
  }

#about-me {
    //background: #0B233D;

    h2, h3 {
        line-height: 1.201em;
    }

    main {
        height: 300vh;
    }

    .big-text-scroll {
        display: block;
        overflow-x: hidden;
        font-size: 7em;
        line-height: 2.8em;
        width: 100%;      
        margin-top: 0.4em;
        margin-bottom: 1em;

        .text-scroll-inner {
            width: max-content;
            padding-left: 1em;
            padding-right: 1em;
            margin-left: 3em;
            background: #000;

            a {
                color: #fff;
                transition-duration: 0.5s;

                &:hover {
                   opacity: 0.5;
                }
            }
        }
    }

    #second-part {
        position: sticky;
        top: 15vh; // to-do: change this to vw
    }

    > section, main > section { 
        position: relative;
        background: inherit;

        p {
            &.bigboi {
                font-size: 2em;
            }
        }
    }
}

#map-wrapper {
    z-index: 1;
}
#map-aus {
    transform: rotateX(44deg) rotateY(24deg) rotateZ(-15deg) scale(1.8);
    perspective-origin: center;
    transform-style: preserve-3d;
    perspective: 800px;

    * {
        user-select: none;
    }

    #map-pin {
        position: absolute;
        top: 0;
        right: 0;
        transform-origin: 77.455441789% 80.488572251%;
        transform: rotateX(-43deg) rotateZ(26deg) scale(0.25);
        transform-style: preserve-3d;
    }

    #map-shadow {
        position: absolute;
        top: 0;
        right: 0;
        transform-origin: center;
        transform: scale(1.1) translateZ( -80px);
        filter: blur(60px);
        z-index: -1;
    }
    #map-shadow-2 {
        position: absolute;
        top: 0;
        right: 0;
        transform-origin: center;
        transform: scale(1.1) translateZ( -80px);
        opacity: 0.2;
        z-index: -1;
    }

    a {
        color: inherit;
        @supports (-moz-appearance:none) {
        display: contents; }
    }
}

#where-from-wrapper {
    background: #fff;
    height: 100%;
    padding: 2em 2em 2em 10em;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:after {
        content: "";
        position: relative;
        display: block;
        background: #01579b;
        height: 15px;
        width: 60px;
        margin-top: 1em;
    }
}


#third-part {
    margin-bottom: 16em;
    padding-top: 9em;
}

#fourth-part {
    height: 83vh;
    p {
        padding-top: 2em;
    }

    .grid-x {
        justify-content: center;
        align-content: center;
    }
    p.bigboi {
        max-width: 600px;
        text-align: center;
    }
}
#fifth-part {
    min-height: 60vh;
    position: relative;
    margin-bottom: 6em;

    .grid-container {
        z-index: 1;
        position: relative;
    }

    .bg-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
}


#time-right-now {
    padding-left: 10em;
}

.wide-image {
    height: 59.5vh;
    background: rgb(49, 54, 82);
    margin-top: 3em;
}

.vert-centre {
    display: flex;
}

.semi-wide-image {
    background: none;
    padding-top: 2em;
    
    &#first-ever-work {
        z-index: 2;
        #first-ever-work-svg {
            height: calc(100vh - 100px);
            background: rgb(49, 54, 82);
        }

        &::after {
            background:#000;
            height: 50%;
            content: " ";
            width: 100%;
            position: absolute;
            top: 50%;
            left: 0;
            z-index: -1;
        }
    }
}

section.black-bg {
    background: #000;
}

#first-piece-caption {
    padding-top: 5em;
}
</style>