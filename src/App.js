import { Fragment } from 'react'
import { useRoutes } from 'react-router'
import Header from './components/Header/Header'
import Home from './views/Home/Home'
import Stories from './views/Stories/Stories'
import Footer from './components/Footer/Footer'

const routes = [
	{path: '/', element: <Home />},
	{path: '/stories/*', element: <Stories />},
]


const App = () => {
	const element = useRoutes(routes)
	return (
		<Fragment>
			<Header />
			<main>
				{element}
			</main>
			<Footer />
		</Fragment>
	)
}

export default App
