let token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";
let name = localStorage.getItem("name")
? localStorage.getItem("name")
: "";

let email = localStorage.getItem("email")
  ? localStorage.getItem("email")
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
  email:email,

};
 
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'set':
      const {token,email,name}=action.payload;
      console.log("in reducer "+email)
      return{
        ...initialState,
        token,
        email,
        name
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};