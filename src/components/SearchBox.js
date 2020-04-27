import React from 'react';


const SearchBox = ({ searchfield, searchChange }) => {//({})會抓取props的objects還有它的properties serachfield這邊用不到 之後會刪掉
	return(
	<div className='pa2'>
		<input className='pa2 ba b--green bg-lightest=blue'
		type='search' 
		placeholder='search robots'
		onChange={searchChange}//onChange是html event的一種 有給網址自己看
		/>
	</div>
		);
}

export default SearchBox;