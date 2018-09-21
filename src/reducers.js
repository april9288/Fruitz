const initialStateNews = {
	fruitNews: [],
	isPending: true
}

export const requestNews = (state=initialStateNews, action={}) => {
	switch(action.type) {
		case "REQUEST_NEWS_PENDING":
			return Object.assign({}, state, {isPending:true});
		case "REQUEST_NEWS_SUCCESS":
			return Object.assign({}, state, {fruitNews: action.payload, isPending:false});
		case "REQUEST_NEWS_FAILED":
			return Object.assign({}, state, {error: action.payload});
		default:
			return state;
	}

}