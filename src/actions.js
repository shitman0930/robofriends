import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
 } from './constants.js';//同時有同步跟非同步動作

export const setSearchField = (text) => ({//就一個action
	type: CHANGE_SEARCH_FIELD,//這是不變的,JS常見的大寫格式,用變量會比較好(這樣如果拼錯會發現)
	payload: text	
});//當使用者在搜尋欄輸入文字時 會回應type;payload是redux常用的(?),會寄數據給reducer

export const requestRobots = () => (dispatch) => {//high oder funtion,前面的()代表reducer裡的三個動作會先跑,再跑(dispatch),當這個功能(dispatch)被呼叫
	dispatch({ type: REQUEST_ROBOTS_PENDING})//先等待處理
	fetch('https://jsonplaceholder.typicode.com/users')//API抓到數據後
	      .then(response => response.json())//接受users的需求
	      .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))//如果處理成功會有數據
	      .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, paylod: error}))//如果處理失敗就抓取錯誤
}