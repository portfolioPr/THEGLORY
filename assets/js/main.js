
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({

	"(min-width: 800px)": function() {

    

    /**
     * On Page Load
     */
    function pageLoad() {

      $('body').addClass('notScroll')

      let loadImg = gsap.timeline();

      loadImg
      .addLabel('a')
      .set('.group-loader img', {
        yPercent:-30,
        opacity:0,
      })
      .set('.group-loader .loader-logo', {
        yPercent:500,
        opacity:0,
      })
      .set('.header .group-gnb', {
        yPercent:-50,
        opacity:0,
      })

      .to(".group-loader", {
        opacity: 1,
        ease: "Quint.easeOut",
        duration: 0.5})

      .to('.group-loader img', {
        yPercent: 0,
        opacity: 1,
        ease: "Quint.easein",
        stragger:0.8,
        duration: 0.6
      })

      .fromTo(
        ".group-loader .loader-imgs",
        {
          scale: 1.2
        },
        {
          scale: 0.8,
          delay: -1,
          duration: 12
        },'a')

      .to(".group-loader .loader-logo", {
        yPercent:0,
        opacity:1,
        ease: "Quint.easeOut",
        delay: 2,
        duration: 1
      },'a')

      .to(".group-loader", {
        height: "0",
        ease: "Quint.easeOut",
        delay: -8.8,
        duration: 1.8
      })

      .to(".group-loader .loader-logo", {
        yPercent:3000,
        opacity:0,
        delay: -8.8,
        ease: "none",
      })

      .to('.header .group-gnb', {
        yPercent:0,
        opacity:1,
        delay: -8,
        ease: "none",
        onComplete:function(){
          $('body').removeClass('notScroll')
        }
      })


    }
    pageLoad();

      /**
       * header 사운드버튼
       */
      let myAudio = new Audio();
      myAudio.src = "./assets/audio/audio.mp4";
        
        $(".btn-audio").on("click", function () {
          $(this).toggleClass("playing");
          if ($(this).hasClass("playing")) {
              myAudio.play();
          } else {
              myAudio.pause();
          }
        });
        
        /**
         * //txt-oh animation
         * @i : index
         * @element : [data-text]
        */
        gsap.set('.txt-oh',{})
        gsap.set('.txt-oh .text',{yPercent:100})

        $('[data-text]').each(function(i,element){

            child = $(this).find('.text');

            gsap.to(child,{
                scrollTrigger:{
                    trigger:element,
                    start:"0% 100%",
                    end:"100% 50%",
                    // markers:true,
                    scrub:0.5,
                },
                ease:'none',
                yPercent:0,
                stragger:0.1,
            })
        })

        $('[data-text2]').each(function(i,element){

            child = $(this).find('.text');

            gsap.to(child,{
                scrollTrigger:{
                    trigger:element,
                    start:"0% 100%",
                    end:"100% 50%",
                    // markers:true,
                    scrub:0.5,
                },
                ease:'none',
                yPercent:0,
                stragger:0.1,
            })
        })

        /**
         * //question section pinMode
         */
        pinMode = gsap.timeline({
            scrollTrigger:{
                trigger:'#pinMode',
                start: "top center",
                end: "bottom top",
                scrub: 0.5,
                // markers:true,
                // pin:true,
            }
        });

        pinMode
        .addLabel('b')
        .set('.question .question',{y:300})
        .to('.question .parallax-img',{transform: 'translate(0%,0%) scale(1,1)'},'b')
        .to('.question-overlay',{opacity:1},'b')

        //question text animation
        gsap.to('.question .question',{
            scrollTrigger:{
                trigger:'.question',
                start: "top center",
                end: "bottom top",
                scrub: 0.5,
            },
            x: "-280vw"
        });



  },

	"(max-width: 799px)": function() {},

	"all": function() {




    /**
     * //header logo 애니메이션
     */
    gsap.to('.header .logo',{
        scrollTrigger:{
            trigger:".section.visual",
            start:"0% 0%",
            end:"100% 0%",
            // markers:true,
            scrub:0,
        },
        top:'20px',
        transform: 'translate(-50%,0%) scale(1)',
    })

    /**
     * header whiteMode 색상변경
     */
    $(window).scroll(function(){
                  
      curr = $(this).scrollTop(); 
      if(curr <= 0){
          $('.header').addClass('on')
      }
    })
    $(window).trigger('scroll');

    whiteMode = document.querySelectorAll('.wh-mode');
    whiteMode.forEach(element => {
        gsap.to('.header',{
                scrollTrigger:{
                trigger:element,
                start:"0% 0%",
                end:"100% 0%",
                // markers:true,
                onEnter: function() { $('.header').addClass('on') },
                onEnterBack: function() { $('.header').addClass('on') },
                onLeave: function() { $('.header').removeClass('on') },
                onLeaveBack: function() { $('.header').removeClass('on') },
            }
        })

    });
    
    /**
     * //parallax-img
     */
    const imgEl = document.querySelectorAll('[data-y]')
    imgEl.forEach(element => {
        
        start = (element.dataset.start) ? element.dataset.start : '100%'
        y = (element.dataset.y) ? element.dataset.y : '-15%'

        gsap.to(element,{
            scrollTrigger:{
                trigger:element,
                start:`0% ${start}`,
                end:"100% 0%",
                // markers:true,
                scrub:0.5,
            },
            ease:'none',
            yPercent:y,
        })

    });
    
    /**
     * body theme mode
     */
    $('[data-theme]').each(function(i,element){
      bg = $(this).data('theme');
      mostart = (element.dataset.mostart) ? element.dataset.mostart : '0%'
      end = (element.dataset.end) ? element.dataset.end : '100%'

      ScrollTrigger.create({
          trigger:element,
          start:`${mostart} 100%`,
          end:`${end} 0%`,
          // markers:true,
          toggleClass: {targets: "body", className: bg}
        }) 
    })

    /**
     * 푸터 display
     */
        gsap.to(".header", {
          scrollTrigger: {
            trigger: ".introduce",
            start: "top center",
            end: "bottom bottom",
            scrub: 0.5
          },
          y: "-20rem",
          opacity: 0
        });
  
        gsap.from(".footer .related-logo, .footer .footer-logo, .footer .txt", {
          scrollTrigger: {
            trigger: ".introduce",
            start: "top +=50",
            end: "bottom bottom",
            scrub: 0.5,
          },
          ease: "Quint.easeIn",
          duration:2,
          y: "20px",
          opacity: 0
        });

    /**
    * section introduce 타이틀애니메이션
    */
      txtAni = gsap.timeline({
          scrollTrigger:{
              trigger:".introduce",
              start: "top center",
              end: "bottom bottom",
              scrub: 0.5,
          },
      })

      txtAni
      .addLabel('c')
      .to('.introduce h2',{ opacity: 1,},'c')
      .from('.tit-left',{  x: "-100px"},'c')
      .from('.tit-right',{ x: "100px"},'c')
      .from('.introduce .link-movie',{ opacity: 0,  y: "20px"})
      // .to('.footer',{ opacity: 1, yPercent:10},'c')



  }

});


