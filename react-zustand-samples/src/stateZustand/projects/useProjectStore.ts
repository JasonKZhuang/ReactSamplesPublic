import create from "zustand";
import { devtools } from "zustand/middleware";

import type { ZustandHookSelectors } from "auto-zustand-selectors-hook";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import type { FetchProjectsOutput } from "./query/projects";
import { immer } from "zustand/middleware/immer";
import deferredPersist from "../middlewares/deferredPersist";
import { currentYear } from "@/libs/date";

let resolveHydratePromise;

export const HydratePromise = new Promise<void>((resolve) => {
  resolveHydratePromise = resolve;
});

type Project = FetchProjectsOutput[number];
export type SelectedProject = Pick<
  Project,
  | "id"
  | "sellPrice"
  | "price"
  | "tax"
  | "title"
  | "projectStockId"
  | "taxApplicable"
> & {
  tonnes: number;
  canPurchase?: boolean;
};

type FY = { year: string };

export type ProjectState = {
  selectedProjects: SelectedProject[];
  fy: FY;
};
export type ProjectAction = {
  setSelectedProjects: (selectedProjects: SelectedProject[]) => void;
  setFY: (fy: FY) => void;
};

const initialState: ProjectState = {
  selectedProjects: [],
  fy: { year: currentYear.toString() },
};

const useProjectStoreBase = create<ProjectState & ProjectAction>()(
  immer(
    devtools(
      deferredPersist(
        (set) => ({
          ...initialState,
          setSelectedProjects: (selectedProjects: SelectedProject[]) =>
            set(
              (state) => {
                state.selectedProjects = selectedProjects;
              },
              false,
              {
                type: "project/setSelectedProjects",
                selectedProjects,
              }
            ),
          setFY: (fy: FY) =>
            set(
              (state) => {
                state.fy = fy;
              },
              false,
              {
                type: "project/setFY",
                fy,
              }
            ),
        }),
        {
          name: "projects-store",
          getStorage: () => localStorage,
          hydrateOnResolve: HydratePromise,
        }
      )
    )
  )
);

export const useProjectStore = createSelectorHooks(
  useProjectStoreBase
) as typeof useProjectStoreBase &
  ZustandHookSelectors<ProjectState & ProjectAction>;

export const useTotalTonnesSelected = () => {
  const { selectedProjects } = useProjectStore();
  if (selectedProjects.length > 0) {
    return selectedProjects
      .map((selectedProject) => selectedProject.tonnes)
      .reduce((current, previous) => current + previous, 0);
  }
  return 0;
};

export const ResolveIsHydrated =
  resolveHydratePromise ||
  function () {
    console.log("resolveHydratePromise");
    // return Promise.resolve();
  };
