package firstsample.demo.Model;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
@Entity
@Table(name="user_details")
public class UserModel {
	@Id
	// @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="user_id")
	private Long user_id;
	private String user_name="";
	private String email="";
	private String password="";
//    @ManyToMany(fetch=FetchType.LAZY,cascade=CascadeType.ALL,mappedBy = "user")
//     @JoinColumn(name="user_id")
//     public List<EnquiryModel> enrolled;

	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
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
