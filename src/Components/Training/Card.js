import React from 'react';
import ReactStars from 'react-stars'

const cardstyle = {
  display: "flex",
  justifyContent: "space-evenly",
  margin: "1rem 0",
}

const Card = ({fruitlist, clickRateFruits, ratingChanged}) => {
	return (
	  <div style={cardstyle}>
      <img src = {fruitlist.img} alt= '' width = {"50"} height = {"50"}/>
      <div>
      <h5 style={{padding: 0, margin: 0}}>{fruitlist.name}</h5>
      <ReactStars
          count={5}
          onChange={(rate) => ratingChanged(rate, fruitlist.id)}
          size={35}
          edit={true}
          half = {false}
          color2={'#ffd700'} />
      </div>
    </div>
  );
}

export default Card;


