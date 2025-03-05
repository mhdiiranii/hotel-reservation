import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { searchDataType } from "@/app/(home)/homeMine";

// Define a type for the slice state
export interface SearchState {
  loading: boolean;
  myHotels: searchDataType | null;
  imageModal: boolean;
  srcImageModal: string;
}

// Define the initial state using that type
const initialState: SearchState = {
  loading: false,
  myHotels: null,
  imageModal: false,
  srcImageModal: "",
};

export const searchSlice = createSlice({
  name: "search",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setHotelsData: (state, action: PayloadAction<searchDataType | null>) => {
      state.myHotels = action.payload;
    },
    setImageModal: (state, action: PayloadAction<boolean>) => {
      state.imageModal = action.payload;
    },
    setSrcImageModal: (state, action: PayloadAction<string>) => {
      state.srcImageModal = action.payload;
    },
  },
});

export const {setLoading, setHotelsData, setImageModal, setSrcImageModal } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state;

export default searchSlice.reducer;
