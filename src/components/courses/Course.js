import CourseData from "../../data/CoursesData/CourseData";
import CourseItem from "./CourseItem";
import "./course.css";

function Course() {
  return (
    <div className="course">
      <div className="course-heading">
        <h2>Teacher Courses</h2>
      </div>
      <div className="courseInner">
        {CourseData.map((item) => (
          <CourseItem
            key={item.id}
            image={item.image}
            review={item.review}
            students={item.students}
            title={item.title}
            lead={item.lead}
            leadName={item.leadName}
            lessons={item.lessons}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Course;
