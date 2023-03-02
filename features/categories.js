import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [
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
    ]
};

export const categoriesSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {}
});

export default categoriesSlice.reducer;
