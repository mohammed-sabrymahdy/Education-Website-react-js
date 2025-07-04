import { SectionHeader } from "./SectionHeader";
import { coursesData } from "../data";
import { Course } from "./course";

export const Courses = () => {
  return (
    <section>
      <div className="container">
        <SectionHeader
          title="Make Online education accessible"
          description="Education is the most powerful tool to unlock potential, ignite curiosity, and shape a brighter future. At our platform, we believe in making learning accessible, engaging, and transformative, empowering students to achieve their dreams and build the skills they need for success in an ever-changing world."
        />
        <div className="courses-container">
          {coursesData.map((course) => {
            const {
              id,
              img,
              department,
              description,
              title,
              rating,
              sales,
              price,
              discount,
              duration,
              lessons,
            } = course;
            return (
              <Course
                key={id}
                img={img}
                department={department}
                description={description}
                title={title}
                rating={rating}
                sales={sales}
                price={price}
                discount={discount}
                duration={duration}
                lessons={lessons}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
