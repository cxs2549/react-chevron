import styled from 'styled-components'
import tw from 'twin.macro'
import Burger from './Burger/Burger'
import Logo from './Logo/Logo'
import Search from './Search/Search'
const StyledHeader = styled.header.attrs({ className: 'h-20 bg-white w-full shadow' })`
& { 
// h1 { ${tw`text-4xl`} }
}
`
const Header = () => {
	return (
		<StyledHeader>
			<div id="container" className="max-w-6xl mx-auto px-4 flex items-center justify-between h-full">
				<Burger />
				<Logo />
				<Search />
			</div>
		</StyledHeader>
	)
}
export default Header
