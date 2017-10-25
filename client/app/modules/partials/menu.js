import Moon from 'moonjs'

export const Menu = Moon.component('menu', {
  template: `<div class="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="./assets/img/blurred-image-1.jpg">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)" onclick="scrollToDownload()">
                            <i class="now-ui-icons arrows-1_cloud-download-93"></i>
                            <p>Download</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./documentation/tutorial-components.html" target="_blank">
                            <i class="now-ui-icons files_paper"></i>
                            <p>Components</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-neutral" href="https://www.creative-tim.com/product/now-ui-kit-pro" target="_blank">
                            <i class="now-ui-icons arrows-1_share-66"></i>
                            <p>Upgrade to PRO</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank">
                            <i class="fa fa-twitter"></i>
                            <p class="d-lg-none d-xl-none">Twitter</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank">
                            <i class="fa fa-facebook-square"></i>
                            <p class="d-lg-none d-xl-none">Facebook</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank">
                            <i class="fa fa-instagram"></i>
                            <p class="d-lg-none d-xl-none">Instagram</p>
                        </a>
                    </li>
                </ul>
            </div>`
})
// export const Menu = Moon.component('menu', {
//   template: `<nav class="menu">
//                <ul>
//                  <li><router-link to="/">Home</router-link></li>
//                  <li><router-link to="/contact">Contact</router-link></li>
//                </ul>
//              </nav>`
// })
