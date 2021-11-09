import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { useState, useRef } from 'react'
import styled from 'styled-components'
import useOnClickOutside from 'use-onclickoutside'

const StyledSearch = styled.div.attrs({ className: '' })`

`
const Search = () => {
	const [ showSearch, setShowSearch ] = useState(false)
	const searchRef = useRef(null)
    const searchbarRef = useRef(null)
	const handleShowSearch = () => {
		setShowSearch(true)
		setTimeout(() => {
            searchRef.current.focus()
        }, 800)
	}

    useOnClickOutside(searchbarRef, () => {
        setShowSearch(false)
    })
	return (
		<StyledSearch>
			<div onClick={handleShowSearch} className="cursor-pointer">
				<AiOutlineSearch size={32} />
			</div>
			<div
				id="searchbar"
                ref={searchbarRef}
				className={`${showSearch
					? 'opacity-100 pointer-events-all'
					: 'opacity-0 pointer-events-none'} transition-all duration-500 absolute bg-white w-full left-0 right-0 top-0 h-20 px-4 flex items-center gap-4`}
			>
                <div className="absolute left-8">
                    <AiOutlineSearch size={24} />
                </div>
				<input
					type="search"
					placeholder="What can we help you find?"
					ref={searchRef}
					className="pl-12 border h-12 rounded w-full"
				/>
				<div onClick={() => setShowSearch(false)}>
					<AiOutlineClose size={32} className="cursor-pointer" />
				</div>
			</div>
		</StyledSearch>
	)
}
export default Search
