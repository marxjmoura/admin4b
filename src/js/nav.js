import $ from 'jquery'

/*
 * Constants
 */

const NAME = 'navProgress'

const ClassName = {
  ITEM: 'nav-item',
  LINK: 'nav-link',
  TAB_PROGRESS: 'nav-tabs-progress',
  COMPLETE: 'complete'
}

const Event = {
  ON_SHOW_TAB: 'show.bs.tab'
}

const Selector = {
  ITEM: `.${ClassName.ITEM}`,
  LINK: `.${ClassName.LINK}`,
  TAB_PROGRESS: `.${ClassName.TAB_PROGRESS}`
}

/*
 * Class Definition
 */

class Nav {
  constructor(element) {
    this._element = element
  }

  bindEvents() {
    var $items = $(this._element).find(Selector.ITEM)
    var $links = $items.find(Selector.LINK)

    $links.on(Event.ON_SHOW_TAB, function (e) {
      var $item = $(e.target).closest(Selector.ITEM)

      $item.prevAll().addClass(ClassName.COMPLETE)
      $item.nextAll().addBack().removeClass(ClassName.COMPLETE)
    })
  }

  static jQueryPlugin() {
    return this.each(function () {
      new Nav(this).bindEvents()
    })
  }
}

/*
 * jQuery Plugin
 */

$.fn[NAME] = Nav.jQueryPlugin
$.fn[NAME].Constructor = Nav
$.fn[NAME].noConflict = () => $.fn[NAME] = Nav.jQueryPlugin

/*
 * Auto Initialize
 */

$(Selector.TAB_PROGRESS).navProgress()

export default Nav
