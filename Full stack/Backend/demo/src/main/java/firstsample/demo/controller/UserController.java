package firstsample.demo.controller;
import org.springframework.web.bind.annotation.RestController;

import firstsample.demo.Service.UserService;
import firstsample.demo.Model.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RequestParam;
@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController{
	@Autowired
	private UserService ServiceImp;
	@PostMapping("/saveSignIn")
	public UserModel saveSignInDetails(@RequestBody UserModel sign){
		// System.out.println("SignIn save works properly!");
		
	   
		// System.out.println(sign);
        return ServiceImp.saveSignInDetails(sign);
	}
	@GetMapping("/getSignIn/{email}")
	public UserModel findStudent(@PathVariable String email){
		return ServiceImp.findSignInDetails(email);
	}
	// @GetMapping("/getAllSignIn")
	// public List<User >findAllSignDetails(){
	// 	return ServiceImp.findAllSignInDetails();
	// }
	// @PutMapping("/updateSignIn")
	// public UserModel updateSignInDetails(@RequestBody UserModel sign) {
	// 	return ServiceImp.updateSignInDetails(sign);
	// }
	// @DeleteMapping("deleteSignIn")
	// public String deleteSignInDetails(@RequestParam int id) 
	// {
		
	// 	ServiceImp.deleteSignInDetails(id);
	// 	return "Signin Details Deleted !";
	// } 
	
}