import ParentDashboard from "./ParentDashbord";

function  Data(){
    const data = {
        "overall_average_of_all_children": 7.8,
        "children_data": [
            {
                "personal_information": {
                    "firstName": "ABCD",
                    "lastName": "EFGH",
                    "id": 1234,
                    "disability": "Autism"
    
                },
                "week_wise_data": [
                    {
                        "week_number": 1,
                        "remarks": "Good",
                        "rating": 7.8
                    },
                    {
                        "week_number": 2,
                        "remarks": "Great",
                        "rating": 8.2
                    },
                    {
                        "week_number": 3,
                        "remarks": "Superb",
                        "rating": 8.1
                    },
                    {
                        "week_number": 4,
                        "remarks": "Good",
                        "rating": 7.9
                    }
                ],
                "attendance_data": [
                    {
                        "date": "23/06/2024",
                        "is_present": true
                    },
                    {
                        "date": "24/06/2024",
                        "is_present": false
                    },
                    {
                        "date": "25/06/2024",
                        "is_present": false
                    },
                    {
                        "date": "26/06/2024",
                        "is_present": true
                    },
                    {
                        "date": "27/06/2024",
                        "is_present": true
                    },
                    {
                        "date": "28/06/2024",
                        "is_present": false
                    },
                    {
                        "date": "29/06/2024",
                        "is_present": false
                    },
                    {
                        "date": "30/06/2024",
                        "is_present": true
                    },
                    {
                        "date": "01/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "02/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "03/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "04/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "05/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "06/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "07/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "08/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "09/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "10/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "11/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "12/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "13/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "14/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "15/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "16/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "17/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "18/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "19/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "20/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "21/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "22/07/2024",
                        "is_present": true
                    }
                ]
            },
            {
                "personal_information": {
                    "firstName": "XYZ",
                    "lastName": "EFGH",
                    "id": 12345,
                    "disability": "Autism"
    
                },
                "week_wise_data": [
                    {
                        "week_number": 1,
                        "remarks": "AAA",
                        "rating": 7.1
                    },
                    {
                        "week_number": 2,
                        "remarks": "BBB",
                        "rating": 7.2
                    },
                    {
                        "week_number": 3,
                        "remarks": "CCC",
                        "rating": 7.2
                    },
                    {
                        "week_number": 4,
                        "remarks": "DDD",
                        "rating": 7.3
                    }
                ],
                "attendance_data": [
                    {
                        "date": "23/06/2024",
                        "is_present": true
                    },
                    {
                        "date": "24/06/2024",
                        "is_present": false
                    },
                    {
                        "date": "25/06/2024",
                        "is_present": false
                    },
                    {
                        "date": "26/06/2024",
                        "is_present": true
                    },
                    {
                        "date": "27/06/2024",
                        "is_present": true
                    },
                    {
                        "date": "28/06/2024",
                        "is_present": false
                    },
                    {
                        "date": "29/06/2024",
                        "is_present": false
                    },
                    {
                        "date": "30/06/2024",
                        "is_present": true
                    },
                    {
                        "date": "01/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "02/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "03/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "04/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "05/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "06/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "07/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "08/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "09/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "10/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "11/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "12/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "13/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "14/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "15/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "16/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "17/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "18/07/2024",
                        "is_present": false
                    },
                    {
                        "date": "19/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "20/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "21/07/2024",
                        "is_present": true
                    },
                    {
                        "date": "22/07/2024",
                        "is_present": true
                    }
                ]
            }
        ]
    }
    return (
        <>
            <ParentDashboard data={data} />
        </>
    );
}