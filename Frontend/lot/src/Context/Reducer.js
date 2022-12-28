let token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";
let name = localStorage.getItem("name")
? localStorage.getItem("name")
: "";

let username = localStorage.getItem("username")
  ? localStorage.getItem("token")
  : "";
let team = localStorage.getItem("team")
  ? localStorage.getItem("team")
  : "";

// let username=localStorage.getItem("userdetails").username
//     ? localStorage.getItem("userdetails").username
//     : "";
// let level=localStorage.getItem("userdetails").level
//     ? localStorage.getItem("userdetails").level
//     : 0;

export const initialState = {
  token: token,
  name:name,
  username:username,
  team:team
};
 
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'set':
      const {token,username,team,name}=action.payload;
      console.log("in reducer "+username)
      return{
        ...initialState,
        token,
        username,
        team,
        name
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};