import React from 'react';
import ResultComp2 from './ResultComp2';
import ResultComp3 from './ResultComp3';
import Snack from './SnackDiscover';
import CircularProgress from '@material-ui/core/CircularProgress';



const DiscoverResult = ({ result, ratingChanged, lastrate, snackClose, snackOpenerD }) => {

const new_list = result.map((res, i) => {
    return <ResultComp2 key = {res.name} 
                        result = {res}
                        />;
});

// const resultsample = [
// {name: "Cantaloupe", score: 15, img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Banana/100_100.jpg"},
// {name: "Cactus fruit", score: 11.966666666666667, img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Cactus%20fruit/16_100.jpg"},
// {name: "Banana", score: 8.966666666666667, img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Banana/100_100.jpg"},
// {name: "Cherry", score: 8, img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Cherry%201/321_100.jpg"},
// {name: "Avocado", score: 5.966666666666667, img: "https://raw.githubusercontent.com/Horea94/Fruit-Images-Dataset/master/Test/Avocado/45_100.jpg"},
// ];

  return (
    <div>
    {
      (result.length >= 1) ? (new_list) : <CircularProgress color="secondary" thickness={3} size={50}/>
    }
    {
      (result.length >= 1) ? <ResultComp3 ratingChanged={ratingChanged} lastrate={lastrate}/> : <span></span>
    }
    {
      (result.length >= 1) ? <Snack snackClose={snackClose} snackOpenerD={snackOpenerD}/> : <span></span>
    }
    </div>
  );
}


export default DiscoverResult;