package firstsample.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import firstsample.demo.Model.EnrolledcourseModel;

@Repository
public interface EnrolledRepository extends CrudRepository<EnrolledcourseModel, Long>{
     @Transactional
    @Modifying
    @Query(value = "DELETE FROM enrolledcourse_model WHERE enrolled_id = :enrolledId", nativeQuery = true)
    void deleteByEnrolledId(int enrolledId);
    @Query(value = "SELECT * FROM enrolledcourse_model WHERE user_id = :    userId", nativeQuery = true)
    List<EnrolledcourseModel> selectByUserId(int userId);
}