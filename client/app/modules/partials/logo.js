import Moon from 'moonjs'

export const Logo = Moon.component('logo', {
  data: {
    branding: 'Boiler'
  },
  template: `<div class="navbar-translate">
                <a class="navbar-brand" href="http://demos.creative-tim.com/now-ui-kit/index.html" rel="tooltip" title="Designed by Invision. Coded by Creative Tim" data-placement="bottom" target="_blank">
                    {{branding}}
                </a>
                <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                </button>
            </div>`
})
// export const Logo = Moon.component('logo', {
//   data: {
//     branding: 'Boiler'
//   },
//   template: `<div class="logo">
//                 <a href="#">
//                   <h1>{{branding}}</h1>
//                 </a>
//               </div>`
// })
