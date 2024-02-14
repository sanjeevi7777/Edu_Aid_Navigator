package firstsample.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import firstsample.demo.Model.EnquiryModel;
import firstsample.demo.Model.EnrolledcourseModel;

@Repository
public interface EnquiryRepository extends CrudRepository<EnquiryModel, Long> {

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM enquiry_model WHERE enquiry_id = :enquiryId", nativeQuery = true)
    void deleteByEnquiryId(int enquiryId);
    @Transactional
    @Modifying
    @Query(value = "SELECT * FROM courses_model WHERE course_id =:courseId", nativeQuery = true)
    List<Object[]> getByCourseId(int courseId);
    
    @Transactional
    @Modifying
    @Query(value = "SELECT * FROM enquiry_model WHERE user_id =:userId", nativeQuery = true)
    List<EnquiryModel> getByUserId(int userId);
    
    //  @Query(value = "SELECT * FROM enrolled_course_model WHERE user_id = :userId", nativeQuery = true)
    // List<EnrolledcourseModel> selectByUserId(int userId);
}
