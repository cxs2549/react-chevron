import Hamburger from 'hamburger-react'
import { useState, useRef } from 'react'
import Menu from './Menu'
import useOnClickOutside from 'use-onclickoutside'

const Burger = ({ links1, links2 }) => {
	const [ isOpen, setOpen ] = useState(false)
	const menuRef = useRef()
	useOnClickOutside(menuRef, () => setOpen(false))
	return (
		<div ref={menuRef} className="md:hidden">
			<Hamburger size={26} toggled={isOpen} toggle={setOpen} />
			<Menu open={isOpen} links1={links1} links2={links2} />
		</div>
	)
}

export default Burger
