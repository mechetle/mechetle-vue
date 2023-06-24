<template>
    <div id="about-me">
        <Container class="slim">
            <h1>Nothing here at the moment</h1>
        </Container>
    </div>
</template>

<script setup>

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