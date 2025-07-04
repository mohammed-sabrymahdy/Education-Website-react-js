import { ratingData } from "../data";
import { Review } from "./Review";
import { SectionHeader } from "./SectionHeader";

export const Reviews = () => {
  return (
    <section id="reviews">
      <div className="container">
        <SectionHeader
          title="Each and every client is important"
          description="Discover what our students are saying in the Reviews section! Real feedback from learners who have experienced and benefited from our courses."
        />
        <div className="ratings">
          {ratingData.map((rating) => {
            const { id, description, img, job, name, stars } = rating;

            return (
              <div key={id}>
                <Review
                  description={description}
                  img={img}
                  job={job}
                  name={name}
                  stars={stars}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
