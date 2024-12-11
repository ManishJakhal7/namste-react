import { useState, useEffect } from "../node_modules/react";
import { shimmer } from "./Shimmer";
import { CDN_MENU } from "../utilis/constant";
import { useParams } from "react-router-dom";
const RestauratMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(CDN_MENU + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  if (resInfo === null) return <shimmer />;
  const { name, cuisines, avgRating, costForTwo, areaName, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {avgRating} {"RS"}
        {costForTwoMessage}
      </h2>
      <p>{cuisines.join(",")}</p>
      <h2>{areaName}</h2>
    </div>
  );
};
export default RestauratMenu;
