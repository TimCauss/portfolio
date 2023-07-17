import React from 'react';

const Card = ({id, name, email}) => {

    const imageUrl = `https://robohash.org/${id}?200x200`

    return (
       <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={imageUrl} alt="Robots Head Portrait" />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
       </div>
    );
};

export default Card;