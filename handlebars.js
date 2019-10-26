const fs = require('fs')
const path = require('path')
const through = require('through2')
const handlebars = require('handlebars')
const PluginError = require('plugin-error')

const ROOTDIR = process.cwd()
const PLUGIN_NAME = 'gulp-site-engine'

handlebars.registerHelper('include', function (file) {
  try {
    return fs.readFileSync(file, 'utf8')
  } catch (error) {
    console.error(PLUGIN_NAME, error.message)
    return ''
  }
})

function transform(file, encoding, callback) {
  if (file.isNull()) {
    // nothing to do
    return callback(null, file)
  }

  if (file.isStream()) {
    this.emit('error', new PluginError(PLUGIN_NAME, 'Streams not supported!'))
  }

  const filedir = path.parse(file.path).dir
  const filename = path.parse(file.path).name
  const isPartial = filename.startsWith('_')
  const source = file.contents.toString()

  if (isPartial) {
    const partialPrefix = filedir.replace(ROOTDIR + '/', '')
    const partialSuffix = filename.replace('_', '')
    const partialName = path.join(partialPrefix, partialSuffix)

    handlebars.registerPartial(partialName, source)
  } else {
    try {
      const template = handlebars.compile(source)
      const compiledHTML = template({})

      file.contents = Buffer.from(compiledHTML)
    } catch (err) {
      this.emit('error', new PluginError(PLUGIN_NAME, err))
    }

    this.push(file)
  }

  return callback()
}

module.exports = function () {
  return through.obj(transform)
}
