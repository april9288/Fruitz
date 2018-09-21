import React, {Component} from 'react';
import AppNewsCard from './AppNewsCard';
import CircularProgress from '@material-ui/core/CircularProgress';

import {connect} from 'react-redux';
import {requestNews} from '../../actions';

const style = {
	display: "inline-flex",
    marginBottom: 75,
    marginTop: 70,
    flexWrap: "wrap",
    justifyContent: "space-evenly",
}

const topbar = {
	// backgroundColor: "#f50057",
	background: "#DA4453",  /* fallback for old browsers */
	background: "-webkit-linear-gradient(to left, #89216B, #DA4453)",  /* Chrome 10-25, Safari 5.1-6 */
	background: "linear-gradient(to left, #89216B, #DA4453)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    top: 0,
    position: "fixed",
    width: "100%",
    zIndex: 100,
    height: 66,
}

const headtext = {
    color: "white",
    fontFamily: "'Baloo Tammudu'",
    margin: "1px 0",
    fontSize: "1.8rem",
    letterSpacing: "0.2rem",
    textAlign: "left",
    padding: "5px 0 0 30px",
}

const mapStateToProps = (state) => {
  return {
    fruitNews : state.fruitNews,
    isPending: state.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestNews: () => dispatch(requestNews())
  }
}

class Home extends Component {

componentDidMount() {
	this.props.onRequestNews();
};

newsListFunc = (fruitNews, isPending) => {
	if (!isPending) {
		const newsList = fruitNews.articles.map((onenews, i) => {
			let r1 = Math.floor(Math.random() * 255);
			let r2 = Math.floor(Math.random() * 255);
			let r3 = Math.floor(Math.random() * 255);
			let r = [r1, r2, r3];
			return <AppNewsCard key = {onenews.url} 
						        onenews = {onenews}
						        rgb = {r}
						        />;
		});
	return newsList.sort((a, b) => 0.5 - Math.random());
	}
}

render(){
	const {fruitNews, isPending} = this.props;
	return (
		<div>
			<div style={topbar}>
					<p style={headtext}>Fruitz</p>
			</div>
			<div style = {style}>
			{
				(!isPending) ? this.newsListFunc(fruitNews, isPending) : <CircularProgress color="secondary" thickness={3} size={50}/>
			}
			</div>
		</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);