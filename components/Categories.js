import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

/**
 * The Categories function is a component that renders a horizontal scroll view of category cards.
 *
 *
 * @return A scrollview component.
 *
 * @doc-author dsrcr
 */

export default function Categories() {
  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Sushi" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing5" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing6" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing7" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing7" />
    </ScrollView>
  );
}
