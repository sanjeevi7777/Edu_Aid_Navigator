// package firstsample.demo.controller;
// import org.springframework.web.bind.annotation.RestController;

// import firstsample.demo.Service.UserService;
// import firstsample.demo.Model.*;
// import org.springframework.beans.factory.annotation.Autowired;
// import java.util.List;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// // import org.springframework.web.bind.annotation.DeleteMapping;
// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// // import org.springframework.web.bind.annotation.RequestParam;
// @RestController
// @CrossOrigin("*")
// @RequestMapping("/user")
// public class UserController{
// 	@Autowired
// 	private UserService ServiceImp;
// 	@PostMapping("/saveSignIn")
// 	public User saveSignInDetails(@RequestBody User sign){
// 		// System.out.println("SignIn save works properly!");
// 	    ServiceImp.saveSignInDetails(sign);
//         return sign;
// 	}
// 	// @GetMapping("/getSignIn")
// 	// public User findStudent(@RequestParam int id){
// 	// 	return ServiceImp.findSignInDetails(id);
// 	// }
// 	@GetMapping("/getAllSignIn")
// 	public List<User >findAllSignDetails(){
// 		return ServiceImp.findAllSignInDetails();
// 	}
// 	// @PutMapping("/updateSignIn")
// 	// public SignUp updateSignInDetails(@RequestBody SignUp sign) {
// 	// 	return ServiceImp.updateSignInDetails(sign);
// 	// }
// 	// @DeleteMapping("deleteSignIn")
// 	// public String deleteSignInDetails(@RequestParam int id) 
// 	// {
		
// 	// 	ServiceImp.deleteSignInDetails(id);
// 	// 	return "Signin Details Deleted !";
// 	// } 
	
// }