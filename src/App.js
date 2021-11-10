import { Fragment } from 'react'
import { useRoutes } from 'react-router'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './views/Home/Home'

const links1 = [
	{
		name: 'project portfolio',
		link: '/'
	},
	{
		name: 'operations',
		link: '/operations'
	},
	{
		name: 'technology',
		link: '/technology'
	},
	{
		name: 'sustainability',
		link: '/sustainability'
	},
	{
		name: 'investors',
		link: '/investors'
	},
	{
		name: 'about',
		link: '/about'
	}
]
const links2 = [
	{
		name: 'media',
		link: '/media'
	},
	{
		name: 'careers',
		link: '/careers'
	},
	{
		name: 'chevron stations',
		link: '/chevron_stations'
	},
	{
		name: 'texaco stations',
		link: '/texaco_stations'
	},
	{
		name: 'credit card/Bill pay',
		link: '/credit_card-bill_pay'
	},
	{
		name: 'worldwide',
		link: '/worldwide'
	}
]

const routes = [
	{path: '/', element: <Home />},
]


const App = () => {
	const element = useRoutes(routes)
	return (
		<Fragment>
			<Header links1={links1} links2={links2} />
			<main>
				{element}
			</main>
			<Footer />
		</Fragment>
	)
}

export default App
