class MyButton {

  constructor(el) {
    this.isPlaying = false
    this.isHover = false

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
    this.isHover = true
    if(!this.isPlaying) {
      this._startRollOverMotion()
    }
  }

  _startRollOverMotion() {
    this.isPlaying = true
    this.el.classList.add('-hover')
    gsap.to(this.bg, {
      scaleX: 1,
      duration: 0.25,
      delay: 0,
      ease: Expo.easeOut,
      onComplete: this._eCompleteRollOver.bind(this)
    })
  }

  _eCompleteRollOver() {
    this.isPlaying = false

    if(!this.isHover) {
      this._eRollOut()
    }
  }

  _eRollOut() {
    this.isHover = false
    if(!this.isPlaying) {
      this._startRollOutMotion()
    }
  }

  _startRollOutMotion() {
    this.isPlaying = true
    this.el.classList.remove('-hover')
    gsap.to(this.bg, {
      scaleX: 0,
      duration: 0.75,
      delay: 0,
      ease: Expo.easeInOut,
      onComplete: this._eCompleteRollOut.bind(this)
    })
  }

  _eCompleteRollOut() {
    this.isPlaying = false

    if(this.isHover) {
      this._eRollOver()
    }
  }
}






init()

function init() {
  document.querySelectorAll('.js-button').forEach((el) => {
    new MyButton(el)
  })
}



