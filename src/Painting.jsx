import "./Painting.css";

export default function Painting({ img, desc, date, title }) {
  return (
    <div className="Painting">
      <h2>{title}</h2>
      <div className="holder">
        <img src={img} alt={title} />
        <div>
          <p>{desc}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}
