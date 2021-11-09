import styled from 'styled-components'
import tw from 'twin.macro'
const StyledMenu = styled.div.attrs({ className: 'p-8'  })`
position: fixed;
top: 80px;
left: 0;
/* height: 100%; */
width: 100%;
background: #F1F1F1;
opacity: ${props => props.open ? '1' : '0'};
transition: opacity 0.5s ease-in-out;
li {
    color: #2C9EEB;
    cursor: pointer;
    &:hover {
        color: #0E50A2;
    }
}
`
const Menu = ({open, links, links2}) => {
return (
<StyledMenu open={open}>
    <ul className="flex flex-col gap-4 border-b pb-5">
        {links.map(link => (
            <li key={link.name} className="font-medium text-lg capitalize">
                <a href={link.url}>{link.name}</a>
            </li>
        ))}
    </ul>
    <ul className="flex flex-col gap-4 mt-5">
        {links2.map(link => (
            <li key={link.name} className="font-medium text-lg capitalize">
                <a href={link.url}>{link.name}</a>
            </li>
        ))}
    </ul>
</StyledMenu>
)
}
export default Menu