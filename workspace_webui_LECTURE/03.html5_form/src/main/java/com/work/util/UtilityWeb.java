package com.work.util;

import java.util.LinkedHashMap;
import java.util.Map;

public class UtilityWeb {
	public static Map<String, Object> getMap(Object... args) {
		if (args.length % 2 != 0) {
			throw new IllegalArgumentException("매개변수는 짝수로 입력하기 바랍니다.");
		}
		
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		for (int index = 0; index < args.length / 2; index++) {
			//String key = (String)args[index * 2]; // 0 2 4
			String key = String.valueOf(args[index * 2]); // 0 2 4
			String value = (String)args[index * 2 + 1];
			map.put(key, value);
		}
		
		return map;
	}
	
	public static void main(String[] args) {
		Map<String, Object> map = getMap("code", "S-1", "command", "login", "msg", "성공하였습니다");
		map = getMap("linkTitle", "로그인", "linkUrl", "login.html", "msg", "정보가 올바르지 않습니다.");
		System.out.println(map);

		// error
		//Map<String, Object> map1 = getMap("code", "S-1", "command", "login", "msg", "성공하였습니다", "property");
		Map<String, Object> map2 = getMap(1, "S-1", "command", "login", "msg", "성공하였습니다");
	}
}
