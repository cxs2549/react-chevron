import { AiOutlineSearch, AiOutlineClose, AiOutlineArrowRight } from 'react-icons/ai'
import { useState, useRef } from 'react'
import styled from 'styled-components'
import useOnClickOutside from 'use-onclickoutside'
import Logo from '../Logo/Logo'

const StyledSearch = styled.div.attrs({ className: '' })`

#searchbar {
	top: 0;
	height: 72px;
	@media (min-width: 768px) {
		top: 36px;
		height: 76px;
	}
}

`
const Search = () => {
	const [ showSearch, setShowSearch ] = useState(false)
	const [ searchInput, setSearchInput ] = useState('')
	const searchRef = useRef(null)
	const searchbarRef = useRef(null)
	const handleShowSearch = () => {
		setShowSearch(true)
		setTimeout(() => {
			searchRef.current.focus()
		}, 800)
	}
	const handleCloseSearch = () => {
		setShowSearch(false)
		setTimeout(() => {
			setSearchInput('')
		}, 800)
	}
	const handleBlur = () => {
		setSearchInput('')
		searchRef.current.focus()
	}

	useOnClickOutside(searchbarRef, handleCloseSearch)
	return (
		<StyledSearch className="">
			<div onClick={handleShowSearch} className="cursor-pointer">
				<AiOutlineSearch size={29} />
			</div>
			<div
				id="searchbar"
				ref={searchbarRef}
				className={`${showSearch
					? 'opacity-100 pointer-events-all'
					: 'opacity-0 pointer-events-none'} transition-all duration-500 absolute bg-white w-full left-0 right-0 top-0  z-10`}
			>
				<div className="max-w-6xl mx-auto flex items-center gap-2 h-full px-4 md:px-8 xl:px-0 justify-end">
					<div className="hidden md:block">
						<Logo />
					</div>
					<div className="relative w-full flex justify-end max-w-xl">
						<div className="absolute left-4 top-1/2 transform -translate-y-1/2">
							<AiOutlineSearch size={24} />
						</div>
						<input
							type="search"
							placeholder="What can we help you find?"
							ref={searchRef}
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
							className="pl-12 border h-12 rounded w-full rounded-full max-w-xl ml-auto"
						/>
						{searchInput.length > 0 && (
							<div
								onClick={handleBlur}
								className="absolute right-12 top-1/2 transform -translate-y-1/2 rounded-full h-6 flex items-center justify-center w-6 bg-gray-300 cursor-pointer"
							>
								<AiOutlineClose size={16} color="#fff" />
							</div>
						)}
						{searchInput.length > 0 && (
							<div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
								<AiOutlineArrowRight size={24} />
							</div>
						)}
					</div>
					<div onClick={handleCloseSearch}>
						<AiOutlineClose size={29} className="cursor-pointer" />
					</div>
				</div>
			</div>
		</StyledSearch>
	)
}
export default Search
