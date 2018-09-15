import $ from 'jquery'

/*
 * Constants
 */

const NAME = 'asInput'
const NAMESPACE = `admin4b.${NAME}`

const ClassName = {
  INPUT_GROUP: 'as-input',
  FOCUS: 'focus',
  DISABLED: 'disabled',
  READONLY: 'readonly'
}

const Event = {
  ON_CLICK: `click.${NAMESPACE}`,
  ON_BLUR: `blur.${NAMESPACE}`,
  ON_FOCUS: `focus.${NAMESPACE}`,
}

const Selector = {
  DISABLED: '[disabled]',
  INPUT: 'input',
  INPUT_GROUP: `.${ClassName.INPUT_GROUP}`,
  READONLY: '[readonly]'
}

/*
 * Class Definition
 */

class InputGroup {
  constructor(element) {
    this._element = element
  }

  updateState() {
    const $input = $(this._element).find(Selector.INPUT)

    $(this._element).toggleClass(ClassName.DISABLED, $input.is(Selector.DISABLED))
    $(this._element).toggleClass(ClassName.READONLY, $input.is(Selector.READONLY))
  }

  focus() {
    $(this._element).addClass(ClassName.FOCUS)
  }

  blur() {
    $(this._element).removeClass(ClassName.FOCUS)
  }

  static jQueryPlugin() {
    return this.each(function () {
      const inputGroup = new InputGroup(this)
      const $input = $(this).find(Selector.INPUT)

      $(this).on(Event.ON_CLICK, () => $input.focus())

      $input
        .on(Event.ON_FOCUS, () => inputGroup.focus())
        .on(Event.ON_BLUR, () => inputGroup.blur())
        .observe(() => inputGroup.updateState())

      inputGroup.updateState()
    })
  }
}

/*
 * jQuery Plugin
 */

$.fn[NAME] = InputGroup.jQueryPlugin
$.fn[NAME].Constructor = InputGroup
$.fn[NAME].noConflict = () => $.fn[NAME] = InputGroup.jQueryPlugin

/*
 * Auto Initialize
 */

$(Selector.INPUT_GROUP).asInput()

export default InputGroup
