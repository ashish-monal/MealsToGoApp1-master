import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";
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
          <Divider />
          <List.Item title="Rawa Upma" />
          <Divider />
          <List.Item title="Masala Cheese French Toast" />
          <Divider />
          <List.Item title="Bombay Toasty" />
          <Divider />
          <List.Item title="Masala Chicken on Toast" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Fresh blueberries" />
          <Divider />
          <List.Item title="Toothpick" />
          <Divider />
          <List.Item title="Grape tomatoes" />
          <Divider />
          <List.Item title="Fresh broccoli" />
          <Divider />
          <List.Item title="Carrots" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Pot Pie" />
          <Divider />
          <List.Item title="Meatloaf" />
          <Divider />
          <List.Item title="Pork chops" />
          <Divider />
          <List.Item title="Kabobs" />
          <Divider />
          <List.Item title="Fish" />
          <Divider />
          <List.Item title="Hot dogs" />
          <Divider />
          <List.Item title="Steak and sides" />
          <Divider />
          <List.Item title="Roasted whole chicken or turkey" />
          <Divider />
          <List.Item title="Chicken and rice casserole" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Drink"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <Divider />
          <List.Item title="Beer" />
          <Divider />
          <List.Item title="Cider" />
          <Divider />
          <List.Item title="Ccktails" />
          <Divider />
          <List.Item title="Wine" />
          <Divider />
          <List.Item title="Milk" />
          <Divider />
          <List.Item title="Water" />
        </List.Accordion>
        <Divider />
      </ScrollView>
    </SafeArea>
  );
};
