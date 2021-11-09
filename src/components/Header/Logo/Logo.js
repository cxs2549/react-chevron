import styled from 'styled-components'
import logo from '../../../assets/logo.png'
const StyledLogo = styled.div.attrs({ className: '' })`
background-image: url(${logo});
height: 55px;
width: 50px;
background-size: contain;
position: absolute;
left: 50%;
transform : translateX(-50%);
`
const Logo = () => {
	return <StyledLogo />
}
export default Logo
