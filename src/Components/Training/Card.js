import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const cardstyle = {
  display: "flex",
  justifyContent: "space-evenly",
  margin: "1rem 0",
}

const StarRendering = (nextValue, prevValue, name) => {
  return <i style={{fontSize: "1.7rem"}} className="fa fa-star" aria-hidden="true"></i>
}

const Card = ({fruitlist, ratingChanged}) => { 

	return (
	  <div style={cardstyle}>
      <img src = {fruitlist.img} alt= '' width = {"50"} height = {"50"}/>
      <div>
      <h5 style={{padding: 0, margin: 0}}>{fruitlist.name}</h5>
      <StarRatingComponent 
                name={String(fruitlist.id)}
                starCount={5}
                value={fruitlist.rate}
                onStarClick={ratingChanged}
                renderStarIcon={()=>StarRendering()}
              />
      </div>
    </div>
  );
}

export default Card;