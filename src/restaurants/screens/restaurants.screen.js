import React, { useContext, useState } from "react";
import { Colors } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { ResturantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { Spacer } from "../../components/spacer/spacer.componet";
import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { FavouritesContext } from "../../services/favourites/favourite.context";
import { FavouritesBar } from "../../components/favourites/favoutites-bar.component";
import { RestaurentList } from "../components/restaurant-list.style";
import { FadeInView } from "../../components/animation/fade.animation";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
position:absolute;
top:50%
left:50%
`;

export const ResturantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}

      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurentList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <ResturantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
