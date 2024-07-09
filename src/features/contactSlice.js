import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  oneContact:{},
  loading: false,
  error: false,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    contactsFetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    contactsFetchFail : state => {
        state.error = true;
        state.loading = false;
    },
    getContactsSuccess:(state,{payload}) => {
        state.loading = false;
        state.contacts = payload;
    },
    getOneContactSuccess : (state,{payload}) => {
        state.loading = false;
        state.oneContact = payload;
    },
    contactsSuccessWithoutPayload:state => {
        state.loading = false;
    }

  },
});

export const {contactsFetchStart,contactsFetchFail,getContactsSuccess,getOneContactSuccess,contactsSuccessWithoutPayload} = contactSlice.actions;
export default contactSlice.reducer;
