import { Courses } from "./Courses";
import { Home } from "./Home";
import { JoinUS } from "./JoinUS";
import { Reviews } from "./Reviews";

export const Main = () => {
  return (
    <div>
      <Home />
      <Courses />
      <Reviews />
      <JoinUS />
    </div>
  );
};
