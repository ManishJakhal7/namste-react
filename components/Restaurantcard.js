import { CDN_URL } from "../utilis/constant";
/*const stylecard = {
  backgroundColor: "#f0f0f0",
}; */
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info; //option chain so we don't have to do resData.info.name everytime
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>
        <b>{name}</b>
      </h3>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating} STARS</h5>
      <h5>{costForTwo}</h5>
      <h5>{resData.info.sla.deliveryTime} minutes</h5>
    </div>
  );
};
export default RestaurantCard;
