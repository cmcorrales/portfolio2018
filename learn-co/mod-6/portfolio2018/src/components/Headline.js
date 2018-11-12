import React from 'react';

let Headline = (props) => {
  return (
    <div className='headline hero'>
        <h1 className='largeText'>{props.largeText}</h1>
        <h2 className='mediumText'>{props.mediumText}</h2>
        <h3 className='smallText'>{props.smallText}</h3>
    </div>
  )
}

export default Headline;
