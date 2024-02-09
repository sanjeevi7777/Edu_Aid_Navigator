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

import firstsample.demo.Model.CoursesModel;
import firstsample.demo.Service.CoursesService;




@RestController
@CrossOrigin("*")
// @RequestMapping("")
public class CoursesController{
	@Autowired
	public CoursesService ServiceImp;
	@PostMapping("/postCourses")
	public CoursesModel saveCoursesDetails(@RequestBody CoursesModel courses){
		// System.out.println("SignIn save works properly!");
	    ServiceImp.saveCoursesDetails(courses);
        return courses;
	}
	// @GetMapping("/getSignIn")
	// public UserModel findStudent(@RequestParam int id){
	// 	return ServiceImp.findSignInDetails(id);
	// }
	@GetMapping("/getAllCourses")
	public List<CoursesModel >findAllCoursesDetails(){
		return ServiceImp.findAllCoursesDetails();
	}
	@PutMapping("/updateCourses")
	public CoursesModel updateCoursesDetails(@RequestBody CoursesModel sign) {
		return ServiceImp.updateCoursesDetails(sign);
	}
	@DeleteMapping("/deleteCourses")
	public String deleteCoursesDetails(@RequestParam int id) 
	{
		
		ServiceImp.deleteCoursesDetails(id);
		return "Courses Details Deleted !";
	} 
	
}