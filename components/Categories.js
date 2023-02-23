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
  const cards = [
    {
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi1",
    },
    {
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi2",
    },
    {
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi3",
    },
    {
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi4",
    },
    {
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi5",
    },
    {
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi6",
    },
    {
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi7",
    },
    {
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi8",
    },
    {
      imgUrl: "https://links.papareact.com/gn7",
      title: "Sushi9",
    },
  ];
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
