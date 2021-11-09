import Hamburger from 'hamburger-react'
import { useState, useRef } from 'react'
import Menu from './Menu'
import useOnClickOutside from 'use-onclickoutside'

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

const Burger = () => {
	const [ isOpen, setOpen ] = useState(false)
	const menuRef = useRef()
	useOnClickOutside(menuRef, () => setOpen(false))
	return (
		<div ref={menuRef}>
			<Hamburger toggled={isOpen} toggle={setOpen} />
			<Menu open={isOpen} links={links1} links2={links2} />
		</div>
	)
}

export default Burger
