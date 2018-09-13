import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const cardstyle = {
  display: "flex",
  justifyContent: "space-evenly",
  margin: "1rem 0",
}

const StarRendering = (nextValue, prevValue, name) => {
  return <i className="fa fa-star" aria-hidden="true"></i>
}

const Card = ({fruitlist, ratingChanged, ratingValue}) => { 

  //ratingValue = {"item1" : 0}
  //let a = Object.values(ratingValue) => [0]
  //a[0] = 0
  let ratingValuefromObject = Object.values(ratingValue);

	return (
	  <div style={cardstyle}>
      <img src = {fruitlist.img} alt= '' width = {"50"} height = {"50"}/>
      <div>
      <h5 style={{padding: 0, margin: 0}}>{fruitlist.name}</h5>
      <StarRatingComponent 
                name={String(fruitlist.id)}
                starCount={5}
                value={ratingValuefromObject[0]}
                onStarClick={ratingChanged}
                renderStarIcon={()=>StarRendering()}
              />
      </div>
    </div>
  );
}

export default Card;


// <div className="dv-star-rating" style="display: inline-block; position: relative;">
// <input className="dv-star-rating-input" type="radio" name="1" id="1_5" value="5" style="display: none; position: absolute; margin-left: -9999px;" />
// <label className="dv-star-rating-star dv-star-rating-full-star" htmlFor="1_5" style="float: right; cursor: pointer; color: rgb(255, 180, 0);">
// <i className="fa fa-star" aria-hidden="true"></i></label>

// <input className="dv-star-rating-input" type="radio" name="1" id="1_4" value="4" style="display: none; position: absolute; margin-left: -9999px;" />
// <label className="dv-star-rating-star dv-star-rating-full-star" htmlFor="1_4" style="float: right; cursor: pointer; color: rgb(255, 180, 0);">
// <i className="fa fa-star" aria-hidden="true"></i></label>

// <input className="dv-star-rating-input" type="radio" name="1" id="1_3" value="3" style="display: none; position: absolute; margin-left: -9999px;" />
// <label className="dv-star-rating-star dv-star-rating-full-star" htmlFor="1_3" style="float: right; cursor: pointer; color: rgb(255, 180, 0);">
// <i className="fa fa-star" aria-hidden="true"></i></label>

// <input className="dv-star-rating-input" type="radio" name="1" id="1_2" value="2" style="display: none; position: absolute; margin-left: -9999px;" />
// <label className="dv-star-rating-star dv-star-rating-full-star" htmlFor="1_2" style="float: right; cursor: pointer; color: rgb(255, 180, 0);">
// <i className="fa fa-star" aria-hidden="true"></i></label>

// <input className="dv-star-rating-input" type="radio" name="1" id="1_1" value="1" style="display: none; position: absolute; margin-left: -9999px;" />
// <label className="dv-star-rating-star dv-star-rating-full-star" htmlFor="1_1" style="float: right; cursor: pointer; color: rgb(255, 180, 0);">
// <i className="fa fa-star" aria-hidden="true"></i></label>
// </div>