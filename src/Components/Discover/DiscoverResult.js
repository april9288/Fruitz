import React from 'react';
import Result from './Result';
import CircularProgress from '@material-ui/core/CircularProgress';

const DiscoverResult = ({ result }) => {

  const new_list = result.map((res, i) => {
    return <Result key = {res.name} 
                      result = {res}
                      />;});

  return (
    <div>
    {
      (result) ? (new_list) : <CircularProgress color="secondary" thickness={3} size={100}/>
    }
    </div>
  );
}


export default DiscoverResult;