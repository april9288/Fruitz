import React from 'react';
import Cardlist from './Cardlist';
import Snack from './Snack';
import searchIcon from '../Photo/search.png';
import CircularProgress from '@material-ui/core/CircularProgress';

const style = {
	marginBottom: "75px",
	marginTop: "70px",
	width: "100%",
    display: "inline-table",
    justifyContent: "center",
    maxWidth: 400,
}

const searchStyle = {
    width: "95%",
    padding: "1rem 0",
    border: 'none',
    margin : "0.5rem 0",
    boxSizing: "border-box",
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "white",
    backgroundImage: "url(" + searchIcon + ")",
    backgroundPosition: "10px 10px", 
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    paddingLeft: 60
}

const topbar = {
    background: "#DA4453",  /* fallback for old browsers */
    background: "-webkit-linear-gradient(to left, #89216B, #DA4453)",  /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to left, #89216B, #DA4453)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    top: 0,
    position: "fixed",
    width: "100%",
    zIndex: 100,
    height: 66
}

const Training = ({searchInput, fruitlist, ratingChanged, snackClose, snackOpener}) => {

	return (
		<div>
			<div style={topbar}>
				<input type="search" placeholder="Search" style = {searchStyle} onChange={searchInput}/>
			</div>
			<div style={style}>	
			{
         		 (fruitlist.length >= 1) ? <Cardlist fruitlist={fruitlist} ratingChanged={ratingChanged}/> : <CircularProgress color="secondary" thickness={3} size={50}/>
        	}	
            <Snack snackClose={snackClose} snackOpener={snackOpener}/>  
			</div>
		</div>
		);
}

export default Training;
