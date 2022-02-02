import cookie from "js-cookie";
// import { getLoginEmployee } from "../services/userServices";
// import CustomApi from "../helper/CustomApi";

// declare global {
//     interface Window { MyNamespace: any; }
// }

// interface Params{
//     key?:string,
//     value?:string
// }

export const setCookie = (key: string, value: string) => {
  if ((window as any) !== "undefined") {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

export const removeCookie = (key: string) => {
  if ((window as any) !== "undefined") {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

export const getCookie = (key: string) => {
  if ((window as any) !== "undefined") {
    return cookie.get(key);
  }
};

export const setLocalStorage = (key: string, value: string) => {
  if ((window as any) !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key: string) => {
  if ((window as any) !== "undefined") {
    localStorage.removeItem(key);
  }
};

interface APIresponse {
  data: {
    key: string;
    value: string;
  };
}

export const authenticate = (response: APIresponse, next: () => void) => {
  setCookie("token", response.data.value);
  setLocalStorage("employee", response.data.key);
  next();
};

export const isAuth = () => {
  if ((window as any) !== "undefined") {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("employee")) {
        let employee = "asksd";
        // return JSON.parse(window.localStorage.getItem("employee"));
        return employee;
      } else {
        return false;
      }
    }
  }
};

// export const signout = (next:()=>void) => {
//   removeCookie("token");
//   removeLocalStorage("employee");
//   next();
// };

// export const updateUser = (response:APIresponse, next:()=>void) => {
//   console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
//   if (typeof (window as any) !== "undefined") {
//     let auth = JSON.parse(localStorage.getItem("employee"));
//     auth = response.data;
//     localStorage.setItem("user", JSON.stringify(auth));
//   }
//   next();
// };

// export const CheckForPermission = async () => {
//  const isTrue = getLoginUserDetails().toString() === displayInvestmentAccess().toString() ? true : false
//  return isTrue;
// }

// export const getLoginUserDetails = async () => {
//   const response = await CustomApi.get('api/employeeByToken');
//   let access;
//   if(response){
//     access = response.data && response.data.map(item => {
//      return item.confirmation_process.length && item.confirmation_process[item.confirmation_process.length - 1].process
//        ? item.confirmation_process[item.confirmation_process.length - 1]
//              .process
//          : 0;
//    });

//   }
//   console.log(access.toString());
//   return access.toString();
// };

// export const displayInvestmentAccess = (myArray) =>  myArray.map((item) =>  item.confirmation_process_id)
