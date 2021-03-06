import React from 'react';//有了react import from新語法就能使用了
import ReactDOM from 'react-dom';//react可以用在許多方面(手機app也可以用 VR也行) 這邊是用在建網站 所以是dom(document)
import { Provider } from 'react-redux';//redux用來做連接的,這是API
import { createStore, applyMiddleware, combineReducers } from 'redux';//這就redux的獨有功能
import { createLogger } from 'redux-logger';//就同步動作的middleware
import thunkmMiddleware from 'redux-thunk';//這用來處理非同步(asynchronous)動作的
import './index.css';//也能直接加css
import App from './containers/App'//開頭一定要大寫 ,要從哪個檔案進來 App是所有components的parent 
import * as serviceWorker from './serviceWorker';//就系統自帶的 可以先不用管它
import { searchRobots, requestRobots } from './reducers'//一個處理搜尋,一個處理機器人
import 'tachyons';//去json確認有之後 在這邊加上 接著去Hello.js
//如果有多個結果要輸出就要加上{} {}裡面可以加上robots, cats就會特定輸出cats一個結果

const logger = createLogger()//這個就是middleware
const rootReducer = combineReducers({searchRobots, requestRobots})//這個專案的reducer,目前就一個searchRobots,它會合併之後做的許多reducer
const store = 
     createStore(rootReducer, applyMiddleware(thunkmMiddleware, logger));//store變成prop的一種 可以抓取state(getState)
                                        //會先跑thuk再跑logger
ReactDOM.render(
	<Provider store = {store} >
	<App />
	</Provider>, document.getElementById('root'));// mouting在這邊觸發
//greeting={} 這段也像html attribute(properties) 寫了會有錯 要去hello.js用this修 
// {}裡面是值 參數就是Hello.js裡的props


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
