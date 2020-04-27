import React from 'react';

const Scroll = (props) => {//每個props都會有children div的style也要加上{}才能產生css的效果,overflowY在css是overflow-y
	return (
		<div style={{ overflow: 'scroll', border:'5px solid black', height:'800px'}}>
			{props.children}
		</div>
   );
};

export default Scroll;//這功能主要就是就可以滾動卡片看機器人啦,react就操縱DOM,現在狀態是什麼? 你要什麼狀態? 然後快速反應