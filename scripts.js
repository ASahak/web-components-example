const MESSAGES = [
    {
        message: 'Buy 2 with 25% or 3 with discount - Promotion with SCHOOL code.',
        token: 'ABCD',
        icon: 'gift'
    },
    {
        message: 'Free delivery in Canada from $40 of purchase. <a href="#" target="_blank">LEARN MORE</a>',
        token: 'EFGH',
        icon: 'discount'
    },
    {
        message: 'Free gift on',
        token: 'IJKL',
        image: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80'
    },
    {
        message: '100% Money Back Guarantee',
        token: 'MNOP',
        icon: 'shipping'
    },
    {
        message: 'This is awesome message',
        token: 'QRST'
    }
];

const ACCESSIBILITY_KEYBOARD = {
    HOME: 36,
    END: 35,
    LEFT: 37,
    RIGHT: 39,
}
const MAX_ROWS_COUNT = 2;
const MAX_SLOTS_COUNT_IN_ROW = 3;
const MAX_SLOTS_COUNT_IN_ROW_MOBILE = 1;
const PREFIX = 'wb:sticky-bar';
const ICONS = {
    shipping: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 13L8 8.79934C8.00028 8.51871 8.07229 8.24308 8.2088 8.00011C8.34532 7.75714 8.54154 7.55538 8.77778 7.41506L14.2222 4.2144C14.4587 4.07395 14.7269 4 15 4C15.2731 4 15.5413 4.07395 15.7778 4.2144L21.2222 7.41506C21.4585 7.55538 21.6547 7.75714 21.7912 8.00011C21.9277 8.24308 21.9997 8.51871 22 8.79934V15.2007C21.9997 15.4813 21.9277 15.7569 21.7912 15.9999C21.6547 16.2429 21.4585 16.4446 21.2222 16.5849L15.7778 19.7856C15.5413 19.9261 15.2731 20 15 20"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M15 8L18.5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8.33255 8.19003L15 12L21.5 8.28572" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15 20V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M6 16H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9 19L12 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M18.5 18V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`,
    gift: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 12V19H6V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M19 8H5V12H19V8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 19V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M12 8H8.78571C8.31211 8 7.85791 7.84196 7.52302 7.56066C7.18814 7.27936 7 6.89782 7 6.5C7 6.10218 7.18814 5.72064 7.52302 5.43934C7.85791 5.15804 8.31211 5 8.78571 5C11.2857 5 12 8 12 8Z"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 8H15.2143C15.6879 8 16.1421 7.84196 16.477 7.56066C16.8119 7.27936 17 6.89782 17 6.5C17 6.10218 16.8119 5.72064 16.477 5.43934C16.1421 5.15804 15.6879 5 15.2143 5C12.7143 5 12 8 12 8Z"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>`,
    discount: `<svg
          aria-hidden="true"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5388 4.56339C11.3293 3.71758 12.6707 3.71758 13.4612 4.56339L13.9626 5.0999C14.3569 5.52176 14.9142 5.75262 15.4913 5.73312L16.2253 5.70832C17.3823 5.66921 18.3308 6.61767 18.2917 7.77473L18.2669 8.50867C18.2474 9.08576 18.4782 9.64312 18.9001 10.0374L19.4366 10.5388C20.2824 11.3293 20.2824 12.6707 19.4366 13.4612L18.9001 13.9626C18.4782 14.3569 18.2474 14.9142 18.2669 15.4913L18.2917 16.2253C18.3308 17.3823 17.3823 18.3308 16.2253 18.2917L15.4913 18.2669C14.9142 18.2474 14.3569 18.4782 13.9626 18.9001L13.4612 19.4366C12.6707 20.2824 11.3293 20.2824 10.5388 19.4366L10.0374 18.9001C9.64312 18.4782 9.08576 18.2474 8.50867 18.2669L7.77473 18.2917C6.61767 18.3308 5.66921 17.3823 5.70832 16.2253L5.73312 15.4913C5.75262 14.9142 5.52176 14.3569 5.0999 13.9626L4.56339 13.4612C3.71758 12.6707 3.71758 11.3293 4.56339 10.5388L5.0999 10.0374C5.52176 9.64312 5.75262 9.08576 5.73312 8.50867L5.70832 7.77473C5.66921 6.61767 6.61767 5.66921 7.77473 5.70832L8.50867 5.73312C9.08576 5.75262 9.64312 5.52176 10.0374 5.0999L10.5388 4.56339Z"
            stroke="currentColor"
          />
          <path d="M9 14L15 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="14" cy="15" r="1.5" stroke="currentColor" />
          <circle cx="10" cy="9" r="1.5" stroke="currentColor" />
        </svg>`
};
const DEFAULT_ANIMATION_MODE = 'none';
const DEFAULT_ANIMATION_ON_CLOSE = 'none';
const DEFAULT_ANIMATION_HIGHLIGHT = 'none';
const DEFAULT_ANIMATION_GOAL_ACHIEVED = 'none';
const ANIMATION_HIGHLIGHT_MODES = ['flash', 'rubberBand', 'shakeX'];
const ANIMATION_GOAL_ACHIEVED_MODES = ['flash', 'rubberBand', 'shakeX'];
const DEFAULT_SLIDER_INTERVAL = 5000;
const CLOSE_ANIMATION_MODE = 'fade';
const ANIMATION_MODES = ['fade', 'slide'];
const ANIMATION_CUBIC_BEZIER = 'cubic-bezier(.25,.8,.25,1)';
const COMPONENTS_NAMES = {
    WB_STICKY_BAR_ROW: 'WB-STICKY-BAR-ROW',
    WB_STICKY_BAR_SLOT: 'WB-STICKY-BAR-SLOT',
    WB_STICKY_BAR_MESSAGE: 'WB-STICKY-BAR-MESSAGE',
};

const STICKY_BAR_CONTAINER_TEMPLATE = document.createElement('template');
STICKY_BAR_CONTAINER_TEMPLATE.innerHTML = `
    <style>
        :host * {
            box-sizing: border-box;
            margin: 0;
        }
        .wb-sticky-bar-container {
            position: fixed;
            left: 0;
            top: 0;
            width: 100vw;
            display: flex;
            z-index: 99999999;
            flex-direction: column;
        }
        .wb-sticky-bar-container ::slotted(*:nth-child(2)) {
            border-top: 2px solid #8a8585;
        }
    </style>
    <div class="wb-sticky-bar-container">
        <slot></slot>
    </div> 
`;

const STICKY_BAR_ROW_TEMPLATE = document.createElement('template');
STICKY_BAR_ROW_TEMPLATE.innerHTML = `
    <style>
        :host * {
            box-sizing: border-box;
            margin: 0;
            user-select: none;
        }
        .wb-sticky-bar-row-container {
            background-color: #000;
            color: #fff;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .wb-sticky-bar-row-wrapper {
            width: 80vw;
            max-width: 800px;
            overflow: hidden;    
            position: relative;  
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .wb-sticky-bar-row-container:not(.wb-sticky-bar-row--slider) ::slotted(*) {
            border-right: 2px solid #8a8585;        
        }
        .wb-sticky-bar-row-container:not(.wb-sticky-bar-row--slider) ::slotted(*:last-child) {
            border: none;
        }
    </style>
    <div class="wb-sticky-bar-row-container">
        <div class="wb-sticky-bar-row-wrapper">
            <slot></slot>
        </div>
    </div> 
`;

const STICKY_BAR_SLOT_TEMPLATE = document.createElement('template');
STICKY_BAR_SLOT_TEMPLATE.innerHTML = `
    <style>
        :host * {
            box-sizing: border-box;
        }
        :host {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .wb-sticky-bar-slot-container {
            display: flex;
            width: 100%;
            align-items: center;
        }
        .wb-sticky-bar-slot-wrapper {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            padding-top: 15px;
            padding-bottom: 15px;
        }
        .wb-sticky-bar-slot--slider .wb-sticky-bar-slot-wrapper {
            justify-content: flex-start;
        }
        .wb-sticky-bar-slot--slider {
            position: relative;
        }
        .wb-sticky-bar-slot--slider.slider-container--with-controls {
            padding-left: 20px;
            padding-right: 20px;
        } 
        .wb-sticky-bar-slot--slider .wb-sticky-bar-slot-wrapper > * {
            position: relative;
            flex-shrink: 0;
            display: none;
            width: 100%;
            margin-right: -100%;
        }
        .wb-sticky-bar-slot--slider .wb-sticky-bar-slot-wrapper .slide--active,
        .wb-sticky-bar-slot--slider .wb-sticky-bar-slot-wrapper .slide-pos-next,
        .wb-sticky-bar-slot--slider .wb-sticky-bar-slot-wrapper .slide-pos-prev  
        {
            display: flex;
        }
        /*SLIDE Effect*/
        .wb-sticky-bar-slot--slider .wb-sticky-bar-slot-wrapper.slot-wrapper--with-animation--slide .slide-pos-prev {
            left: -100%;
        }        
        .wb-sticky-bar-slot--slider .wb-sticky-bar-slot-wrapper.slot-wrapper--with-animation--slide .slide-pos-next {
            left: 100%;
        }
        .wb-sticky-bar-slot--slider .wb-sticky-bar-slot-wrapper.slot-wrapper--with-animation--slide .slide-prev {
            transform: translateX(100%) !important;
        }
        .wb-sticky-bar-slot--slider .wb-sticky-bar-slot-wrapper.slot-wrapper--with-animation--slide .slide-next {
            transform: translateX(-100%) !important;
        }
        .wb-sticky-bar-slot--slider .wb-sticky-bar-slot-wrapper.slot-wrapper--with-animation--slide .slide-next,
        .wb-sticky-bar-slot--slider .wb-sticky-bar-slot-wrapper.slot-wrapper--with-animation--slide .slide-prev {
            transition: transform .6s ${ANIMATION_CUBIC_BEZIER}
         }
        /*FADE Effect*/
        .wb-sticky-bar-slot--slider .wb-sticky-bar-slot-wrapper.slot-wrapper--with-animation--fade .slide-pos-prev, 
        .wb-sticky-bar-slot--slider .wb-sticky-bar-slot-wrapper.slot-wrapper--with-animation--fade .slide-pos-next {
            left: 0;
            opacity: 0;
        }
        .wb-sticky-bar-slot--slider .wb-sticky-bar-slot-wrapper.slot-wrapper--with-animation--fade .slide-prev,
        .wb-sticky-bar-slot--slider .wb-sticky-bar-slot-wrapper.slot-wrapper--with-animation--fade .slide-next {
            transform: none;
            opacity: 1;
            transition: opacity .6s ${ANIMATION_CUBIC_BEZIER};
        }
        .wb-sticky-bar-slot--slider .wb-sticky-bar-slot-wrapper.slot-wrapper--with-animation--fade .slide--active.slide-prev,
        .wb-sticky-bar-slot--slider .wb-sticky-bar-slot-wrapper.slot-wrapper--with-animation--fade .slide--active.slide-next {
            opacity: 0;
        }
    </style>
    <div class="wb-sticky-bar-slot-container">
        <div class="wb-sticky-bar-slot-wrapper">
        </div>
    </div> 
`;

const STICKY_BAR_ERROR_TEMPLATE = document.createElement('template');
STICKY_BAR_ERROR_TEMPLATE.innerHTML = `
    <style>
        .wb-sticky-bar-error {
            text-align: center;
            margin: 0;
            padding: 5px 0;
        }
    </style>
    <p class="wb-sticky-bar-error">
        <slot></slot>
    </p> 
`;
const STICKY_BAR_MESSAGE_TEMPLATE = document.createElement('template');
STICKY_BAR_MESSAGE_TEMPLATE.innerHTML = `
    <style>
        :host * {
            box-sizing: border-box;
        }
        :host {
            padding: 10px;
            min-height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .wb-sticky-bar-message {
            text-align: center;
            margin: 0;
            animation-fill-mode: both;
            animation-duration: 1s;
            display: flex;
            align-items: center;
        }
        .wb-sticky-bar-message svg {
            flex-shrink: 0;
            margin-right: 5px;
        }
        .wb-sticky-bar-message i {
            margin-right: 5px;
        }
        .wb-sticky-bar-message img {
            margin-right: 5px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
        .wb-sticky-bar-message ::slotted(a[href]) {
            color: #fff;
            font-weight: 600;
        }
        .wb-sticky-bar-message.bar-message--highlighted-flash,
        .wb-sticky-bar-message.bar-message--goal-achieved-flash
         {
            animation-name: flash;
        }
        .wb-sticky-bar-message.bar-message--highlighted-rubberBand,
        .wb-sticky-bar-message.bar-message--goal-achieved-rubberBand {
            animation-name: rubberBand;
        }
        .wb-sticky-bar-message.bar-message--highlighted-shakeX,
        .wb-sticky-bar-message.bar-message--goal-achieved-shakeX {
            animation-name: shakeX;
        }
        @keyframes flash {
          from,
          50%,
          to {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }
        @keyframes rubberBand {
          from {
            transform: scale3d(1, 1, 1);
          }
          30% {
            transform: scale3d(1.25, 0.75, 1);
          }
          40% {
            transform: scale3d(0.75, 1.25, 1);
          }
          50% {
            transform: scale3d(1.15, 0.85, 1);
          }
          65% {
            transform: scale3d(0.95, 1.05, 1);
          }
          75% {
            transform: scale3d(1.05, 0.95, 1);
          }
          to {
            transform: scale3d(1, 1, 1);
          }
        }
        @keyframes shakeX {
          from,
          to {
            transform: translate3d(0, 0, 0);
          }
        
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translate3d(-10px, 0, 0);
          }
        
          20%,
          40%,
          60%,
          80% {
            transform: translate3d(10px, 0, 0);
          }
        }
    </style>
    <p class="wb-sticky-bar-message">
        <slot></slot>
    </p> 
`;

const CLOSE_ICON_TEMPLATE = document.createElement('template');
CLOSE_ICON_TEMPLATE.innerHTML = `
    <style>
        .wb-sticky-bar-close-icon {
            position: absolute;
            top: 30px;
            margin: auto;
            right: 20px;
            font-size: 18px;
            cursor: pointer;
            color: #fff;
            z-index: 22;
            background-color: transparent;
            border: none;
        }
    </style>
    <button class="wb-sticky-bar-close-icon">&#x2715;</button>    
`;

const CONTROLS_TEMPLATE = document.createElement('template');
CONTROLS_TEMPLATE.innerHTML = `
    <style>
        :host * {
            box-sizing: border-box;
        }
        .wb-sticky-bar-controls-container {
            position: absolute;
            top: 0;
            bottom: 0;
            height: 0;
            margin: auto;
            left: 0;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 5px;
        }
        .wb-sticky-bar-controls-container > button {
            cursor: pointer;
            font-size: 26px;
            display: inline-block;
            height: 18px;
            width: 18px;
            line-height: 16px;
            background-color: transparent;
            border: none;
            color: #fff;
            text-align: center;
        }
    </style>
    <div class="wb-sticky-bar-controls-container">
        <button data-direction="previous">&#x2039;</button>
        <button data-direction="next">&#x203A;</button>
    </div>    
`;

const INDICATORS_TEMPLATE = document.createElement('template');
INDICATORS_TEMPLATE.innerHTML = `
    <style>
        :host * {
            box-sizing: border-box;
        }
        .wb-sticky-bar-indicators-container {
            position: absolute;
            bottom: 8px;
            margin: auto;
            left: 0;
            right: 0;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .wb-sticky-bar-indicators-container > button {
            cursor: pointer;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            height: 6px;
            width: 6px;
            position: relative;
            margin: 0 2px;
            background-color: transparent;
            border: none;
            padding: 0;
        }
        .wb-sticky-bar-indicators-container > button:after {
            content: "";
            position: absolute;
            background-color: #ccc;
            width: 4px;
            height: 4px;
            border-radius: 50%;
        }
        .wb-sticky-bar-indicators-container > button.active:after {
            background-color: #fff;
            width: 6px;
            height: 6px;
        }
    </style>
    <div class="wb-sticky-bar-indicators-container"></div>    
`;

const ROW_TEMPLATE = document.createElement('template');
ROW_TEMPLATE.innerHTML = `
    <style>
        :host * {
            box-sizing: border-box;
            margin: 0;
            user-select: none;
        }
        .wb-sticky-bar-row-wrapper {
            overflow: hidden;
            display: flex;
            justify-content: center;
        }
    </style>
    <div class="wb-sticky-bar-row-wrapper"></div> 
`;

const SliderModule = (() => {
    let xDown = null;
    let yDown = null;

    function getTouches(evt) {
        return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    }

    function handleTouchMove(evt, cb) {
        if (!xDown || !yDown) {
            return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
            if (xDiff > 0) {
                cb('LEFT');
            } else {
                cb('RIGHT');
            }
        } else {
            if (yDiff > 0) {
                cb('TOP');
            } else {
                cb('DOWN');
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }

    return {
        handleTouchStart,
        handleTouchMove,
    };
})();

function Slider({container, wrapper, defaultActiveIndex = 0, interval, hasControls, hasIndicators, messages, animationMode}) {
    this.isSliding = false;
    this.container = container;
    this.wrapper = wrapper;
    this.interval = interval;
    this.animationMode = animationMode;
    this.hasControls = hasControls;
    this.hasIndicators = hasIndicators;
    this.messages = messages;
    this.slidesCount = messages.length;
    this.currentIndex = defaultActiveIndex;
    this.intervalId = null;
    this.stoppedManually = false;
    this.touchState = {
        touchDiffer: 20,
        directionStartX: null,
        isSwiping: false,
    };

    this.onSlidePrevHandler = this.onSlide.bind(this, -1);
    this.onSlideNextHandler = this.onSlide.bind(this, 1);
    this.onPauseHandler = this.onPause.bind(this);
    this.onResumeAutoSlideHandler = this.onResumeAutoSlide.bind(this);
    this.onGoToSpecificSlideHandler = this.goToSpecificSlideByToken.bind(this);
    this.onTriggerOnPauseHandler = this.triggerOnPause.bind(this);
    this.onTriggerOnResumeHandler = this.triggerOnResume.bind(this);
    this.onTouchStartHandler = this.onTouchStart.bind(this);
    this.onTouchMoveHandler = this.onTouchMove.bind(this);
    this.onTouchEndHandler = this.onTouchEnd.bind(this);
    this.attacheAccessibilityHandler = this.attacheAccessibility.bind(this);
    this.onMouseEnterHandler = this.onMouseEnter.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeave.bind(this);
}

Slider.prototype = {
    onMount() {
        this.setActiveItem();
        this.drawControls();
        this.drawIndicators();
        this.toggleAttacheEvents();
        this.runAutoSlide();
        this.setUpTransition();
    },
    attacheAccessibility(evt) {
        let _index = -1;
        if(evt.keyCode === ACCESSIBILITY_KEYBOARD.END) { // END
            _index = this.slidesCount - 1;
        }
        if(evt.keyCode === ACCESSIBILITY_KEYBOARD.HOME) { // HOME
            _index = 0;
        }
        if(evt.keyCode === ACCESSIBILITY_KEYBOARD.LEFT) { // LEFT
            _index = this.currentIndex - 1 < 0 ? this.slidesCount - 1 : this.currentIndex - 1;
        }
        if(evt.keyCode === ACCESSIBILITY_KEYBOARD.RIGHT) { // RIGHT
            _index = this.currentIndex + 1 > this.slidesCount - 1 ? 0 : this.currentIndex + 1;
        }
        if(_index > -1) {
            evt.preventDefault();
            this.manuallyStopAutoSlide();
            if(this.currentIndex !== _index) {
                this.onSlide(null, {__specificIndex: _index});
            }
        }
    },
    setActiveItem() {
        const item = this.wrapper.children[this.currentIndex];
        if(item) {
            item.classList.add('slide--active');
        } else {
            console.error('Item not found during adding active class');
        }
    },
    toggleAttacheEvents(shouldRemove) {
        const _method = shouldRemove ? 'removeEventListener' : 'addEventListener';

        document[_method](`${PREFIX}:previous`, this.onSlidePrevHandler);
        document[_method](`${PREFIX}:next`, this.onSlideNextHandler);
        document[_method](`${PREFIX}:stop`, this.onPauseHandler);
        document[_method](`${PREFIX}:resume`, this.onResumeAutoSlideHandler);
        document[_method](`${PREFIX}:show-message`, this.onGoToSpecificSlideHandler);
        window[_method]('blur', this.onTriggerOnPauseHandler);
        window[_method]('focus', this.onTriggerOnResumeHandler);

        // LEFT AND RIGHT arrows for accessibility
        this.container[_method]('keydown', this.attacheAccessibilityHandler);
        this.container[_method]('mouseenter', this.onMouseEnterHandler);
        this.container[_method]('mouseleave', this.onMouseLeaveHandler);

        // Dragging events
        Array.from(this.wrapper.children).forEach(child => {
            child[_method]('touchstart', this.onTouchStartHandler);
            child[_method]('touchmove', this.onTouchMoveHandler);
            child[_method]('touchend', this.onTouchEndHandler);
        })
    },
    getItemActiveIndex() {
        const itemsArray = Array.from(this.wrapper.children);
        return itemsArray.findIndex(el => el.classList.contains('slide--active'));
    },
    onResumeAutoSlide() {
        this.stoppedManually = false;
        this.runAutoSlide();
    },
    goToSpecificSlideByToken({detail}) {
        try {
            const _index = this.messages.findIndex(msg => msg.token === detail);
            if (_index === -1) {
                throw new Error('Not found the token')
            }
            this.manuallyStopAutoSlide();
            if(this.currentIndex !== _index) {
                this.onSlide(null, {__specificIndex: _index});
            }
        } catch (err) {
            console.error(err.message)
        }

    },
    onMouseEnter() {
        this.triggerOnPause();
    },
    onMouseLeave() {
        if(!this.stoppedManually) {
            this.triggerOnResume();
        }
    },
    onTouchEnd(evt) {
        if (evt.target && evt.target.hasAttribute('disable-touch-events')) return;
        const {touchDiffer, directionStartX} = this.touchState;
        const _dir = evt.changedTouches[0].clientX + touchDiffer < directionStartX
            ? 'next'
            : evt.changedTouches[0].clientX > directionStartX + touchDiffer
                ? 'previous'
                : null;
        if (_dir) {
            document.dispatchEvent(new CustomEvent(`${PREFIX}:${_dir}`))
        } else {
            const itemActive = this.getActiveSlide();
            itemActive.style.removeProperty('transform');
        }
        this.touchState.isSwiping = false;
    },
    onTouchMove(evt) {
        SliderModule.handleTouchMove(evt, v => {
            if (v === 'TOP' || v === 'DOWN') {
                this.touchState.isSwiping = false;
            }
            if (v === 'LEFT' || v === 'RIGHT') {
                this.touchState.isSwiping = true;
            }
        });
        const {directionStartX} = this.touchState;
        if (this.touchState.isSwiping && this.animationMode === ANIMATION_MODES[1]) {
            const _touchMoveTranslate = directionStartX - evt.targetTouches[0].clientX;
            this.toucheMoveActiveSlide(_touchMoveTranslate);
        }
    },
    onTouchStart(evt) {
        this.manuallyStopAutoSlide();
        SliderModule.handleTouchStart(evt);
        if (evt.target && evt.target.hasAttribute('disable-touch-events')) {
            return;
        }
        this.touchState.directionStartX = evt.targetTouches[0].clientX;
    },
    drawIndicators() {
        if (this.hasIndicators) {
            this.container.classList.add('slider-container--with-indicators');
            this.container.appendChild(INDICATORS_TEMPLATE.content.cloneNode(true));
            const _indicatorsWrapper = this.container.querySelector('.wb-sticky-bar-indicators-container');
            const _fragment = document.createDocumentFragment();
            for (let i = 0; i < this.slidesCount; i++) {
                const _dot = document.createElement('button');
                if (i === this.currentIndex) {
                    _dot.classList.add('active')
                }
                _dot.onclick = () => {
                    const token = this.messages[i].token;
                    document.dispatchEvent(new CustomEvent(`${PREFIX}:show-message`, {detail: token}))
                }
                _fragment.appendChild(_dot);
            }
            _indicatorsWrapper.appendChild(_fragment);
        }
    },
    updateIndicators() {
        if (this.hasIndicators) {
            const _indicatorsWrapper = this.container.querySelector('.wb-sticky-bar-indicators-container');
            Array.from(_indicatorsWrapper.children).forEach((dot, index) => {
                dot.classList.remove('active');
                if (index === this.currentIndex) {
                    dot.classList.add('active');
                }
            })
        }
    },
    setUpTransition() {
        if (this.animationMode !== DEFAULT_ANIMATION_MODE) {
            this.wrapper.classList.add(`slot-wrapper--with-animation--${this.animationMode}`)
        }
    },
    getActiveSlide() {
        const itemsArray = Array.from(this.wrapper.children);
        return itemsArray[this.currentIndex];
    },
    toucheMoveActiveSlide(x) {
        const itemActive = this.getActiveSlide();
        if(itemActive) {
            itemActive.style.setProperty('transform', `translateX(${-x}px)`)
        }
    },
    triggerOnPause() {
        document.dispatchEvent(new CustomEvent(`${PREFIX}:stop`));
    },
    triggerOnResume() {
        document.dispatchEvent(new CustomEvent(`${PREFIX}:resume`));
    },
    manuallyStopAutoSlide() {
        this.stoppedManually = true;
        document.dispatchEvent(new CustomEvent(`${PREFIX}:stop`));
    },
    drawControls() {
        if (this.hasControls) {
            this.container.classList.add('slider-container--with-controls');
            this.container.appendChild(CONTROLS_TEMPLATE.content.cloneNode(true));
            const _controls = this.wrapper.parentNode.querySelectorAll('.wb-sticky-bar-controls-container > button');
            const self = this;
            _controls.forEach(control => {
                control.onclick = function () {
                    self.manuallyStopAutoSlide();
                    document.dispatchEvent(new CustomEvent(`${PREFIX}:${this.getAttribute('data-direction')}`));
                }
            })
        }
    },
    runAutoSlide() {
        if (this.interval && !this.stoppedManually) {
            this.clearAutoSlideTimer();
            this.intervalId = setInterval(() => {
                document.dispatchEvent(new CustomEvent(`${PREFIX}:next`));
            }, this.interval);
        }
    },
    onSlide(step, {__specificIndex}) {
        if (this.isSliding) {
            return;
        }
        const itemActiveIndex = this.getItemActiveIndex();
        this.currentIndex = __specificIndex >= 0 ? __specificIndex : itemActiveIndex + step;
        this.isSliding = true;

        const itemsArray = Array.from(this.wrapper.children);
        const itemActive = itemsArray[itemActiveIndex];
        let newItemActive = null;

        if (this.currentIndex > itemActiveIndex) {
            // check if this.currentIndex exceeds the number of carousel items
            if (this.currentIndex >= itemsArray.length) {
                this.currentIndex = 0;
            }

            newItemActive = itemsArray[this.currentIndex];

            // start transition
            newItemActive.classList.add('slide-pos-next');
            setTimeout(() => {
                newItemActive.classList.add("slide-next");
                itemActive.classList.add("slide-next");
            }, 20);
        } else {
            // check if this.currentIndex exceeds the number of carousel items
            if (this.currentIndex < 0) {
                this.currentIndex = itemsArray.length - 1;
            }

            newItemActive = itemsArray[this.currentIndex];

            // start transition
            newItemActive.classList.add('slide-pos-prev');
            setTimeout(() => {
                newItemActive.classList.add('slide-prev');
                itemActive.classList.add('slide-prev');
            }, 20);
        }

        // remove all transition class and switch active class
        if (this.animationMode !== DEFAULT_ANIMATION_MODE) {
            newItemActive.addEventListener("transitionend", () => {
                itemActive.className = '';
                newItemActive.className = 'slide--active';
                this.isSliding = false;
                newItemActive.style.removeProperty('transform');
            }, {
                once: true
            });
        } else {
            setTimeout(() => {
                itemActive.className = '';
                newItemActive.className = 'slide--active';
                this.isSliding = false;
            }, 20);
        }

        this.updateIndicators();
    },
    onPause() {
        this.clearAutoSlideTimer();
    },
    clearAutoSlideTimer() {
        if (this.intervalId) {
            clearInterval(this.intervalId)
        }
    },
    get _currentIndex() {
        return this.currentIndex
    },
    onDestroy() {
        this.clearAutoSlideTimer();
        this.toggleAttacheEvents(true);
    }
}

const PubSub = {
    subscribers: [],
    publish(event, data) {
        if (!this.subscribers[event]) return;

        this.subscribers[event].forEach((subscriberCallback) =>
            subscriberCallback(data)
        );
    },
    subscribe(event, callback) {
        let index;
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        index = this.subscribers[event].push(callback) - 1;

        return {
            unsubscribe: () => {
                this.subscribers[event].splice(index, 1);
            },
        };
    },
}

const STICKY_BAR_UTILITY = {
    checkCorrectComponentName(shadowRoot) {
        try {
            const _nonSupportedElement = this.hasNonSupportedElement(shadowRoot.host.children, shadowRoot.host.childComponentName);
            if (_nonSupportedElement) {
                throw new Error(`${this.nodeName} doesn\'t support this child element: ${_nonSupportedElement}`)
            }
        } catch (err) {
            console.error(err.message);
            shadowRoot.innerHTML = `
                <wb-sticky-bar-error>${err.message}</wb-sticky-bar-error>
            `
        }
    },
    hasNonSupportedElement(children, childComponentName) {
        for (let i = 0; i < children.length; i++) {
            if (children[i].nodeName !== childComponentName) {
                return children[i].nodeName;
            }
        }
    },
    isDeviceMobile() {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)) {
            return true;
        } else {
            return false;
        }
    },
    userDisabledMotions: window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
class WbStickyBar extends HTMLElement {
    #closeWithAnimation = DEFAULT_ANIMATION_ON_CLOSE;
    #isClosable = false;

    constructor() {
        super();
        this.childComponentName = COMPONENTS_NAMES.WB_STICKY_BAR_ROW;
        this.messages = [];
        this.sliderInstance = null;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(STICKY_BAR_CONTAINER_TEMPLATE.content.cloneNode(true));
        this.container = this.shadowRoot.querySelector('.wb-sticky-bar-container');
        this.buildDNInstance();
        this.cycleAnimationMode = DEFAULT_ANIMATION_MODE;
        this.animationHighlightMode = DEFAULT_ANIMATION_HIGHLIGHT;
        this.animationGoalAchievedMode = DEFAULT_ANIMATION_GOAL_ACHIEVED;
        this.onCloseHandler = this.onClose.bind(this);
        this.onRefreshHandler = this.onRefresh.bind(this);
    }

    connectedCallback() {
        this.onMount();
    }

    disconnectedCallback() {
        this.registerEvents(true);
        if (this.sliderInstance) {
            this.sliderInstance.onDestroy();
        }
    }

    static get observedAttributes() {
        return ['animation-on-cycle', 'closeable', 'animation-on-close', 'animation-on-highlight', 'animation-on-goal-achieved'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'animation-on-close':
                this.#closeWithAnimation = STICKY_BAR_UTILITY.userDisabledMotions || newValue !== CLOSE_ANIMATION_MODE ? DEFAULT_ANIMATION_ON_CLOSE : CLOSE_ANIMATION_MODE;
                break;
            case 'closeable':
                this.#isClosable = newValue === 'true';
                break;
            case 'animation-on-highlight':
                this.animationHighlightMode = ANIMATION_HIGHLIGHT_MODES.indexOf(newValue) === -1 || STICKY_BAR_UTILITY.userDisabledMotions
                    ? DEFAULT_ANIMATION_HIGHLIGHT
                    : newValue;
                break;
            case 'animation-on-goal-achieved':
                this.animationGoalAchievedMode = ANIMATION_GOAL_ACHIEVED_MODES.indexOf(newValue) === -1 || STICKY_BAR_UTILITY.userDisabledMotions
                    ? DEFAULT_ANIMATION_GOAL_ACHIEVED
                    : newValue;
                break;
            case 'animation-on-cycle':
                this.cycleAnimationMode = ANIMATION_MODES.indexOf(newValue) === -1 || STICKY_BAR_UTILITY.userDisabledMotions
                    ? DEFAULT_ANIMATION_MODE
                    : newValue;
                break;
            default:
                break
        }
    }

    onMount() {
        this.removeUnnecessaryRows();
        this.registerEvents();
        STICKY_BAR_UTILITY.checkCorrectComponentName(this.shadowRoot);
        this.checkVisibility();
        this.drawCloseIcon();
    }

    onRefresh({detail: {messages}}) {
        const _messages = this.filterMessages(messages);
        const _configuredMessages = this.setUpMessagesByItsOwnRow(_messages);
        PubSub.publish('onRefresh', _configuredMessages);
        this.onUpdate(_configuredMessages);
    }

    setUpMessagesByItsOwnRow(messages) {
        const _singleRow = this.messagesCanFitInsideOneRow(messages);
        const _firstRowChildren = this.children[0].children;
        const _secondRowChildren = this.children[1]?.children || [];
        const _firstRowCanBeSlider = _firstRowChildren.length === 1 && messages.length > 1 && _firstRowChildren[0].isCycle;
        const _messagesMoreThanTwoRowsChildren = messages.length > _firstRowChildren.length + _secondRowChildren.length;
        const _secondRowCanBeSlider = (!_singleRow && !_firstRowCanBeSlider) && this.children.length > 1 && _secondRowChildren.length === 1 && _messagesMoreThanTwoRowsChildren && _secondRowChildren[0].isCycle;
        const _rowIndexWhichIsSlider = _firstRowCanBeSlider
            ? 0
            : _secondRowCanBeSlider
                ? 1
                : -1;
        return messages.map((msg, index) => {
            let __rowId;
            if (_rowIndexWhichIsSlider === 0) {
                if (this.children.length === 1 || (this.children.length > 1 && messages.length - _secondRowChildren.length > index)) {
                    __rowId = 0;
                } else {
                    __rowId = 1;
                }
            } else if (_rowIndexWhichIsSlider === 1) {
                if (index < _firstRowChildren.length) {
                    __rowId = 0;
                } else {
                    __rowId = 1;
                }
            } else {
                if (this.children.length === 1 || (this.children.length > 1 && _firstRowChildren.length > index)) {
                    __rowId = 0;
                } else {
                    __rowId = 1;
                }
            }

            return {
                ...msg,
                __rowId,
            }
        });
    }

    filterMessages(messages) {
        return [...this.messages, ...messages].reduce((accumulator, currentValue) => {
            if (!accumulator.some(e => e.message === currentValue.message)) {
                accumulator.push(currentValue);
            }

            return accumulator;
        }, []);
    }

    checkVisibility() {
        const isVisible = this.messages.length > 0;
        this.shadowRoot.host.style.setProperty('visibility', isVisible ? 'visible' : 'hidden');
        this.shadowRoot.host.style.setProperty('opacity', isVisible ? '1' : '0');
    }

    removeUnnecessaryRows() {
        setTimeout(() => { // the children list don't render sync with parent
            let lastChild = this.children[this.children.length - 1];
            while (this.children.length > MAX_ROWS_COUNT || lastChild?.children.length === 0) {
                lastChild.isRemoved = true;
                lastChild.remove();
                lastChild = this.children[this.children.length - 1];
            }
        }, 0);
    }

    messagesCanFitInsideOneRow(messages) {
        const _messages = messages || this.messages;
        const _slotsOfFirstRow = this.children[0].children.length;
        return _messages.length <= _slotsOfFirstRow
    }

    registerEvents(shouldRemove) {
        const _method = shouldRemove ? 'removeEventListener' : 'addEventListener';

        document[_method](`${PREFIX}:render`, this.onRefreshHandler);
        document[_method](`${PREFIX}:close`, this.onCloseHandler);
    }

    onClose() {
        if (this.#closeWithAnimation !== DEFAULT_ANIMATION_ON_CLOSE) {
            this.shadowRoot.host.style.setProperty('transition', `.4s ${ANIMATION_CUBIC_BEZIER}`)
        }
        this.shadowRoot.host.style.setProperty('visibility', 'hidden');
        this.shadowRoot.host.style.setProperty('opacity', '0');
    }

    onUpdate(messages) {
        this.messages = messages;
        this.checkVisibility();
    }

    drawCloseIcon() {
        if (this.#isClosable) {
            this.container.appendChild(CLOSE_ICON_TEMPLATE.content.cloneNode(true))
            const _closeIcon = this.container.querySelector('.wb-sticky-bar-close-icon');
            _closeIcon.addEventListener('click', () => {
                document.dispatchEvent(new CustomEvent(`${PREFIX}:close`))
            })
        }
    }

    buildDNInstance() {
        window.__cusomMessages = MESSAGES;
    }
}

class WbStickyBarRow extends HTMLElement {
    constructor() {
        super();
        this.childComponentName = COMPONENTS_NAMES.WB_STICKY_BAR_SLOT;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(STICKY_BAR_ROW_TEMPLATE.content.cloneNode(true));
        this.containerNode = this.shadowRoot.querySelector('.wb-sticky-bar-row-container')
    }

    connectedCallback() {
        STICKY_BAR_UTILITY.checkCorrectComponentName(this.shadowRoot);
        this.removeUnnecessarySlots();
    }

    disconnectedCallback() {
        this.containerNode = null;
    }

    removeUnnecessarySlots() {
        setTimeout(() => { // the children list don't render sync with parent
            const _maxSlot = STICKY_BAR_UTILITY.isDeviceMobile() ? MAX_SLOTS_COUNT_IN_ROW_MOBILE : MAX_SLOTS_COUNT_IN_ROW;
            while (this.children.length > _maxSlot) {
                this.children[this.children.length - 1].isRemoved = true;
                this.children[this.children.length - 1].remove();
            }
        }, 0);
    }
}

class WbStickyBarSlot extends HTMLElement {
    constructor() {
        super();
        this.childComponentName = COMPONENTS_NAMES.WB_STICKY_BAR_MESSAGE;
        this.attachShadow({mode: 'open'});
        this.repaintShadowRoot();
        this.onRefreshSubscriber = null;
        this.messages = [];
        this.parentRowIndex = null;
        this.itsOwnIndex = null;
        this.asSlider = false;
        this.sliderInstance = null;
        this.hasControls = false;
        this.hasIndicators = false;
        this.interval = DEFAULT_SLIDER_INTERVAL;
        this.isCycle = false;
        this.highlightToken = null;
        this.goalAchievedToken = null;
        this.isRemoved = false;
        this.onHighlightMessageHandler = this.onHighlightMessage.bind(this);
        this.onGoalAchievedHandler = this.onGoalAchieved.bind(this);
    }

    static get observedAttributes() {
        return ['controls', 'indicators', 'cycle', 'interval'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            switch (name) {
                case 'controls':
                    this.hasControls = newValue === 'true';
                    break;
                case 'indicators':
                    this.hasIndicators = newValue === 'true';
                    break;
                case 'cycle':
                    this.isCycle = newValue === 'true';
                    break
                case 'interval': {
                    const value = Number(newValue);
                    if (!isNaN(value)) {
                        this.interval = value;
                    }
                    break;
                }
                default:
                    break;
            }
        }
    }

    connectedCallback() {
        this.toggleEvents();
        STICKY_BAR_UTILITY.checkCorrectComponentName(this.shadowRoot);
        this.onRefreshSubscriber = PubSub.subscribe('onRefresh', this.onUpdate.bind(this));
    }

    disconnectedCallback() {
        this.toggleEvents();
        this.onRefreshSubscriber.unsubscribe();
        this.sliderInstance?.onDestroy();
    }

    onHighlightMessage({detail}) {
        this.highlightToken = detail;
        this.onUpdate(this.messages);
        this.highlightToken = null;
    }

    onGoalAchieved({detail}) {
        this.goalAchievedToken = detail;
        this.onUpdate(this.messages);
        this.goalAchievedToken = null;
    }

    toggleEvents(removeListener) {
        const _method = removeListener ? 'removeEventListener' : 'addEventListener';
        document[_method](`${PREFIX}:highlight-message`, this.onHighlightMessageHandler);
        document[_method](`${PREFIX}:goalAchieved-message`, this.onGoalAchievedHandler);
    }

    onUpdate(messages) {
        if(this.isRemoved) {
            return
        }

        this.messages = messages;
        const {parentRowIndex, itsOwnIndex} = this.getParentAndItsOwnIndexes();
        this.parentRowIndex = parentRowIndex;
        this.itsOwnIndex = itsOwnIndex;
        const forceUpdate = !this.highlightToken && !this.goalAchievedToken;
        this.renderMessages(forceUpdate);
    }

    getParentAndItsOwnIndexes() {
        return {
            parentRowIndex: Array.from(this.parentElement.parentElement.children).findIndex(row => row === this.parentElement),
            itsOwnIndex: Array.from(this.parentElement.children).findIndex(slot => slot === this),
        };
    }

    repaintShadowRoot() {
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(STICKY_BAR_SLOT_TEMPLATE.content.cloneNode(true));
        this.containerNode = this.shadowRoot.querySelector('.wb-sticky-bar-slot-container');
        if (this.sliderInstance) {
            this.sliderInstance.onDestroy();
        }
    }

    renderMessages(forceUpdate) {
        // Should reset the shadowRoot for repainting it again, because it seems there are new messages
        this.repaintShadowRoot();

        const _ownMessages = this.messages.filter(msg => msg.__rowId === this.parentRowIndex);
        this.asSlider = this.parentElement.children.length === 1;
        const _wrapper = this.containerNode.querySelector('.wb-sticky-bar-slot-wrapper');
        if(_ownMessages.length < 1) {
            return;
        }
        if (this.asSlider && this.isCycle) {
            if (this.sliderInstance) {
                this.sliderInstance.onDestroy();
            }
            this.containerNode.setAttribute('tabindex', '1');
            _ownMessages.forEach(msg => {
                this.parentElement.containerNode.classList.add('wb-sticky-bar-row--slider');
                this.containerNode.classList.add('wb-sticky-bar-slot--slider');
                _wrapper.innerHTML += `
                    <wb-sticky-bar-message
                        token="${msg.token}"
                        icon="${msg.icon || ''}"
                        image="${msg.image || ''}"
                    >
                        ${msg.message}
                    </wb-sticky-bar-message>
                `;
            });

            this.sliderInstance = new Slider({
                container: this.containerNode,
                wrapper: _wrapper,
                animationMode: this.parentElement.parentElement.cycleAnimationMode, // getting from wb-sticky-bar
                interval: this.interval,
                hasControls: this.hasControls,
                hasIndicators: this.hasIndicators,
                messages: _ownMessages,
                defaultActiveIndex: forceUpdate ? 0 : this.sliderInstance._currentIndex,
            });
            this.sliderInstance.onMount();
        } else {
            this.containerNode.removeAttribute('tabindex');
            const _currToken = _ownMessages[this.itsOwnIndex].token;
            _wrapper.innerHTML = `
                <wb-sticky-bar-message 
                    token="${_currToken}"
                    animation-highlight-mode="${this.parentElement.parentElement.animationHighlightMode}"
                    animation-goal-achieved-mode="${this.parentElement.parentElement.animationGoalAchievedMode}"
                    highlight="${this.highlightToken === _currToken}"
                    goal-achieved="${this.goalAchievedToken === _currToken}"
                    icon="${_ownMessages[this.itsOwnIndex].icon || ''}"
                    image="${_ownMessages[this.itsOwnIndex].image || ''}"
                >
                    ${_ownMessages[this.itsOwnIndex].message}
                </wb-sticky-bar-message>
            `;
        }
    }
}

class WbStickyBarMessage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(STICKY_BAR_MESSAGE_TEMPLATE.content.cloneNode(true));
        this.container = this.shadowRoot.querySelector('.wb-sticky-bar-message');
        this.token = null;
        this.animationHighlightMode = DEFAULT_ANIMATION_HIGHLIGHT;
        this.animationGoalAchievedMode = DEFAULT_ANIMATION_GOAL_ACHIEVED;
        this.icon = null;
        this.imgSrc = '';
        this.onTransitionEndHandler = this.onTransitionEnd.bind(this);
    }

    static get observedAttributes() {
        return ['token', 'animation-highlight-mode', 'animation-goal-achieved-mode', 'highlight', 'goal-achieved', 'icon', 'image'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            switch (name) {
                case 'token':
                    this.token = newValue;
                    break;
                case 'animation-highlight-mode':
                    this.animationHighlightMode = newValue;
                    break;
                case 'animation-goal-achieved-mode':
                    this.animationGoalAchievedMode = newValue;
                    break;
                case 'highlight':
                    this.onHighlightMessage(newValue === 'true');
                    break;
                case 'goal-achieved':
                    this.onGoalAchievedMessage(newValue === 'true');
                    break;
                case 'icon':
                    this.icon = Object.keys(ICONS).indexOf(newValue) > -1 ? ICONS[newValue] : '';
                    break;
                case 'image':
                    this.imgSrc = newValue;
                    break;
                default:
                    break
            }
        }
    }

    connectedCallback() {
        this.onMount();
    }

    disconnectedCallback() {
        this.toggleEvents(true);
    }

    onMount() {
        this.toggleEvents();
        this.renderIcon();
        this.renderImage();
    }

    toggleEvents(shouldRemove) {
        const _method = shouldRemove ? 'removeEventListener' : 'addEventListener';

        this.container[_method]('animationend', this.onTransitionEndHandler, {
            once: true
        });
    }

    onTransitionEnd() {
        this.container.classList.remove(`bar-message--highlighted-${this.animationHighlightMode}`);
        this.container.classList.remove(`bar-message--goal-achieved-${this.animationGoalAchievedMode}`);
    }

    renderIcon() {
        if(this.icon) {
            this.container.insertAdjacentHTML('afterBegin', this.icon);
        }
    }

    renderImage() {
        if(this.imgSrc) {
            const imgNode = document.createElement('img');
            imgNode.setAttribute('src', this.imgSrc);
            imgNode.setAttribute('alt', 'dynamic image for messages');
            this.container.prepend(imgNode);
        }
    }

    onHighlightMessage(isHighlighted) {
        const { setToken, hasToken } = this.highlightedMessagesSessionStorage();
        if(isHighlighted && !hasToken) {
            this.container.classList.add(`bar-message--highlighted-${this.animationHighlightMode}`);
            setToken();
        }
    }

    highlightedMessagesSessionStorage() {
        const tokens = JSON.parse(sessionStorage.getItem('highlightedMessages')) || [];
        return {
            hasToken: tokens.indexOf(this.token) > -1,
            setToken: () => sessionStorage.setItem('highlightedMessages', JSON.stringify([...tokens, this.token]))
        }
    }

    onGoalAchievedMessage(isGoalAchieved) {
        const { setToken, hasToken } = this.highlightedMessagesSessionStorage();
        if(isGoalAchieved && !hasToken) {
            this.container.classList.add(`bar-message--goal-achieved-${this.animationGoalAchievedMode}`);
            setToken();
        }
    }
}

class WbStickyBarError extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(STICKY_BAR_ERROR_TEMPLATE.content.cloneNode(true));
    }
}

customElements.define('wb-sticky-bar', WbStickyBar);
customElements.define('wb-sticky-bar-row', WbStickyBarRow);
customElements.define('wb-sticky-bar-slot', WbStickyBarSlot);
customElements.define('wb-sticky-bar-message', WbStickyBarMessage);
customElements.define('wb-sticky-bar-error', WbStickyBarError);
