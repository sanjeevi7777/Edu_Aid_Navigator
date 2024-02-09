package firstsample.demo.Model;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.List;

// import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
@Entity
@Table(name="admin_details")
public class Admin {
    @Id
	// @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="admin_id")
	private Long admin_id;
	private String admin_name="";
	private String email="";
	private String password="";
    // @OneToMany(mappedBy = "admin")
    // // @JoinColumn(name="course_id")
    // public List<CoursesModel> courses;
    public Long getAdmin_id() {
        return admin_id;
    }
    public void setAdmin_id(Long admin_id) {
        this.admin_id = admin_id;
    }
    public String getAdmin_name() {
        return admin_name;
    }
    public void setAdmin_name(String admin_name) {
        this.admin_name = admin_name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

	
}
