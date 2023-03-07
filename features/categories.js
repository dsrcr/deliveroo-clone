import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [
        {
            imgUrl: "https://links.papareact.com/gn7",
            title: "Japaneese",
        },
        {
            imgUrl: "http://i.huffpost.com/gen/964952/images/o-ITALIAN-FOOD-SURVEY-facebook.jpg",
            title: "Italian",
        },
        {
            imgUrl: "https://spoonuniversity.com/wp-content/uploads/sites/170/2016/03/Pierogi2-1024x683.jpg",
            title: "Polish",
        },
        {
            imgUrl: "https://braincharm.com/wp-content/uploads/2018/04/Burger-and-Fries.jpg",
            title: "Fast-food",
        },
        {
            imgUrl: "https://static6.businessinsider.com/image/565dd3a9c28144c0018b65d8-3872-2592/2417315604_93fb6357e4_o.jpg",
            title: "French",
        },
        {
            imgUrl: "https://www.readersdigest.ca/wp-content/uploads/sites/14/2010/12/pepperoni-pizza.jpg",
            title: "Pizza",
        },
        {
            imgUrl: "https://cms.qz.com/wp-content/uploads/2017/10/rts1c34b.jpg?quality=75&strip=all&w=1400",
            title: "Mexican",
        },
        {
            imgUrl: "https://www.thespruceeats.com/thmb/Q0schrGA1TOajpjDjCqLGipqcBA=/5101x3401/filters:fill(auto,1)/GettyImages-639389404-5c450e724cedfd00015b09d5.jpg",
            title: "Indian",
        },
        {
            imgUrl: "https://magazine.foodpanda.pk/wp-content/uploads/sites/13/2016/06/Chinese-Featured-Image.jpg",
            title: "Chineese",
        },
    ]
};

export const categoriesSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {}
});

export default categoriesSlice.reducer;
