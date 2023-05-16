package api.empleados.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@CrossOrigin
public class UserController {
	
	@GetMapping("/")
	public String index() {

		return "index.html";
	}
	
}
