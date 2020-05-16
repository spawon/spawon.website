<template>
  <div class="slider" ref="slider">
    <div class="slider-list" ref="slideList">
      <div class="slider-item" v-for="slide in sliderList" :key="slide.index" ref="slideItems">
        <img :src="slide.img" :alt="slide.alt" :title="slide.title">
      </div>
    </div>
    <div class="slider-pagination" ref="sliderPagination">
      <span ref="paginationItem" v-for="(item, index) in sliderList" :key="index" @click="jumpToSlide(index)" :class="{current: currentSlideId === index}"></span>
    </div>
    <div class="slider-arrow left" ref="slideLeft" @click="prev"></div>
    <div class="slider-arrow right" ref="slideRight" @click="next"></div>
    <div class="slider-progress" ref="progress"></div>
  </div>
</template>

<script>
  export default {
    name: "Slider",
    data() {
      return {
        sliderList: [
          {
            img: '/img/122.jpg',
            alt: 'slide',
            // title: 'slide'
          },
          {
            img: '/img/123.jpg',
            alt: 'slide',
            // title: 'slide'
          }
        ],
        loop: true,     // Бесконечное зацикливание слайдера
        auto: true,     // Автоматическое пролистывание
        interval: 5000, // Интервал между пролистыванием элементов (мс)
        arrows: true,   // Пролистывание стрелками
        dots: true,      // Индикаторные точки
        time: 0,
        autoScroll: null,
        progressTimer: null,
        progress: 0,
        currentSlideId: 0,
        slideItems: null,
        slideCount: 0
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        const slider = this.$refs.slider
        const slideList = this.$refs.slideList
        this.slideItems = this.$refs.slideItems
        const slideLeft = this.$refs.slideLeft
        const slideRight = this.$refs.slideRight
        const sliderPagination = this.$refs.sliderPagination

        this.slideCount = this.sliderList.length
        this.time = new Date().getTime();


        if (this.slideCount <= 1) {   // Отключить навигацию
          slideLeft.style.display = 'none';
          slideRight.style.display = 'none'
          sliderPagination.style.display = 'none'
        }

        if (this.slideCount >= 1) {   // показать первый элемент
          this.slideItems[0].style.opacity = '1';
        }

        if (!this.loop) {
          slideLeft.style.display = 'none';  // отключить левую стрелку
          this.auto = false; // отключить автопркрутку
        } else if (this.auto) {
          this.setAutoScroll()
          this.startProgress();
          slider.addEventListener('mouseover', () => {
            this.clearProgress()
            clearInterval(this.autoScroll)
          })
          slider.addEventListener('mouseout', () => {
            this.setAutoScroll()
            this.startProgress();
          })
        }

        if(this.dots) {
          let sum = '', diffNum;

        }


      },
      prev() {
        this.slideItems[this.currentSlideId].style.opacity = '0';
        if (this.currentSlideId === 0){
          this.currentSlideId = this.slideCount - 1
        } else {
          this.currentSlideId--
        }
        this.slideItems[this.currentSlideId].style.opacity = '1';

      },
      next() {
        this.slideItems[this.currentSlideId].style.opacity = '0';
        if (this.currentSlideId === (this.slideCount - 1)){
          this.currentSlideId = 0
        } else {
          this.currentSlideId++
        }
        this.slideItems[this.currentSlideId].style.opacity = '1';
      },
      jumpToSlide(index){
        this.slideItems[this.currentSlideId].style.opacity = '0';
        this.currentSlideId = index
        this.slideItems[this.currentSlideId].style.opacity = '1';
      },
      setAutoScroll() {
        this.autoScroll = setInterval(() => {
          this.progress = 0
          this.clearProgress()
          this.next()
          this.startProgress()
        }, this.interval)
      },
      startProgress(){
        this.progressTimer = setInterval(() => {
          this.$refs.progress.style.width = `${this.progress}%`
          this.progress+= 0.1
        }, this.interval / 1000)
      },
      clearProgress(){
        this.$refs.progress.style.width = `0`
        this.progress = 0
        clearInterval(this.progressTimer)
      }
    }
  }
</script>

<style scoped lang="scss">
  $transition: opacity 1s ease-in;

  .slider {
    width: 100%;
    position: relative;

    .slider-list {
      height: 480px;
      overflow: hidden;
      position: relative;

      .slider-item {
        width: 100%;
        transition: $transition;
        opacity: 0;
        position: absolute;
        z-index: 2;
        left: 0;
        top: 0;
        display: block;

        img {
          width: 100% !important;
        }
      }
    }

    .slider-arrow {
      width: 22px;
      height: 40px;
      position: absolute;
      cursor: pointer;
      opacity: 0.6;
      z-index: 4;
      transition: $transition;
    }

    .slider-arrow:hover {
      opacity: 1;
    }

    .left {
      left: 10px;
      top: 40%;
      display: block;
      background: url("http://pvbk.spb.ru/inc/slider/sim-files/sim-arrow-left.png") no-repeat
    }

    .right {
      right: 10px;
      top: 40%;
      display: block;
      background: url("http://pvbk.spb.ru/inc/slider/sim-files/sim-arrow-right.png") no-repeat
    }

    .slider-pagination {
      width: 100%;
      height: auto;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 3;
      text-align: center;

      span {
        width: 10px;
        height: 10px;
        margin: 5px 7px;
        padding: 0;
        display: inline-block;
        background-color: #BBB;
        border-radius: 5px;
        cursor: pointer;
      }
      .current{
        background-color: #555566;
        cursor:default;
      }
    }
    .slider-progress{
      position: absolute;
      z-index: 6;
      left: 0;
      bottom: 0;
      height: 5px;
      width: 0;
      background: black;
      opacity: .6;
    }
  }
</style>

