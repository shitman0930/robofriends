import React from 'react';

const Card = ({name, email, id }) => {
	return (//要先npm install tachyons才能用 tc就text center bg就background dib就div br就border pa就padding ma就margin grow不知道
		<div className='tc bg-light-green dib br pa3 ma2 grow bw0.1 shadow-5'>
			<img alt='robots' src= {`https://robohash.org/${id}?200x200`}  />
		<div>
	</div>
		<h2>{name}</h2>
		<p>{email}</p>
	</div>
	);//沒加上{}會沒小果 因為這是JS
}

export default Card;