import $ from 'jquery'
import 'popper.js'
import 'bootstrap'

import './bootstrap'
import './polyfills'
import './events'

import Calendar from './calendar'
import Chat from './chat'
import Camera from './camera'
import FileManager from './file-manager'
import InputGroup from './input-group'
import InputSuggestion from './input-suggestion'
import Nav from './nav'
import Sidebar from './sidebar'

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
