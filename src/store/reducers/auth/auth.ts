import { IUser } from "../../../models/IUser";
import { AuthActions, AuthActionsEnum, AuthState } from "./types";

const InitianalState: AuthState = {
  isAuth: false,
  error: '',
  isLoading: false,
  user: {} as IUser
}

export default function authReducer(state = InitianalState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH: 
      return {...state, isAuth: action.payload, isLoading: false}
    case AuthActionsEnum.SET_ERROR:
      return {...state, error: action.payload, isLoading: false}
    case AuthActionsEnum.SET_IS_LOADING:
      return {...state, isLoading: action.payload}
    case AuthActionsEnum.SET_USER:
      return {...state, user: action.payload}

    default:
      return state;
  }
}