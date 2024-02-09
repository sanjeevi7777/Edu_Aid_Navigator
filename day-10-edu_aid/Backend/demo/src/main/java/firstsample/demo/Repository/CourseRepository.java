package firstsample.demo.Repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import firstsample.demo.Model.CoursesModel;

@Repository
public interface CourseRepository extends CrudRepository<CoursesModel, Long> {

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM courses_model WHERE course_id = :courseId", nativeQuery = true)
    void deleteByCourseId(int courseId);

}
