import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css'

//State 事實上是個object  
// 描述這個應用程式 是可以改變的 在這裡是要描述robots 把輸入searchbox的值跟CardList(robotarray)做連接 
// 之前上課的圖(影片200的介紹react)dataflow parent跟child可連動
// props(child)就從state出來的
// parent==>state==>child(props)


// const state = {
// 	robots: robots,
// 	searchField: ''
// }

class App extends Component {
	constructor() {//這在第13節的148影片有寫過
	super()
    this.state = {//this代表App
	robots: robots,
	searchfield: ''
           }
	}

   onSearchChange = (event) => {//這是自創功能 SearchBox.js的input每次改變時會觸發 
   	//對照dataflow的圖,在這個project裡,parent是App===>child是searchbox,cardlist
   	//每次input改變,searchbox裡的onChange改變 會call app裡的這個function
   	this.setState({ searchfield: event.target.value })//react裡的一個method 要讓state改變發生作用 就要寫這個
   }

	render() {
		 const filteredRobots = this.state.robots.filter(robots =>{//影片146 advaced javascript有上 還是不懂就回去看
      	// 這個功能就是不管大小寫 找出robotArray裡面包含的字
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      // console.log(event.target.value);//會給出搜尋的值	
      })
		return(
	<div className='tc'>
		<h1 className='f1'>RoboFriends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
	  <CardList robots={filteredRobots}/>
	</div>);
	}
}

// const App = () => {
// 	return(
// 	<div className='tc'>
// 		<h1>RoboFriends</h1>
// 		<SearchBox />
// 	  <CardList robots={robots}/>
// 	</div>

// 		);
export default App;

//影片211總結
//這個App有兩個state(robots,serachfield),並使用class extends語法,使用construtor創造this.state
//this.state可以改變或描述這個App,virtual DOM(Js object)收集state所有數據,然後react把這些數據當作props 傳到render跟下面的return裡面作用
//讓他們變成很純粹的功能
//創造了onSerachChange這個功能,每次SearchBox(onChange on the input)有改變 就會跑onSerachchange
//onSear....一跑,state(searchfield)就會更新,不管我們在serach bar上面輸入了什麼
//這些輸入的值會連接到Cardlist,告訴他我們要匹配(filter toLowerCase includes)searchfield
//不是傳送this.state.robots而是filteredRobots
//robots不會被傳 有必要成為state的一部分嗎?目前看來是不用,因為有import { robots } from './robots';,反正就之後會用到就是了(API?)