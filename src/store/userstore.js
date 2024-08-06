import { create } from "zustand";
import { produce } from "immer";

const initialState = {
    users: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        states: "",
        country: "",

    }}
export const UseStore = create((set)=>({
    ...initialState,
    updateFirstname: (firstname)=> 
        set(
            produce((state)=>{
                state.users.firstname = firstname;
            })
        ),
        updateLastname: (lastname)=> 
            set(
                produce((state)=>{
                    state.users.lastname = lastname;
                })
            ),

            updateemail: (email)=> 
                set(
                    produce((state)=>{
                        state.users.email = email;
                    })
                ),

                updatepassword: (password)=> 
                    set(
                        produce((state)=>{
                            state.users.password = password;
                        })
                    ),

                    updateaddress1: (address1)=> 
                        set(
                            produce((state)=>{
                                state.users.address1 = address1;
                            })
                        ),

                        updateaddress2: (address2)=> 
                            set(
                                produce((state)=>{
                                    state.users.address2 = address2;
                                })
                            ),

                            updatecity: (city)=> 
                                set(
                                    produce((state)=>{
                                        state.users.city = city;
                                    })
                                ),

                                updatestates: (states)=> 
                                    set(
                                        produce((state)=>{
                                            state.users.states = states;
                                        })
                                    ),

                                    updatecountry: (country)=> 
                                        set(
                                            produce((state)=>{
                                                state.users.country = country;
                                            })
                                        )
}))