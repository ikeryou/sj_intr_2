class MyButton {

  constructor(el) {
    this.el = el

    const bg = document.createElement('span')
    bg.classList.add('js-button-bg')
    this.el.prepend(bg)
    this.bg = bg

    gsap.set(this.bg, {
      scaleX: 0,
    })

    this.el.addEventListener('mouseenter', this._eRollOver.bind(this))
    this.el.addEventListener('mouseleave', this._eRollOut.bind(this))
  }

  _eRollOver() {
    this._startRollOverMotion()
  }

  _startRollOverMotion() {
    this.el.classList.add('-hover')
    gsap.to(this.bg, {
      scaleX: 1,
      duration: 0.25,
      delay: 0,
      ease: Expo.easeOut,
    })
  }


  _eRollOut() {
    this._startRollOutMotion()
  }

  _startRollOutMotion() {
    this.el.classList.remove('-hover')
    gsap.to(this.bg, {
      scaleX: 0,
      duration: 0.75,
      delay: 0,
      ease: Expo.easeInOut,
    })
  }
}






init()

function init() {
  document.querySelectorAll('.js-button').forEach((el) => {
    new MyButton(el)
  })
}



