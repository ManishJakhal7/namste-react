import RestaurantCard from "./Restaurantcard";
import { useState } from "../node_modules/react";
import dataList from "../utilis/mockdata";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(dataList);
  return (
    <div className="body">
      <div className="search"></div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurant(filterList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="restro-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
