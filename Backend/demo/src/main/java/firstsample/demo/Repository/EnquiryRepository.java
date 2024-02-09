package firstsample.demo.Repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import firstsample.demo.Model.EnquiryModel;

@Repository
public interface EnquiryRepository extends CrudRepository<EnquiryModel, Long> {

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM enquiry_model WHERE enquiry_id = :enquiryId", nativeQuery = true)
    void deleteByEnquiryId(int enquiryId);

}
