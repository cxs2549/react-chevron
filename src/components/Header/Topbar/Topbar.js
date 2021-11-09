import styled from 'styled-components'
const StyledTopbar = styled.div.attrs({ className: '' })`
background-color: hsl(225.2, 73.7%, 29.4%);
`


const Topbar = () => {
	return (
		<StyledTopbar className=" text-white text-sm font-medium">
			<div
				id="container"
				className="py-2 hidden max-w-6xl mx-auto px-4 md:px-8 xl:px-0 md:flex items-center justify-between h-full "
			>
				<nav className="flex items-center gap-8">
                    <a href="/">media</a>
                    <a href="/">careers</a>
                </nav>
                <nav>
                    <a href="/">2021 annual report</a>
                </nav>
			</div>
		</StyledTopbar>
	)
}
export default Topbar
