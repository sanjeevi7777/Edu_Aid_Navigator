package firstsample.demo.controller;
import org.springframework.web.bind.annotation.RestController;

import firstsample.demo.Service.AdminService;
import firstsample.demo.Model.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
@RestController
@CrossOrigin("*")
@RequestMapping("/admin")
public class AdminController {
    @Autowired
	private AdminService ServiceImp;
	@PostMapping("/saveSignIn")
	public Admin saveSignInDetails(@RequestBody Admin sign){
		// System.out.println("SignIn save works properly!");
	    ServiceImp.saveSignInDetails(sign);
        return sign;
	}
	// @GetMapping("/getSignIn")
	// public Admin findStudent(@RequestParam int id){
	// 	return ServiceImp.findSignInDetails(id);
	// }
	@GetMapping("/getAllSignIn")
	public List<Admin>findAllSignDetails(){
		return ServiceImp.findAllSignInDetails();
	}
}
