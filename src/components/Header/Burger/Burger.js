import Hamburger from 'hamburger-react'
import { useState, useRef } from 'react'
import Menu from './Menu'
import CokeMenu from './CokeMenu'
import useOnClickOutside from 'use-onclickoutside'

const Burger = () => {
	const [ isOpen, setOpen ] = useState(false)
	const menuRef = useRef()
	const handleOpen = () => {
		setOpen(!isOpen)
		document.body.classList.toggle('stop-flow')
	}
	const handleClose = () => {
		setOpen(false)
		document.body.classList.remove('stop-flow')
	}
	useOnClickOutside(menuRef, handleClose)
	return (
		<div ref={menuRef} className="lg:hidden">
			<Hamburger size={26} toggled={isOpen} toggle={handleOpen} />
			<CokeMenu open={isOpen} />
		</div>
	)
}

export default Burger
