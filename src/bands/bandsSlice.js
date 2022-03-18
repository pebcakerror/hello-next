import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    slug: "led-zeppelin",
    name: "Led Zeppelin",
    songs: [
      {
        title: "Black Dog",
        rating: 3,
      },
    ],
  },
  {
    id: 1,
    slug: "pearl-jam",
    name: "Pearl Jam",
    songs: [
      {
        title: "Yellow Ledbetter",
        rating: 4,
      },
      {
        title: "Daughter",
        rating: 5,
      },
    ],
  },
  {
    slug: "foo-fighters",
    name: "Foo Fighters",
    songs: [
      {
        title: "The Pretender",
        rating: 2,
      },
    ],
  },
];

const bandsSlice = createSlice({
  name: 'bands',
  initialState,
  reducers: {},
});

export default bandsSlice.reducer;
