declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";

// interface IUser {
//     id: number
//     title: string
//     body: string
//   }

type UserState = {
  payload: IUser[];
};
type UserStates = {
  loading: boolean;
  user: {};
};

type Action = {
  type: string;
  payload?: any;
};

type DispatchType = (args: Action) => Action;
