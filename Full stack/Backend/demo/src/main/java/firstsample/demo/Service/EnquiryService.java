package firstsample.demo.Service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import firstsample.demo.Model.EnquiryModel;
import firstsample.demo.Repository.EnquiryRepository;
import jakarta.persistence.EntityExistsException;

import java.util.List;
import java.util.Optional;

@Service
public class EnquiryService {
    @Autowired
    private EnquiryRepository enquiryRepository;

    @SuppressWarnings("null")
    public EnquiryModel saveEnquiryDetails(EnquiryModel enquiry) {
        List<Object[]> courses = enquiryRepository.getByCourseId((int)enquiry.getCourses().getCourse_id()); // Assuming 1 is the course ID you want to query for
        if (courses.isEmpty()) {
            throw new RuntimeException("No course found for the given course ID : "+enquiry.getCourses().getCourse_id());
        }
        return enquiryRepository.save(enquiry);
    }
    public  List<EnquiryModel> getEnquiryModel(int id) {
        return enquiryRepository.getByUserId(id);
    }

    public EnquiryModel updateEnquiryDetails(int id,EnquiryModel updatedEnquiry) {
        Optional<EnquiryModel> existingEnquiryOptional = enquiryRepository.findById((long)id);
        if (existingEnquiryOptional.isPresent()) {
            updatedEnquiry.setEnquiry_id(id);
            return enquiryRepository.save(updatedEnquiry);
        } else {
            throw new EntityExistsException("Enquiry not found with ID : "+id);
        }
    }

    public List<EnquiryModel> findAllEnquiryDetails() {
        return (List<EnquiryModel>) enquiryRepository.findAll();
    }

    public void deleteEnquiryDetails(int enquiryId) {
        enquiryRepository.deleteByEnquiryId(enquiryId);
    }
}
