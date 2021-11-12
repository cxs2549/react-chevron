import { AiFillCaretDown } from 'react-icons/ai'
import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

const Item = ({ link }) => {
	const arrowRef = useRef(null)
	const [ showProducts, setShowProducts ] = useState(false)
	const handleShowProducts = (i) => {
		setShowProducts(!showProducts)
		arrowRef.current.classList.toggle('rotate-180')
	}
	return (
		<div className="relative transition-colors duration-300  hover:bg-blue-400 hover:text-white py-2 px-4 rounded-lg cursor-pointer text-blue-800">
			<div
				className=" flex items-center justify-between font-medium   "
				onClick={handleShowProducts}
			>
				{link.name}
				<div ref={arrowRef} className="transform transition-transform duration-400">
					<AiFillCaretDown />
				</div>
			</div>

			<CSSTransition unmountOnExit in={showProducts} timeout={400} classNames="my-node">
				<div className="py-3 px-4 capitalize rounded flex flex-col gap-y-2 text-base">
					{link.links.map((link, i) => (
						<div className="hover:underline cursor-pointer">{link}</div>
					))}
				</div>
			</CSSTransition>
		</div>
	)
}

export default Item
