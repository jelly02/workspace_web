/**
 * 
 */
alert("common.js load")
/* (1) 현재 날짜 : 연도 4자리-월 2자리-일 2자리 /기본 형식의 날짜 반환 함수*/
	function getCurrentDate() {
		
		var currentDate = new Date();
		var year =  currentDate.getFullYear();
		var month = ("0"+ currentDate.getMonth()).slice(-2);
		var date = ("0"+ currentDate.getDate()).slice(-2);

		return year + "-" + month + "-" +date;
	}

/* (2) 현재 시간 : 시간 2자리:분 2자리:초 2자리 /기본 형식의 시간 반환 함수 
	- 01, 02 ,,, 09, 
*/
	function getCorrentTime(){
		
		var currentTime = new Date();
		
		var hours = ("0"+ currentTime.getHours()).slice(-2);
		var minute = ("0"+ currentTime.getMinutes()).slice(-2);
		var seconds = ("0"+ currentTime.getSeconds()).slice(-2);
		
		return hours + ":" +minute+ ":" +seconds
		
	}