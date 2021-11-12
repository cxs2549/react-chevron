import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Item from './Item'

const StyledMenu = styled.div`
	position: absolute;
	z-index: 100;
	top: 78px;
	left: calc(-100vw);
	right: 0;
	max-width: 64rem;
	width: 100vw;
	height: calc(100vh - 64px);
	background-color: #F1F1F1;
	transition: transform 600ms;
	transform: translate3d(100vw, 0, 0);
	transform: ${({ open }) => (open ? 'translate3d(100vw, 0, 0)' : 'translate3d(0, 0, 0)')};
	pointer-events: ${(props) => (props.open ? 'click' : 'none')};
	overflow-y: scroll;

	.my-node-enter {
		opacity: 0;
		max-height: 0;
	}
	.my-node-enter-active {
		opacity: 1;
		max-height: 1000px;
		transition: all 400ms;
	}
	.my-node-exit {
		opacity: 1;
		max-height: 10000px;
	}
	.my-node-exit-active {
		opacity: 0;
		max-height: 0;
		transition: all 400ms;
	}

	.active {
		background-color: red;
		color: white;
	}
	
`
const Menu = ({ open, close }) => {
	const links1 = useSelector((state) => state.links1)
	const links2 = useSelector((state) => state.links2)
	
	return (
		<StyledMenu open={open} className="border-b">
			<ul className="flex flex-col gap-4 px-4 py-8 text-xl border-b">
				{links1.map((link, i) => (
					<Item key={link.name} link={link} />
				))}
			</ul>
			<ul className="flex flex-col gap-4 px-4 py-8 text-xl border-b">
				{links2.map((link, i) => (
					<Item key={link.name} link={link} />
				))}
			</ul>
			
		</StyledMenu>
	)
}
export default Menu
