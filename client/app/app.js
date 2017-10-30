import Moon from 'moonjs'
import { router } from './router'
import { TopBar, Logo, Menu } from './modules/index'
import { Home, Contact, NotFound, Template, TutorialComponents, Landing, Login, Profile } from './pages/index'
import '../scss/style.scss'

window.onload = () => {
	const app = new Moon({
		el: '#app',
		router
	})
}
