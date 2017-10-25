import Moon from 'moonjs'
import MoonRouter from 'moon-router'

Moon.use(MoonRouter)

export const router = new MoonRouter({
  default: '/',
  map: {
    '/': 'Home',
    '/contact': 'Contact',
    '/template': 'Template',
    '/tutorial-components': 'TutorialComponents',
    '/landing-page': 'Landing',
    '/login-page': 'Login',
    '/profile-page': 'Profile',
    '/*': 'NotFound'
  }
})
