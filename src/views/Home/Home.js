import styled from 'styled-components'
import hero from '../../assets/hero.png'

const StyledHome = styled.div.attrs({ className: '' })`
	button {
		background-color: var(--color-primary);;
	}
	h1 {
		color: var(--color-primary);
	}
`
const Home = () => {
	return (
		<StyledHome>
			<img src={hero} alt="" className="xl:hidden" />
			<div className="max-w-6xl mx-auto px-4 md:px-8 xl:px-0 py-8 xl:pt-0">
				<img src={hero} alt="" className="hidden xl:block mb-8" />

				<div className="flex flex-col items-center gap-8">
					<h1 className="font-bold  text-center max-w-sm md:max-w-xl mx-auto text-3xl">
						chevron sets net zero aspiration and new GHG intensity target
					</h1>
					<p className=" text-center font-medium text-lg">
						Learn more in our updated climate change resilience
						report
					</p>
					<button className=" text-white font-semibold px-8 py-3 rounded mx-auto ">
						read the press release
					</button>
					<a href="/" className="text-blue-700 font-bold flex items-center gap-2">
						<p>download the updated report</p>
						<i className="fa fa-link" aria-hidden="true" />
					</a>
				</div>
			</div>
		</StyledHome>
	)
}
export default Home
