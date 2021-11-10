import styled from 'styled-components'
import Card from './Card/Card'
import Hero from './Hero/Hero'
import card1 from '../../assets/cards/card-1.png'
import card2 from '../../assets/cards/card-2.png'

const cards = [
	{
		title: 'advancing a lower carbon future for us all',
		subtitle: `see how we're getting there`,
		image: card1
	},
	{
		title: 'developing renewable fuel feedstocks',
		subtitle: `learn about our investment`,
		image: card2
	}
]

const StyledHome = styled.div`
	p {
        font-weight: 400;
    }
`
const Home = () => {
	return (
		<StyledHome>
			<Hero />
			<div className="md:grid md:grid-cols-2 max-w-4xl xl:gap-8 mx-auto">
				{cards.map((card) => <Card key={card.title} {...card} />)}
			</div>
		</StyledHome>
	)
}
export default Home
