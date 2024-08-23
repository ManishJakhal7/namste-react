import RestaurantCard from "./Restaurantcard";
import dataList from "../utilis/mockdata";
const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="restro-container"></div>
      {dataList.map((restaurant) => (
        <RestaurantCard resData={restaurant} />
      ))}
    </div>
  );
};
export default Body;
