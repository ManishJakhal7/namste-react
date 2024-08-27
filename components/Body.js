import RestaurantCard from "./Restaurantcard";
import { useState, useEffect } from "../node_modules/react";
import Shimmer from "./shimmer";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
