let token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";
let name = localStorage.getItem("name")
? localStorage.getItem("name")
: "";

let email = localStorage.getItem("email")
  ? localStorage.getItem("email")
  : "";
let college = localStorage.getItem("college")
  ? localStorage.getItem("college")
  : "";
let committee = localStorage.getItem("committee")
  ? localStorage.getItem("committee")
  : "";
let assigned = localStorage.getItem("assigned")
  ? localStorage.getItem("assigned")
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
  college:college,
  committee:committee,
  assigned:assigned

};
 
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'set':
      const {token,email,name,college,committee,assigned}=action.payload;
      console.log("in reducer "+college)
      return{
        ...initialState,
        token,
        email,
        name,
        college,
        committee,
        assigned
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};