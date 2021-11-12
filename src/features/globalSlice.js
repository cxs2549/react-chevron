import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	links1: [
		{
			name: 'project portfolio',
			link: '/',
			links: [ 'link1', 'link2' ]
		},
		{
			name: 'operations',
			link: '/operations',
			links: [ 'link1', 'link2' ]
		},
		{
			name: 'technology',
			link: '/technology',
			links: [ 'link1', 'link2' ]
		},
		{
			name: 'sustainability',
			link: '/sustainability',
			links: [ 'link1', 'link2' ]
		},
		{
			name: 'investors',
			link: '/investors',
			links: [ 'link1', 'link2' ]
		},
		{
			name: 'about',
			link: '/about',
			links: [ 'link1', 'link2' ]
		}
	],
	links2: [
		{
			name: 'media',
			link: '/media',
			links: [ 'link1', 'link2' ]
		},
		{
			name: 'careers',
			link: '/careers',
			links: [ 'link1', 'link2' ]
		},
		{
			name: 'chevron stations',
			link: '/chevron_stations',
			links: [ 'link1', 'link2' ]
		},
		{
			name: 'texaco stations',
			link: '/texaco_stations',
			links: [ 'link1', 'link2' ]
		},
		{
			name: 'credit card/bill pay',
			link: '/credit_card-bill_pay',
			links: [ 'link1', 'link2' ]
		},
		{
			name: 'worldwide',
			link: '/worldwide',
			links: [ 'link1', 'link2' ]
		}
	],
	footerLinks: [
		{
			name: 'investors',
			link: '/investors'
		},
		{
			name: 'media',
			link: '/media'
		},
		{
			name: 'careers',
			link: '/careers'
		},
		{
			name: 'stories',
			link: '/stories'
		},
		{
			name: 'worldwide',
			link: '/worldwide'
		},
		{
			name: 'contact',
			link: '/contact'
		}
	],
	siteLinks: [
		{
			name: 'site map',
			link: '/site_map'
		},
		{
			name: 'accessibility',
			link: '/accessibility'
		},
		{
			name: 'terms of use',
			link: '/terms_of_use'
		},
		{
			name: 'privacy policy',
			link: '/privacy_policy'
		}
	]
}

const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {}
})

export default globalSlice.reducer
