/**
 *  1. 사용자 class에 멤버 변수 선언 및 바인딩 방법 
 */

function Member(memberId, name, mileage){
		
		//멤버 변수 선언 및 초기화
		this.memberId = memberId; 
		this.name = name; 
		this.mileage = mileage; 
		
		//회원의 전체 정보를 반환하는 메서드를 바인딩 연결 선언
		this.toString = toString;
		
		//회원의 마일리지 변경 함수 
		this.setMileage = setMileage;
		
		//마일리지 가져오기 
		this.getMileage = getMileage;
		
	}
	
	function toString (){
		return this.memberId + ", "+this.name +", "+this.mileage;
	}
	
	function setMileage (mileage){
		this.mileage = mileage;
	}
	
	function getMileage (mileage){
		return this.mileage;
	}
	
	
	//회원 객체 생성
	var dto1= new Member("user01","김하나",1000);
	var dto2= new Member("user02","김두울",2000);
	
	//회원 객체 property(멤버 변수) 출력
	document.write(dto1.memberId + ", "+dto1.name + ", "+dto1.mileage +"\t ");
	document.write(dto2.memberId + ", "+dto2.name + ", "+dto2.mileage );
	
	//멤버 메소드 함수 선언
	document.write(dto1.toString() +"\n");
	dto1.setMileage(50000);
	document.write("마일리지 조회 : "+dto1.getMileage());
	