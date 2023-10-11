import create from "zustand";
import { devtools } from "zustand/middleware";
import type { memberCreateSchema } from "@/stores/members/mutation/create";
import { immer } from "zustand/middleware/immer";
import type { z } from "zod";
import type { schema } from "@/models/member";

type SavedMembership = z.infer<typeof memberCreateSchema>;
type Membership = z.infer<typeof schema>;

export type UserState = {
  savedMembership?: SavedMembership;
  membership?: Membership;
};
export type UserAction = {
  setSavedMembership: (savedMembership: SavedMembership) => void;
  setMembership: (membership: Membership) => void;
};

const initialState: UserState = {
  savedMembership: undefined,
  membership: {
    memberTypeId: "BN",
  },
};

const useMemberStore = create<UserState & UserAction>()(
  immer(
    devtools((set, get) => ({
      ...initialState,
      setSavedMembership: (savedMembership) =>
        set(
          (state) => {
            state.savedMembership = savedMembership;
          },
          false,
          {
            type: "member/setSavedMembership",
            savedMembership,
          }
        ),
      setMembership: (membership) =>
        set(
          (state) => {
            state.membership = membership;
          },
          false,
          {
            type: "member/setMembership",
            membership,
          }
        ),
    }))
  )
);
export default useMemberStore;
