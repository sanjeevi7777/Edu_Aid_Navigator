package firstsample.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import firstsample.demo.Model.EnquiryModel;
import firstsample.demo.Model.User;
import firstsample.demo.Service.EnquiryService;



// import com.example.edu_aid.Model.CoursesModel;
// import com.example.edu_aid.Service.CoursesService;

@RestController
@CrossOrigin("*")
// @RequestMapping("")
public class EnquiryController{
	@Autowired
	public EnquiryService ServiceImp;
	@PostMapping("/postEnquiry")
	public EnquiryModel saveEnquiryDetails(@RequestBody EnquiryModel sign){
		// System.out.println("SignIn save works properly!");
	    ServiceImp.saveEnquiryDetails(sign);
        return sign;
	}
	// @GetMapping("/getSignIn")
	// public UserModel findStudent(@RequestParam int id){
	// 	return ServiceImp.findSignInDetails(id);
	// }
	@GetMapping("/getAllEnquries")
	public List<EnquiryModel >findAllEnquiryDetails(){
		return ServiceImp.findAllEnquiryDetails();
	}
	@PutMapping("/updateEnquiry")
	public EnquiryModel updateEquiryDetails(@RequestBody EnquiryModel sign) {
		return ServiceImp.updateEnquiryDetails(sign);
	}
	@DeleteMapping("/deleteEnquiry")
	public String deleteEnquiryDetails(@RequestParam int id) 
	{
		
		ServiceImp.deleteEnquiryDetails(id);
		return "Enquiry Details Deleted !";
	} 
	
}