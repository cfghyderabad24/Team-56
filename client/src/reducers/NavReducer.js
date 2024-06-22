

const initState = "Login"
export default function NavReducer(state=initState, action){
    switch(action.type) {
  
        case "Registration":
            return "Registration";
        case "Entry":
            return "Entry";
        case "Error":
            return "Error";
        case "Student":
            return "Student";
        case "Admission":
            return "Admission";
        case "Home":
            return "Home";     
        case "ViewData":
            return "ViewData";
        case "Faculty":
            return "Faculty";
        case "Facultydata":
            return "Facultydata";  
   
        case "Home":
            return "Home";
        default:
            return "Login";
    }

}