import Moon from 'moonjs'

export const TopBar = Moon.component('top-bar', {
  template: `<nav class="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
                  <div class="container">
                    <logo></logo>
                    <menu></menu>
                  </div>
              </nav>`
})
// export const TopBar = Moon.component('top-bar', {
//   template: `<div class="top-bar">
//                <div class="wrapper">
//                  <logo></logo>
//                  <menu></menu>
//                </div>
//              </div>`
// })
