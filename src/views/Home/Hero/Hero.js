import styled from 'styled-components'
import hero from '../../../assets/hero.png'

const StyledHero = styled.div.attrs({ className: '' })`

    
    
    #text {
        button {
		background-color: var(--color-primary);
        &:hover {
            background-color: hsl(225.2, 73.7%, 49.4%);
        }
	}
	h1 {
		color: var(--color-primary);
        opacity: .9;
	}
    
    span {
        color: var(--color-primary);
        &:hover {
            color: hsl(225.2, 73.7%, 49.4%);
        }
    }
    }
`
const Hero = () => {
	return (
		<StyledHero>
			<img src={hero} alt="" className="xl:hidden" />
			<div id="text" className="max-w-6xl mx-auto px-4 md:px-8 xl:px-0 py-10 xl:pt-0">
				<img src={hero} alt="" className="hidden xl:block mb-8 rounded" />

				<div className="flex flex-col items-center gap-2">
					<h1 className="font-bold  text-center max-w-sm md:max-w-xl mx-auto text-3xl">
						chevron sets net zero aspiration and new GHG intensity target
					</h1>
					<p className=" text-center font-medium text-lg">
						Learn more in our updated climate change <br /> resilience report
					</p>
					<button className="mt-4 text-white font-semibold px-8 py-3 rounded mx-auto cursor-pointer ">
						read the press release
					</button>
					<a href="/" className="flex items-center gap-2 mt-2">
						<span className="font-semibold border-b border-blue-700">
							download the updated report
						</span>
					</a>
				</div>
			</div>
		</StyledHero>
	)
}
export default Hero
