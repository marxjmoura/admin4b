import $ from 'jquery'

/*
 * Constants
 */

const NAME = 'sidebar'
const NAMESPACE = `admin4b.${NAME}`

const ClassName = {
  SHOW: 'show'
}

const Event = {
  ON_CLICK: `click.${NAMESPACE}`,
  HIDE: 'hide',
  SHOW: 'show'
}

const Selector = {
  DATA_TOGGLE: '[data-toggle="sidebar"]',
  DATA_DISMISS: '[data-dismiss="sidebar"]',
  SIDEBAR: '.app-sidebar'
}

/*
 * Class Definition
 */

class Sidebar {
  constructor(element) {
    this._element = element
  }

  show() {
    $(this._element).addClass(ClassName.SHOW)
  }

  hide() {
    $(this._element).removeClass(ClassName.SHOW)
  }

  static jQueryPlugin(event) {
    return this.each(function () {
      const sidebar = new Sidebar(this)

      switch (event) {
        case Event.SHOW:
          sidebar.show()
          break
        case Event.HIDE:
          sidebar.hide()
          break
      }
    })
  }
}

/*
 * jQuery Plugin
 */

$.fn[NAME] = Sidebar.jQueryPlugin
$.fn[NAME].Constructor = Sidebar
$.fn[NAME].noConflict = () => $.fn[NAME] = Sidebar.jQueryPlugin

/*
 * Auto Initialize
 */

$(document)
  .on(Event.ON_CLICK, Selector.DATA_TOGGLE, () => {
    Sidebar.jQueryPlugin.call($(Selector.SIDEBAR), Event.SHOW)
  })
  .on(Event.ON_CLICK, Selector.DATA_DISMISS, () => {
    Sidebar.jQueryPlugin.call($(Selector.SIDEBAR), Event.HIDE)
  })

export default Sidebar
