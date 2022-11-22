import React from "react";

import { CompactRestaurantInfo } from "../../../components/restaurant/Compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
