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
import InputSuggestion from './input-suggestion'
import Pagination from './pagination'
import Sidebar from './sidebar'

window.$ = $
window.jQuery = $

export {
  Calendar,
  Chat,
  Camera,
  FileManager,
  InputSuggestion,
  Pagination,
  Sidebar
}
