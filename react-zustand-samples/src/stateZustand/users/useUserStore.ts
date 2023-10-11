import create from "zustand";
import { devtools } from "zustand/middleware";
import type { FetchMeOutput } from "./query/me";
import { persistentStorage } from "@/libs/persistentStorage";
import { immer } from "zustand/middleware/immer";
type User = FetchMeOutput;

export type UserState = {
  user: User | null;
  isUserLoggedIn: boolean;
  initialised: boolean;
};
export type UserAction = {
  setUser: (user: User) => void;
  setIsUserLoggedIn: () => void;
  setInitialised: (init: boolean) => void;
  verify: () => void;
  logout: () => void;
};

const initialState: UserState = {
  user: null,
  isUserLoggedIn: false,
  initialised: false,
};

const useUserStore = create<UserState & UserAction>()(
  immer(
    devtools(
      (set, get) => ({
        ...initialState,
        setUser: (user) =>
          set(
            (state) => {
              state.user = user;
            },
            false,
            {
              type: "user/setUser",
              user,
            }
          ),
        setInitialised: (initialised: boolean) =>
          set(
            (state) => {
              state.initialised = initialised;
            },
            false,
            {
              type: "user/init",
            }
          ),
        setIsUserLoggedIn: () =>
          set(
            (state) => {
              state.isUserLoggedIn = get().user !== null;
              state.initialised = true;
            },
            false,
            {
              type: "user/setIsUserLoggedIn",
            }
          ),
        verify: () =>
          set(
            (state) => {
              state.isUserLoggedIn = get().user !== null;
            },
            false,
            {
              type: "user/verify",
            }
          ),
        logout: () =>
          set(
            (state) => {
              state.user = null;
              state.isUserLoggedIn = false;
              state.initialised = false;
              persistentStorage.remove("accessToken");
              persistentStorage.remove("refreshToken");
            },
            false,
            {
              type: "user/logout",
            }
          ),
      }),
      {
        name: "users-store",
      }
    )
  )
);
export default useUserStore;
