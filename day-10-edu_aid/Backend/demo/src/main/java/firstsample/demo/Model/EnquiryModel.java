package firstsample.demo.Model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
// import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

@Entity
public class EnquiryModel {

    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="enquiry_id")
   public long enquiry_id;
//    public long courseId;
   public String description;
   public String reply;
   
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
// @ManyToMany(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
    // // @JoinColumn(name="course_id")
    // public CoursesModel course;
public long getEnquiryId() {
    return enquiry_id;
}
public void setEnquiryId(long enquiryId) {
    this.enquiry_id = enquiryId;
}
// public long getCourseId() {
//     return courseId;
// }
// public void setCourseId(long courseId) {
//     this.courseId = courseId;
// }
public String getDescription() {
    return description;
}
public void setDescription(String description) {
    this.description = description;
}
public String getReply() {
    return reply;
}
public void setReply(String reply) {
    this.reply = reply;
}
// public long getReplyId() {
//     return replyId;
// }
// public void setReplyId(long replyId) {
//     this.replyId = replyId;
// }
   
}