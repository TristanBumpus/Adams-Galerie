import "./PaintingsHolder.css";
import Painting from "./Painting";
import painting_data from "./data/paintings.json";

export default function PaintingsHolder() {
  console.log(painting_data);
  return (
    <div className="PaintingsHolder">
      {painting_data.map((painting, i) => (
        <Painting
          img={painting.img}
          date={painting.date}
          desc={painting.desc}
          title={painting.title}
          key={i}
        ></Painting>
      ))}
    </div>
  );
}
