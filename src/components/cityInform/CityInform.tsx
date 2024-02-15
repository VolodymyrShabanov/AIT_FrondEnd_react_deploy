import { FC, useState } from "react";

const CityInform: FC = () => {
  let [index, setCity] = useState<number>(0);

  const cities = [
    {
      title: "Berlin",
      Description:
        "Berlin - столица и крупнейший город Германии, первый по населению и второй по площади город Евросоюза.Является одной из 16 земель в составе ФРГ и целиком располагается внутри федеральной земли Бранденбург. ",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/1280px-Brandenburger_Tor_abends.jpg",
    },
    {
      title: "Paris",
      Description:
        "Paris - столица и крупнейший город Франции. Находится на севере государства, в центральной части Парижского бассейна, на реке Сена. Население — 2,165 млн человек. Центр агломерации Большой Париж (6,6 млн), ядро исторического региона Иль-де-Франс. Образует коммуну и департамент, разделённый на 20 округов.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1920px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
    },
    {
      title: "London",
      Description:
        "London - столица и крупнейший город Англии и Великобритании. Административно образует регион Англии Большой Лондон, разделённый на 33 самоуправляемых территории. Население города в 2023 году составляет 9 648 110 человек. Образует агломерацию Большой Лондон и более обширный метрополитенский район. Расположен на юго-востоке острова Великобритания, на равнине в устье Темзы, вблизи Северного моря. Главный политический, экономический и культурный центр Соединённого Королевства.",
      image:
        "https://thumbs.dreamstime.com/b/big-ben-london-autumn-leaves-32915756.jpg",
    },
  ];

  function Next(): void {
    setCity(() => {
      return (index + 1) % cities.length;
    });
  }
  
  
  function Previous(): void {
    setCity((index - 1 + cities.length) % cities.length);
  }

  console.log(index);

  return (
    <div style={{width: 600}} className="card">
      <button type="button" onClick={Previous}>
        Previous
      </button>
      <button type="button" onClick={Next}>
        Next
      </button>
      <h3 className="title">{cities[index].title}</h3>
      <p className="description">{cities[index].Description}</p>
      <img  style={{width: 600}} className="image" src={cities[index].image} alt="city_image" />
    </div>
  );
};

export default CityInform;
