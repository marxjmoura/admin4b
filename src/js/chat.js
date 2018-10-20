import $ from 'jquery'

/*
 * Constants
 */

const NAME = 'chat'
const NAMESPACE = `admin4b.${NAME}`

const ClassName = {
  APP_CONTENT: 'app-content',
  CHAT: 'chat',
  CHAT_MESSAGES: 'chat-messages',
  CHAT_ON: 'chat-on',
}

const Event = {
  ON_RESIZE: `resize.${NAMESPACE}`,
  TRIGGER_RESIZE: 'resize'
}

const Selector = {
  APP_CONTENT: `.${ClassName.APP_CONTENT}`,
  CHAT: `.${ClassName.CHAT}`,
  CHAT_MESSAGES: `.${ClassName.CHAT_MESSAGES}`
}

/*
 * Class Definition
 */

class Chat {
  constructor(element) {
    this._element = element
  }

  fillContent() {
    let usedHeight = 0

    $(Selector.APP_CONTENT).children().each((index, element) => {
      if ($(element).is(Selector.CHAT)) return
      const includeMargins = true
      usedHeight += $(element).outerHeight(includeMargins)
    })

    $(this._element).height($(Selector.APP_CONTENT).height() - usedHeight)
    $(this._element).addClass(ClassName.CHAT_ON)
    $(this._element).find(Selector.CHAT_MESSAGES).scrollTo('bottom')
  }

  static jQueryPlugin() {
    return this.each(function () {
      const chat = new Chat(this)
      $(window).on(Event.ON_RESIZE, () => chat.fillContent()).trigger(Event.TRIGGER_RESIZE)
    })
  }
}

/*
 * jQuery Plugin
 */

$.fn[NAME] = Chat.jQueryPlugin
$.fn[NAME].Constructor = Chat
$.fn[NAME].noConflict = () => $.fn[NAME] = Chat.jQueryPlugin

/*
 * Auto Initialize
 */

$(Selector.CHAT).chat()

export default Chat
