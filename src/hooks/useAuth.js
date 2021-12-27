import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { createAction } from "../config/createAction";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useAuth() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_USER":
          return {
            ...state,
            loading: false,
            user: { ...action.payload },
          };
        case "REMOVE_USER":
          return {
            ...state,
            user: undefined,
          };
        case "SET_LOADING":
          return {
            ...state,
            loading: action.payload,
          };
        default:
          return state;
      }
    },
    { user: undefined, loading: true }
  );
  const auth = React.useMemo(
    () => ({
      login: async (email, password) => {
        try {
          const { data } = await axios.post(
            "http://192.168.43.20:8000/api/v1/auth/login",
            {
              email,
              password,
            }
          );
          const user = data;

          try {
            await AsyncStorage.setItem("user", JSON.stringify(user));
          } catch (e) {
            console.log(e);
          }
          dispatch(createAction("SET_USER", user));
        } catch (e) {
          console.error(e);
        }
      },
      logout: async () => {
        await AsyncStorage.removeItem("user");
        dispatch(createAction("REMOVE_USER"));
      },
      register: async (email, username, password) => {
        try {
          const response = await axios.post(
            "http://192.168.43.20:8000/api/v1/auth/signup",
            {
              email,
              username,
              password,
            }
          );
          console.log(response.data);
          return response.data;
        } catch (e) {
          console.error(error);
        }
      },
    }),
    []
  );
  useEffect(() => {
    setTimeout(getUser, 500);
  }, []);
  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        dispatch(createAction("SET_USER", JSON.parse(user)));
      } else {
        dispatch(createAction("SET_LOADING", false));
      }
    } catch (e) {
      console.log(e);
    }
  };
  return { auth, state };
}
