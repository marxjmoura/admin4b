## [v1.2.2](https://github.com/marxjmoura/admin4b/releases/tag/v1.2.2) (2018-10-20)
### Bug fixes:
- Fix components to reference to the theme colors
### Features:
- New table style

## [v1.2.1](https://github.com/marxjmoura/admin4b/releases/tag/v1.2.1) (2018-09-16)
### Bug fixes:
- Fix JavaScript reference error on NPM
- Other minor bug fixes
### Features:
- Small improvements on shadows

## [v1.2.0](https://github.com/marxjmoura/admin4b/releases/tag/v1.2.0) (2018-07-08)
### Breaking changes:
- Plugins rewritten in ES6
- Bootstrap, jQuery and Popper are now included as part of `admin4b.min.*` bundle (no more need to import)
- Simple Line Icons as default (optionally, add Font Awesome)
- Sidebar fade effect removed
### Bug fixes:
- Calendar input year when using numeric keypad
### Features:
- Sidebar respect max-width on small screens

## [v1.1.1](https://github.com/marxjmoura/admin4b/releases/tag/v1.1.1) (2018-05-19)
### Bug fixes:
- Fix polyfill for `Object.keys`
- Hover color of links in dropdown for notifications
### Features:
- Support for `ul > li` in sidebar
- Improve typography:
  - Header sizing and margins
  - Add gray text colors (`text-gray-*`)

## [v1.1.0](https://github.com/marxjmoura/admin4b/releases/tag/v1.1.0) (2018-05-05)
### Bug fixes
- Fix position of caret in sidebar link on Firefox
- Fix `Object.keys` error on IE
- Fix centralization of modal calendar on small screens
### Features
- Upgrade bootstrap to version 4.1.1
- Add js to npm package
- Improve template palette
- Multi-step form and tabbed form
- Extend `.nav-tabs`:
  - Progress navigation (`.nav-tabs-progress`)
  - Responsive capabilities (turning into accordion on small screens)

## [v1.0.0](https://github.com/marxjmoura/admin4b/releases/tag/v1.0.0) (2018-04-25)
### Breaking changes
- Removed separate file for code highlight (`.source-code` included in `admim4b.min.css`)
- Removed themes of code highlight (kept `light` only)
- Removed themes of sidebar (now is blue by default)
- Customizations must to be done overriding Sass variables
- Sidebar accordion:
  - Attribute `[data-parent]` moved from `.sidebar-nav-link` to `.sidebar-nav-group`
  - Removed class `.collapsed` from `.sidebar-nav-link`
  - Removed attribute `[data-children]` from `.sidebar-nav`
- No more need to import Bootstrap (now is included as part of admin4b)
### Features
- Upgrade to Bootstrap 4.1
- Layout improvement
- Support for buttons in sidebar (wrapped with `.sidebar-nav-btn`)

## [v0.8.0](https://github.com/marxjmoura/admin4b/releases/tag/v0.8.0) (2018-04-21)
### Bug fixes
- Fix `page-sign` on IE11: forms were not centralized
- Fix check mark of `.radio` when set text-align to parent
### Features
- Support for print media (hide sidebar and scrollbar of the content)
- Camera (take picture)
- Chat (technical support)
- Component for date input (displays calendar)
- Notification pages
- File manager
- Themes for code highlight: light and dark

## [v0.7.1](https://github.com/marxjmoura/admin4b/releases/tag/v0.7.1) (2018-03-17)
### Bug fixes
- Fix check mark for small and large radio buttons
- Fix cross-browser border radius for some components
- Fix toggle switch cursor on hover
### Features
- Change JSON attribute color in code highlight
- Increase opacity of spinner backdrop
- Cross-browser for display flex
- Code refactoring for sidebar colors
- Form responsiveness in documentation

## [v0.7.0](https://github.com/marxjmoura/admin4b/releases/tag/v0.7.0) (2018-03-13)
### Breaking changes
- The text of radio button must to be stay outside of `.check-mark` (just like checkbox and switcher)
- The element `pre > code` must to be wrapped with the class `.source-code`
### Features
- Spinner component
- Improve sidebar style
- Code refactoring for switch, radio and checkbox
- Use the font Open Sans in template
- Use Simple Line Icons in sidebar
- Change units to `rem`

## [v0.6.0](https://github.com/marxjmoura/admin4b/releases/tag/v0.6.0) (2018-03-10)
### Breaking changes
- Rename `.form-signin` to `form-sign`
### Features
- Radio button component
- Checkbox component
- Improve `.sidebar-nav-link` active by tab key (default browser outline)
- Remove margins of `callout` component and add documentation
- Documentation for how to customize sidebar width

## [v0.5.0](https://github.com/marxjmoura/admin4b/releases/tag/v0.5.0) (2018-02-25)
### Bug fixes
- Borders of `.input-group` input showing on small screens
### Features
- `.has-error` class for validation
- Code highlight CSS extension `admin4b-highlight.min.css`
- `label-floating` and `label-infield` components
- New sidebar-light color

## [v0.4.0](https://github.com/marxjmoura/admin4b/releases/tag/v0.4.0) (2018-02-19)
### Features
- Notifications in navbar
- Registration and login sample pages using the experimental component label-floating
- Small documentation improvements
- Utility classes page-sign and form-sign

## [v0.3.0](https://github.com/marxjmoura/admin4b/releases/tag/v0.3.0) (2018-02-18)
### Features
- Add scss to npm package
- Add the component input-group
- Small changes in the documentation

## [v0.2.0](https://github.com/marxjmoura/admin4b/releases/tag/v0.2.0) (2018-02-15)
### Features
- Add toggle switch
- More flexible sidebar with colors and animations

## [v0.1.0](https://github.com/marxjmoura/admin4b/releases/tag/v0.1.0) (2018-02-11)
### Features
- Introducing the component input-suggestion
- Layout structure
- Sidebar with two level of navigation
