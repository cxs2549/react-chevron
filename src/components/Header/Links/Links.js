import styled from 'styled-components'
import {useSelector} from 'react-redux'

const StyledLinks = styled.nav.attrs({ className: 'hidden lg:flex gap-8'  })`
a {
    font-size: 17px;
}
`
const Links = () => {
    const links1 = useSelector(state => state.links1)
return (
<StyledLinks>
    {links1.map((link, index) => (
        <a key={index} href={link.url} className="whitespace-nowrap font-medium cursor-pointer hover:text-red-600 opacity-80 hover:opacity-100">{link.name}</a>
    ))}
</StyledLinks>
)
}
export default Links