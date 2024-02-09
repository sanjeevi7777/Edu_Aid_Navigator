package firstsample.demo.Service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import firstsample.demo.Model.EnrolledcourseModel;
import firstsample.demo.Repository.EnrolledRepository;
import jakarta.persistence.EntityExistsException;
import java.util.List;
import java.util.Optional;

@Service
public class EnrolledService {
    @Autowired
    private EnrolledRepository enrolledRepository;

    public EnrolledcourseModel saveEnrolledDetails(EnrolledcourseModel enrolled) {
        return enrolledRepository.save(enrolled);
    }

    public EnrolledcourseModel updateEnrolledDetails(EnrolledcourseModel updatedEnrolled) {
        Optional<EnrolledcourseModel> existingEnrolledOptional = enrolledRepository.findById(updatedEnrolled.getEnrolledId());
        if (existingEnrolledOptional.isPresent()) {
            return enrolledRepository.save(updatedEnrolled);
        } else {
            throw new EntityExistsException("Enrolled course not found with ID: " + updatedEnrolled.getEnrolledId());
        }
    }

    public List<EnrolledcourseModel> findEnrolledById(int enrolledId) {
        List<EnrolledcourseModel> enroll=enrolledRepository.selectByUserId(enrolledId);
		if (enroll!=null) {
            return enroll;
        } else {
            throw new EntityExistsException("Enrolled course not found ");
        }   
    }

    public List<EnrolledcourseModel> findAllEnrolledDetails() {
        return (List<EnrolledcourseModel>) enrolledRepository.findAll();
    }

    public void deleteEnrolledDetails(int enrolledId) {
        enrolledRepository.deleteByEnrolledId(enrolledId);
    }
}
