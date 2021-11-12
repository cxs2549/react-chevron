import styled from 'styled-components'
import { useSelector } from 'react-redux'
import logo from '../../assets/footer-logo.png'
const StyledFooter = styled.div.attrs({ className: 'py-12 px-4 md:px-8 xl:px-0' })`
    background-color: hsl(225.5, 79%, 30.6%);
    color: white;
`

const Footer = () => {
	const footerLinks = useSelector((state) => state.footerLinks)
	const siteLinks = useSelector((state) => state.siteLinks)
	return (
		<StyledFooter>
			<div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
				<div className="mx-auto">
					<img src={logo} alt="" />
				</div>
				<p className="text-center font-medium text-lg max-w-xl">
					Chevron has always put people at the center of the energy conversation. Because
					we understand that the well-being of people everywhere depends on energy. Energy
					that is affordable, reliable and ever-cleaner.
				</p>
				<div className="flex flex-col items-center">
					<h4 className="font-bold text-xl mb-1">about us</h4>
					<ul className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4">
						{footerLinks.map((link) => (
							<li
								key={link.link}
								className="text-center font-semibold hover:underline"
							>
								<a href="#" className="text-white">
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col items-center mt-4">
					<h4 className="font-bold text-xl mb-5 md:mb-6">connect with us</h4>
					<div className="flex items-center gap-6 text-xl">
						<i className="fa fa-facebook cursor-pointer" aria-hidden="true" />
						<i className="fa fa-instagram cursor-pointer" aria-hidden="true" />
						<i className="fa fa-twitter cursor-pointer" aria-hidden="true" />
						<i className="fa fa-youtube cursor-pointer" aria-hidden="true" />
						<i className="fa fa-linkedin cursor-pointer" aria-hidden="true" />
						<i className="fa fa-envelope cursor-pointer" aria-hidden="true" />
					</div>
				</div>
				<div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center text-xs mt-4">
					<p className="text-center">
						© 2021 CxS Development for Chevron Corporation. All rights reserved.
					</p>
					<ul className="flex items-center gap-4">
						{siteLinks.map((link) => (
							<li key={link.name}>
								<a href={link.link} className="text-white">
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</StyledFooter>
	)
}
export default Footer
