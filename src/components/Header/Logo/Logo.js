import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../../assets/logo.png'

const StyledLogo = styled.div.attrs({ className: '' })`
a {
	position: absolute;
	left: 50%;
	transform : translateX(-50%);
	@media (min-width: 1024px) {
		position: relative;
		left: 0;
		transform : translateX(0);
	}
}
background-image: url(${logo});
height: 55px;
width: 50px;
background-size: contain;
`
const Logo = () => {
	return (
		<Link to="/">
			<StyledLogo />
		</Link>
	)
}
export default Logo
