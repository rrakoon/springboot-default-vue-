package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class VueTestController {
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String vueTest() {
		return "vue-first/index";
	}
		
}
