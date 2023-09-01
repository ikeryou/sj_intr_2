// ボタンクラス宣言
class MyButton {

  constructor(el) {
    // 操作する要素
    this.el = el

    // アニメーションさせる背景
    const bg = document.createElement('span')
    bg.classList.add('js-button-bg')
    this.el.prepend(bg)
    this.bg = bg

    // 背景、最初は見えないように
    gsap.set(this.bg, {
      scaleX: 0,
    })
  }

  // イベント ロールオーバー
  _eRollOver() {
    this._startRollOverMotion()
  }

  // ロールオーバーモーション開始
  _startRollOverMotion() {
    this.el.classList.add('-hover')
    gsap.to(this.bg, {
      scaleX: 1,
      duration: 0.75,
      delay: 0,
      ease: Expo.easeOut,
    })
  }

  // イベント ロールアウト
  _eRollOut() {
    this._startRollOutMotion()
  }

  // ロールアウトモーション開始
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



