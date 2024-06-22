

const initState = "Login"
export default function NavReducer(state=initState, action){
    switch(action.type) {
        case "Login":
            return "Login";
        case "Registration":
            return "Registration";
        case "Entry":
            return "Entry";
        case "Error":
            return "Error";
        case "Student":
            return "Student";
   
        default:
            return "Login";
    }

}