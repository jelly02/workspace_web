/*
 * 3.  사용자 class에 멤버 메서드 선언 및 prototype 작성 및 json 작성 방법  
 */
 
 
function Member(memberId, name, mileage){
		
		//멤버 변수 선언 및 초기화
		this.memberId = memberId; 
		this.name = name; 
		this.mileage = mileage; 
				
	}
	
//prototype 속성 및 json 이용한 멤버 메서드 선언 및 바인딩 : 클래스에 별도의 바인딩 필요하지 않음
Member.prototype = {
	
	toString : function() {return this.memberId + ", "+this.name +", "+this.mileage;},
	setMileage : function(mileage) {this.mileage = mileage;},
	getMileage : function() {return this.mileage;},
	setName : function (name) {this.name = name;}, 
	getName : function() {return this.name;}
		
	

}




