import React from 'react';//有了react import from新語法就能使用了
import ReactDOM from 'react-dom';//react可以用在許多方面(手機app也可以用 VR也行) 這邊是用在建網站 所以是dom(document)
import './index.css';//也能直接加css
import Card from './Card';//開頭一定要大寫 ,要從哪個檔案進來
import * as serviceWorker from './serviceWorker';
import 'tachyons';//去json確認有之後 在這邊加上 接著去Hello.js
import {robots} from './robots';//如果有多個結果要輸出就要加上{} {}裡面可以加上robots, cats就會特定輸出cats一個結果


ReactDOM.render(
			<div>
			     <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
			     <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
			     <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
			</div>
	, document.getElementById('root'));
//greeting={} 這段也像html attribute(properties) 寫了會有錯 要去hello.js用this修 
// {}裡面是值 參數就是Hello.js裡的props


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
