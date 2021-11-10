import styled from 'styled-components'
import tw from 'twin.macro'
const StyledLinks = styled.div.attrs({ className: 'hidden md:flex gap-8'  })`
a {
    font-size: 17px;
}
`
const Links = ({links1}) => {
return (
<StyledLinks>
    {links1.map((link, index) => (
        <a key={index} href={link.url} className=" font-medium cursor-pointer hover:text-red-600 opacity-80 hover:opacity-100">{link.name}</a>
    ))}
</StyledLinks>
)
}
export default Links