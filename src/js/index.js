import $ from 'node_modules/jquery'
import popperjs from 'node_modules/popper.js'
import bootstrap from 'node_modules/bootstrap'

import 'src/js/bootstrap'
import 'src/js/polyfills'
import 'src/js/events'

import Calendar from 'src/js/calendar'
import Chat from 'src/js/chat'
import Camera from 'src/js/camera'
import FileManager from 'src/js/file-manager'
import InputGroup from 'src/js/input-group'
import InputSuggestion from 'src/js/input-suggestion'
import Nav from 'src/js/nav'
import Sidebar from 'src/js/sidebar'

window.$ = $
window.jQuery = $

export {
  Calendar,
  Chat,
  Camera,
  FileManager,
  InputGroup,
  InputSuggestion,
  Nav,
  Sidebar
}
