import datas from "../../data.json";
import Card from "../components/card";

const Projets = () => {
  return (
    <div className="container-projet container-page">
      <div className="row">
        {datas.map((data) => {
          return <Card data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};
export default Projets;
