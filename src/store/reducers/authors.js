import * as actionTypes from "../actions/actionTypes"

const initialState = {
	authors: [],
	filteredAuthors: [],
	loading: true
}


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_AUTHORS:
			return {
				...state,
				authors: action.payload,
				filteredAuthors: action.payload,
				loading: false
			}

		case actionTypes.FILTER_AUTHORS:
			const filtered = state.authors.filter(auth => {
				return `${auth.first_name} ${auth.last_name}`
					.toLowerCase()
					.includes(action.payload)
			})
			
			return {
				...state,
				filteredAuthors: filtered
			}
		default:
			return state
	}
}


export default reducer