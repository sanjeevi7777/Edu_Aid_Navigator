package firstsample.demo.Repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import firstsample.demo.Model.UserModel;

public interface  UserDetailsRespository extends JpaRepository<UserModel, Long> {

    @Query(value = "SELECT * FROM user_details WHERE email=:user_name",nativeQuery = true)
    UserModel findByUsername(String user_name);
    
}
