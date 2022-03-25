import React from "react";
import AddRestaurant from "../components/add-restaurant/AddRestaurant";
import Header from "../components/header/Header";
import RestaurantsList from "../components/restaurants-list/RestaurantsList";

const Home = () => {
  return (
    <div>
      <Header />
      <AddRestaurant />
      <RestaurantsList />
    </div>
  );
};

export default Home;
