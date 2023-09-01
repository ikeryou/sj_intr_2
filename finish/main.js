// ボタンクラス宣言
class MyButton {

  constructor(el) {
    // アニメーション中かどうか
    this.isPlaying = false

    // ロールオーバーしてるかどうか
    this.isHover = false

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

    // イベント登録
    this.el.addEventListener('mouseenter', () => {
      this._eRollOver()
    })
    this.el.addEventListener('mouseleave', () => {
      this._eRollOut()
    })
  }

  // イベント ロールオーバー
  _eRollOver() {
    // ロールオーバーフラグをtrueに
    this.isHover = true

    // アニメーション中ならなにもしない
    if(!this.isPlaying) {
      // モーション開始
      this._startRollOverMotion()
    }
  }

  // ロールオーバーモーション開始
  _startRollOverMotion() {
    // アニメーションフラグをtrueに
    this.isPlaying = true

    // ロールオーバーモーション中のclassを付与
    // 文字の色はcssで
    this.el.classList.add('-hover')

    // 背景要素モーション開始
    gsap.to(this.bg, {
      scaleX: 1,
      duration: 0.25,
      delay: 0,
      ease: Expo.easeOut,
      onComplete: () => {
        this._eCompleteRollOver()
      }
    })
  }

  // イベント ロールオーバーモーション完了
  _eCompleteRollOver() {
    // アニメーションフラグをfalseに
    this.isPlaying = false

    // この時点でロールオーバーが外れてたらロールアウトのモーションを開始する
    if(!this.isHover) {
      this._eRollOut()
    }
  }

  // イベント ロールアウト
  _eRollOut() {
    // ロールオーバーフラグをfalseに
    this.isHover = false

    // アニメーション中ならなにもしない
    if(!this.isPlaying) {
      // ロールアウトモーション開始
      this._startRollOutMotion()
    }
  }

  // ロールアウトモーション開始
  _startRollOutMotion() {
    // アニメーションフラグをtrueに
    this.isPlaying = true

    // class付与
    // 文字の色はcssで
    this.el.classList.remove('-hover')

    // モーション開始
    gsap.to(this.bg, {
      scaleX: 0,
      duration: 0.75,
      delay: 0,
      ease: Expo.easeInOut,
      onComplete: () => {
        this._eCompleteRollOut()
      }
    })
  }

  // イベント ロールアウトモーション完了
  _eCompleteRollOut() {
    // アニメーションフラグfalseに
    this.isPlaying = false

    // この時点でロールオーバーしてたらロールオーバーモーション開始
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



