package firstsample.demo.Repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import firstsample.demo.Model.User;
// import firstsample.demo.Model.UserModel;


public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    // Optional<User> findByUsername(String username);
    
	User findById(int id);
}
