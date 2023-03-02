import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
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
  const cards = useSelector((state) => state.categories.categories);
  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {cards.map((card) => (
        <CategoryCard
          key={card.title}
          imgUrl={card.imgUrl}
          title={card.title}
        />
      ))}
    </ScrollView>
  );
}
