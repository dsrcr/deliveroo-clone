import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    restaurantCards: [
        {
            id: 1,
            imgUrl: "https://links.papareact.com/gn7",
            title: "Sushi",
            rating: 5,
            genre: "japaneese",
            address: "Big Street, Ny",
            short_description: "Super short description",
            dishes: [
                {
                    id: 1,
                    name: "Nigiri",
                    price: 5,
                    short_description: "Super extra short description",
                    imageUrl: "",
                },
            ],
            long: "long",
            lat: "lat"
        },
        {
            id: 2,
            imgUrl: "https://links.papareact.com/gn7",
            title: "Sushi2",
            rating: 5,
            genre: "japaneese",
            address: "Big Street, Ny",
            short_description: "Super short description",
            dishes: [
                {
                    id: 1,
                    name: "Nigiri",
                    price: 5,
                    short_description: "Super extra short description",
                    imageUrl: "",
                },
            ],
            long: "long",
            lat: "lat"
        },
        {
            id: 3,
            imgUrl: "https://links.papareact.com/gn7",
            title: "Sushi3",
            rating: 5,
            genre: "japaneese",
            address: "Big Street, Ny",
            short_description: "Super short description",
            dishes: [
                {
                    id: 1,
                    name: "Nigiri",
                    price: 5,
                    short_description: "Super extra short description",
                    imageUrl: "",
                },
            ],
            long: "long",
            lat: "lat"
        },
    ]
};
export const restaurantSlice = createSlice({
    name: "restaurant",
    initialState,
    reducers: {},
});

export default restaurantSlice.reducer;
