import { useState, useEffect } from "../node_modules/react";
const RestauratMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=213358&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
  };

  return <h1>{name}</h1>;
};
export default RestauratMenu;
