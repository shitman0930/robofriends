import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
 } from './constants.js';//同時有同步跟非同步動作

//處理同步動作
const intialStateSearch = {//App.js裡的state裡的searchField,redux就連到App.js
    searchField: ''
}//一個處理搜尋

//reducer,當得到這些state跟action,會回應數據;不只是設定(setState),還有獲取數據+(getState)的功能

export const searchRobots = (state=intialStateSearch, action={}) => {//action={}是默認的object
   switch(action.type) {//case, Object.assign, default都是redux的功能
     case CHANGE_SEARCH_FIELD://當狀態(Object.assign)改變時,會回應action{},state(intialstate),加上props(actions裡的的searchfield{type,payload})
      return Object.assign({}, state, { searchField: action.payload });//不是用像App.js裡的state.searchfield
    default://不變的時候就回應這個,這也能用if else來做, 但switch default能包含大量的動作或case,容易加其他東西 條列式清楚明白
    return  state;
   }
}
//object destructuring or object spread operator
// export const searchRobots = (state=intialState, action={}) => {
//    switch(action.type) {
//      case CHANGE_SEARCH_FIELD:
//       return {...state, searchField: action.payload }
//    }
// }

//處理非同步動作

const intialStateRobots = {
isPending: false,
robots:[],
error: ''
}//一個處理機器人

export const requestRobots = (state=intialStateRobots, action={}) => {
   switch(action.type) {
     case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true})
     case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, { robots: action.payload, isPending: false})
     case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false})
     default:
       return state; 
   }
}