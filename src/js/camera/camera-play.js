import $ from 'node_modules/jquery'
import { Event, Prop } from './camera-constants'

navigator.getSupportedUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia

class PlayCommand {
  constructor(element) {
    this._element = element
  }

  _link(stream) {
    const video = $(this._element).get(0)

    if ('srcObject' in video) {
      video.srcObject = stream
    } else if (navigator.mozGetUserMedia) {
      video.mozSrcObject = stream
    } else {
      const windowURL = window.URL || window.webkitURL || window.mozURL || window.msURL
      video.src = windowURL.createObjectURL(stream)
    }
  }

  _onSuccess(stream) {
    const $video = $(this._element)

    this._link(stream)

    $video.get(0).play()
    $video.prop(Prop.STREAM, stream)
    $video.prop(Prop.PLAYING, true)
    $video.trigger(Event.TRIGGER_PLAY)
  }

  _onFailure(error) {
    const $video = $(this._element)
    $video.trigger(Event.TRIGGER_ERROR, error)
  }

  execute() {
    const $video = $(this._element)

    if ($video.prop(Prop.PLAYING)) {
      return
    }

    if (!navigator.getSupportedUserMedia) {
      $video.trigger(Event.TRIGGER_NOT_SUPPORTED)
      return
    }

    const mediaConstraint = { video: true, audio: false }

    navigator.getSupportedUserMedia(mediaConstraint,
      (stream) => this._onSuccess(stream),
      (error) => this._onFailure(error))
  }
}

export default PlayCommand
