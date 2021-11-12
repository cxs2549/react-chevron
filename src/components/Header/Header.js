import styled from 'styled-components'
import tw from 'twin.macro'
import Burger from './Burger/Burger'
import Links from './Links/Links'
import Logo from './Logo/Logo'
import Search from './Search/Search'
import Topbar from './Topbar/Topbar'
import Headroom from 'react-headroom'

const StyledHeader = styled.header.attrs({ className: ' bg-white w-full' })`
& { 
// h1 { ${tw`text-4xl`} }
}
`
const Header = () => {
	return (
		<Headroom>
			<StyledHeader>
				<Topbar />
				<div
					id="container"
					className="py-3 max-w-6xl mx-auto px-4 md:px-8 xl:px-0 flex items-center justify-between h-full"
				>
					<Burger />
					<Logo />
					<Links />
					<Search />
				</div>
			</StyledHeader>
		</Headroom>
	)
}
export default Header
