import React from 'react';

const Card = ({fruitlist, click}) => {
	return (
	  <div className="card card_fruits">
          <div className="card-header card-header-text card-header-primary">
            <div className="card-text">
              <h4 className="card-title">{fruitlist.name}</h4>
            </div>
          </div>
          <div className="card-body">
              {/*<img src = {fruitlist.img} alt= '' />*/}
<form>
<div className="rate_form">
<div className="form-check form-check-radio form-check-inline">
  <label className="form-check-label">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onClick={()=>click([fruitlist.id, 'none'])}/> None
    <span className="circle">
        <span className="check"></span>
    </span>
  </label>
</div>
<div className="form-check form-check-radio form-check-inline">
  <label className="form-check-label">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onClick={()=>click([fruitlist.id, 1])}/> 1
    <span className="circle">
        <span className="check"></span>
    </span>
  </label>
</div>
<div className="form-check form-check-radio form-check-inline">
  <label className="form-check-label">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" onClick={()=>click([fruitlist.id, 2])}/> 2
    <span className="circle">
        <span className="check"></span>
    </span>
  </label>
</div>
<div className="form-check form-check-radio form-check-inline">
  <label className="form-check-label">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" onClick={()=>click([fruitlist.id, 3])}/> 3
    <span className="circle">
        <span className="check"></span>
    </span>
  </label>
</div>
<div className="form-check form-check-radio form-check-inline">
  <label className="form-check-label">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" onClick={()=>click([fruitlist.id, 4])}/> 4
    <span className="circle">
        <span className="check"></span>
    </span>
  </label>
</div>
<div className="form-check form-check-radio form-check-inline">
  <label className="form-check-label">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option6" onClick={()=>click([fruitlist.id, 5])}/> 5
    <span className="circle">
        <span className="check"></span>
    </span>
  </label>
</div>
</div>
</form>
          </div>
      </div>
		);
}

export default Card;


