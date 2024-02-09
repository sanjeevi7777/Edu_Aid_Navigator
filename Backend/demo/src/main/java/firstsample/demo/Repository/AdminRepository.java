package firstsample.demo.Repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
// import com.example.demo.model.*;
import org.springframework.stereotype.Repository;

import firstsample.demo.Model.Admin;
@Repository
public interface AdminRepository extends JpaRepository<Admin, Long>
{
	// Admin findById(int id);
	Optional<Admin> findByEmail(String email);
}
