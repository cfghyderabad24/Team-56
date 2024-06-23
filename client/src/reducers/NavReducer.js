

const initState = "Login"
export default function NavReducer(state = initState, action) {
    switch (action.type) {

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
        case "Volunteer":
            return "Volunteer";
        case "Volunteerdata":
            return "Volunteerdata";
        case "Home":
            return "Home";
        case "Login":
            return "Login";
        case "Registration":
            return "Registartion";
        case "Viewdatas":
            return "Viewdatas";
        case "Profile":
            return "Profile";
          
      

        default:
            return "Login";
    }

}