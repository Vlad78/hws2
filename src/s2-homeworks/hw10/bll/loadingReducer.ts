const initState = {
  isLoading: false,
};

type ActionType = ReturnType<typeof loadingAC>;

export const loadingReducer = (state = initState, action: ActionType): typeof initState => {
  // fix any
  switch (action.type) {
    case "CHANGE_LOADING": {
      return { ...state, isLoading: action.isLoading };
    }

    default:
      return state;
  }
};

type LoadingActionType = {
  type: "CHANGE_LOADING";
  isLoading: boolean;
};

export const loadingAC = (isLoading: boolean): LoadingActionType =>
  ({
    type: "CHANGE_LOADING",
    isLoading,
  } as const);
