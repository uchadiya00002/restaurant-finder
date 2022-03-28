import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import Reviews from "../components/Reviews";
import Addreviews from "../components/Addreviews";

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        console.log(response);

        setSelectedRestaurant(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-1">
            {selectedRestaurant.restaurant.name}
          </h1>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
            <Addreviews />
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantDetailsPage;
