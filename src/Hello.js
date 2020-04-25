import React, { Component } from 'react';//從哪個檔案進來
import './Hello.css'

const Hello = (props) => {//下面的功能跟這個出來的結果一樣
	return (//因為有2個結果[h1,p]所以沒()就會出錯 因為return只會回應一個結果 所以用()包成1個
		<div className='f1 tc'>
         <h1>Hello World</h1>
         <p>{props.greeting}</p>
        </div>
        )
}

// class Hello extends Component {
// 	render() {//render就是要回應什麼
// 		return (//因為有2個結果[h1,p]所以沒()就會出錯 因為return只會回應一個結果 所以用()包成1個
// 		<div className='f1 tc'>
//          <h1>Hello World</h1>
//          <p>{this.props.greeting}</p>
//         </div>
//         )//class f1(font1) tc(text center)的意思 
//         // 瀏覽器的console會有錯 是因為這不是html而是叫做'Jsx'的格式 
//         // react是一種組成的概念 每個零件都是獨立的個體 都有功能跟造型
//         // 每個零件各自獨立 所以只在乎自己 其他的不會有關連 所以打破了慣例(html-text css-style js-action)
//         // jsx並不是html 而是虛擬DOM 如果有真的DOM 電腦自己會參考虛擬的然後改變真的DOM
//         // 所以react才會跑很快!
//         // this(代表Hello)有個叫greeting的屬性(props就是properties)
// 	}
// }

export default Hello;//從哪個檔案出去展示