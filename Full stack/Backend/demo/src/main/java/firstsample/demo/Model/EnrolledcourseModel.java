package firstsample.demo.Model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
// import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
// import jakarta.persistence.ManyToOne;
// import jakarta.persistence.OneToMany;

@Entity
public class EnrolledcourseModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long enrolledId;
    // public long courseId;
    public String date;
    public String status;
    
    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="user_id")
    public UserModel user;
    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(name="course_id")
    public CoursesModel courses;
    public UserModel getUser() {
        return user;
    }
    public void setUser(UserModel user) {
        this.user = user;
    }
    public CoursesModel getCourses() {
        return courses;
    }
    public void setCourses(CoursesModel courses) {
        this.courses = courses;
    }
    public long getEnrolledId() {
        return enrolledId;
    }
    public void setEnrolledId(long enrolledId) {
        this.enrolledId = enrolledId;
    }
    // public long getCourseId() {
    //     return courseId;
    // }
    // public void setCourseId(long courseId) {
    //     this.courseId = courseId;
    // }
  
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
}