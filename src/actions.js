// export const apiCall = (link) => {
// 	fetch(link).then(res => res.json());
// }

export const requestNews = () => (dispatch) => {
	dispatch({
		type: "REQUEST_NEWS_PENDING"
	})
	fetch('https://newsapi.org/v2/everything?q=fruits&apiKey=ec83633a1a744267bd9e06786610348a')
	.then(res => res.json())
	.then(data => dispatch({
		type: "REQUEST_NEWS_SUCCESS",
		payload: data
	}))
	.catch(e => dispatch({
		type: "REQUEST_NEWS_FAILED",
		payload: e
	}))
}
