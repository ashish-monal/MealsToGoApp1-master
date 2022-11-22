import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { ResturantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpand] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <ResturantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpand(!breakfastExpanded)}
        >
          <List.Item title="Scrambled Eggs and Chicken Sausages" />
          <List.Item title="Rawa Upma" />
          <List.Item title="Masala Cheese French Toast" />
          <List.Item title="Bombay Toasty" />
          <List.Item title="Masala Chicken on Toast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Fresh blueberries" />
          <List.Item title="Toothpick" />
          <List.Item title="Grape tomatoes" />
          <List.Item title="Fresh broccoli" />
          <List.Item title="Carrots" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Pot Pie" />
          <List.Item title="Meatloaf" />
          <List.Item title="Pork chops" />
          <List.Item title="Kabobs" />
          <List.Item title="Fish" />
          <List.Item title="Hot dogs" />
          <List.Item title="Steak and sides" />
          <List.Item title="Roasted whole chicken or turkey" />
          <List.Item title="Chicken and rice casserole" />
        </List.Accordion>
        <List.Accordion
          title="Drink"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Beer" />
          <List.Item title="Cider" />
          <List.Item title="Ccktails" />
          <List.Item title="Wine" />
          <List.Item title="Milk" />
          <List.Item title="Water" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
