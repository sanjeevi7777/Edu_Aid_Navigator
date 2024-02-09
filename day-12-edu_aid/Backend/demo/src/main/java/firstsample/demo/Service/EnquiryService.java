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

    public EnquiryModel saveEnquiryDetails(EnquiryModel enquiry) {
        return enquiryRepository.save(enquiry);
    }

    public EnquiryModel updateEnquiryDetails(EnquiryModel updatedEnquiry) {
        Optional<EnquiryModel> existingEnquiryOptional = enquiryRepository.findById(updatedEnquiry.getEnquiryId());
        if (existingEnquiryOptional.isPresent()) {

            return enquiryRepository.save(updatedEnquiry);
        } else {
            throw new EntityExistsException("Enquiry not found ");
        }
    }

    public List<EnquiryModel> findAllEnquiryDetails() {
        return (List<EnquiryModel>) enquiryRepository.findAll();
    }

    public void deleteEnquiryDetails(int enquiryId) {
        enquiryRepository.deleteByEnquiryId(enquiryId);
    }
}
