import React, { useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({data,search}) {
  const filteredPlants = data.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <ul className="cards">{filteredPlants.map(plant => (
      <PlantCard key={plant.id} plant={plant}/>
    ))}</ul>
  );
}

export default PlantList;
