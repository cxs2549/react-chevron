import styled from 'styled-components'
const StyledCard = styled.div.attrs({ className: 'flex flex-col items-center' })`
h3 {
    color: var(--color-primary);
}
img {
    min-height: 540px;
    object-fit: cover;
}
`
const Card = ({image, title, subtitle}) => {
	return (
		<StyledCard>
			<img src={image} alt="" />
			<div className="flex flex-col items-center gap-1 py-6 pb-12">
				<h3 className="font-bold text-xl text-center">
					{title}
				</h3>
				<a href="/" className="flex items-center gap-2 mt-2">
					<span className="font-semibold border-b border-blue-700">
						{subtitle}
					</span>
				</a>
			</div>
		</StyledCard>
	)
}
export default Card
