import React from 'react';
// import ResultComp1 from './ResultComp1';
import ResultComp2 from './ResultComp2';
import ResultComp3 from './ResultComp3';
import CircularProgress from '@material-ui/core/CircularProgress';

const DiscoverResult = ({ result, ratingChanged, lastrate }) => {

  const new_list = result.map((res, i) => {
    return <ResultComp2 key = {res.name} 
                      result = {res}
                      />;});


  return (
    <div>
    {
      (result.length >= 1) ? (new_list) : <CircularProgress color="secondary" thickness={3} size={50}/>
    }
    {
      (result.length >= 1) ? <ResultComp3 ratingChanged={ratingChanged} lastrate={lastrate}/> : <span></span>
    }
    </div>
  );
}


export default DiscoverResult;