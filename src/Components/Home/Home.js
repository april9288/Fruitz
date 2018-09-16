import React from 'react';
import HomeComp1 from './HomeComp1';
import HomeComp2 from './HomeComp2';

const style = {
	display: "inline-grid",
	marginBottom: "75px",
	marginTop: "70px",
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

const Home = () => {

	return (
		<div>
			<div style={topbar}>
					<p style={headtext}>Fruitz</p>
			</div>
			<div style = {style}>
				<HomeComp1 />
				<HomeComp2 />
			</div>
		</div>
		);
}

export default Home;