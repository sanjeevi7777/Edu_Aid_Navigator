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

import firstsample.demo.Model.EnrolledcourseModel;
import firstsample.demo.Service.EnrolledService;



// import com.example.edu_aid.Model.EnquiryModel;
// import com.example.edu_aid.Service.EnquiryService;

// import com.example.edu_aid.Model.CoursesModel;
// import com.example.edu_aid.Service.CoursesService;

@RestController
@CrossOrigin("*")
// @RequestMapping("")
public class EnrolledController{
	@Autowired
	public EnrolledService ServiceImp;
	@PostMapping("/postEnroll")
	public EnrolledcourseModel saveEnrolledDetails(@RequestBody EnrolledcourseModel sign){
		// System.out.println("SignIn save works properly!");
	    ServiceImp.saveEnrolledDetails(sign);
        return sign;
	}
	@GetMapping("/getEnroll")
	public List<EnrolledcourseModel> findStudent(@RequestParam int id){
		return ServiceImp.findEnrolledById(id);
	}
	@GetMapping("/getAllEnrolls")
	public List<EnrolledcourseModel >findAllEnrolledDetails(){
		return ServiceImp.findAllEnrolledDetails();
	}
	@PutMapping("/updateEnroll")
	public EnrolledcourseModel updateEnrolledDetails(@RequestBody EnrolledcourseModel sign) {
		return ServiceImp.updateEnrolledDetails(sign);
	}
	@DeleteMapping("/deleteEnroll")
	public String deleteEnrolledDetails(@RequestParam int id) 
	{
		
		ServiceImp.deleteEnrolledDetails(id);
		return "Enrolled Details Deleted !";
	} 
	
}