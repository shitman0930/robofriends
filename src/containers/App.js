import React, { Component } from 'react';
import { connect } from 'react-redux';//決定從這邊跟redux互動,也是API
import CardList from '../components/CardList';//../就可以找不在同一個資料夾的檔案
import Scroll from '../components/Scroll';//讓CardList可以滾動
import SearchBox from '../components/SearchBox';
import './App.css'

import { setSearchField, requestRobots } from '../actions'
//State 事實上是個object  
// 描述這個應用程式 是可以改變的 在這裡是要描述robots 把輸入searchbox的值跟CardList(robotarray)做連接 
// 之前上課的圖(影片200的介紹react)dataflow parent跟child可連動
// props(child)就從state出來的
// parent==>state==>child(props)


// const state = {
// 	robots: robots,
// 	searchField: ''
// }

const mapStateToProps = state => {
	return {//reducer裡的searchField,這個state就上一行寫的state
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
	}//合併reducer後,searchField:中間才要加searchRobots,然後加上後面2個
}//什麼state才需要回報並設定成props

const mapDispatchToProps = (dispatch) => {//dispatch就是隨著action而改變
	return {
	  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),//就searchbox input改變就回報
      onRequestRobots: () =>dispatch(requestRobots())//()代表reducer裡的三個動作
        }
}//什麼props才需要回報並設定成actions來dispatch(調度)

class App extends Component {
	// constructor() {//這在第13節的148影片有寫過,lifecycle methods的一種有3大類 mounting自己看213裡面的網站
	// super()
 //    this.state = {//this代表App
	// robots: [],//從別的網站抓數據
	// // searchfield: '' 這個被mapStateToProps取代
 //           }
	//有了onReuestRobots之後,不用constructor(this.state被取代)只要this就可以了

	componentDidMount() {//這個是react自有 不是自創功能 mouting的4種方法會按順序讀取
		// console.log(this.props.store.getState())//測試一下getState有沒有變成props 有的話就去改Provider
        // fetch('https://jsonplaceholder.typicode.com/users')//就從這邊抓數據,fetch也是window object,就製造需求的一種工具 (以後會講)
	       //  .then(response => response.json())
	       //  .then(users => {this.setState({ robots: users})});
	       this.props.onRequestRobots();
	}//有了onReuestRobots之後,不用fetch只要this就可以了

   // onSearchChange = (event) => {//這是自創功能 SearchBox.js的input每次改變時會觸發 
   // 	//對照dataflow的圖,在這個project裡,parent是App===>child是searchbox,cardlist
   // 	//每次input改變,searchbox裡的onChange改變 會call app裡的這個function
   // 	this.setState({ searchfield: event.target.value })//react裡的一個method 要讓state改變發生作用 就要寫這個(setState)
   // }這個也被mapDispatchToProps取代

	render() {//lifecycle method,root更新後 construtor跑完就換跑這邊 render是mouting同時也是updating 所以會跑兩次
 		 // const { robots} =this.state;//被onReuestRobots取代了
 		 const { searchField, onSearchChange, robots, isPending} =this.props;
		 const filteredRobots = robots.filter(robot =>{//影片146 advaced javascript有上 還是不懂就回去看
      	// 這個功能就是不管大小寫 找出robotArray裡面包含的字
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
      // console.log(event.target.value);//會給出搜尋的值	
      })
		 return isPending ?
		 <h1 className='tc f1'>Loading</h1>:
	 ( 
		  <div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={onSearchChange}/>
		   <Scroll>
		  <CardList robots={filteredRobots} />
		   </Scroll>
		  </div>
	 );
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
export default connect(mapStateToProps, mapDispatchToProps)(App);//high order function,是一個回應另一個功能的功能,先跑()再跑(APP),()會有兩個參數
//就描述任何在redux store裡的state的改變



//這個App有兩個state(robots,serachfield),並使用class extends語法,使用construtor創造this.state
//this.state可以改變或描述這個App,virtual DOM(Js object)收集state所有數據,然後react把這些數據當作props 傳到render跟下面的return裡面作用
//讓他們變成很純粹的功能
//創造了onSerachChange這個功能,每次SearchBox(onChange on the input)有改變 就會跑onSerachchange
//onSear....一跑,state(searchfield)就會更新,不管我們在serach bar上面輸入了什麼
//這些輸入的值會連接到Cardlist,告訴他我們要匹配(filter toLowerCase includes)searchfield
//不是傳送this.state.robots而是filteredRobots
//robots不會被傳 有必要成為state的一部分嗎?目前看來是不用,因為有import { robots } from './robots';反正就之後會用到就是了(API?)
//API就是當這個網站被讀取的時候,製造一個需求去網路世界某些地方(jsonplaceholder)並從該伺服器抓取數據 