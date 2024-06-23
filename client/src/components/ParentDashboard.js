import React from 'react';
import { Grid, Paper, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';
<StudentRemarksVisualisation firstName={entry.firstName} lastName={entry.lastName} data={entry.remarks} />
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement);

function getDaysInMonth(month, year) {
    
    const date = new Date(year, month, 1);
  
    date.setDate(0);
  
    
    return date.getDate();
}

const StudentMonthlyAttendance = ({ data }) => {
    
    const attendanceData = data.attendance_data;

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  
    const monthlyAttendance = attendanceData.reduce((acc, curr) => {
      const month = parseInt(curr.date.split("/")[1]) - 1;
      const year = parseInt(curr.date.split("/")[2]);
      const key = `${month}-${year}`;
      acc[key] = (acc[key] || 0) + (curr.is_present ? 1 : 0);
      return acc;
    }, {});

    let totalAttended = 0.0;
    let totalDays = 0;

    const monthlyAttendanceInPercent = Object.keys(monthlyAttendance).reduce((acc, curr) => {
        const [month, year] = curr.split("-");
        const days = getDaysInMonth(month, year);
        totalDays += days;
        totalAttended += monthlyAttendance[`${month}-${year}`];
        acc[`${months[month-1]}-${year}`] = (monthlyAttendance[`${month}-${year}`] / days) * 100;
        return acc;
    }, {});

  
    
    const monthLabels = Object.keys(monthlyAttendanceInPercent);
    const attendanceValues = Object.values(monthlyAttendanceInPercent);
  
    const chartData = {
      labels: monthLabels,
      datasets: [
        {
          label: `${data.personal_information.firstName} ${data.personal_information.lastName}'s Attendance: ${totalAttended * 100 / totalDays}%`,
          data: attendanceValues,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          stacked: false,
        },
      ],
    };
  
    return (
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          {`${data.personal_information.firstName} ${data.personal_information.lastName}'s Monthly Attendance: ${totalAttended * 100 / totalDays}%`}
        </Typography>
        <Line data={chartData} options={{scales: {y: {beginAtZero: true, min: 0, max: 100}}}} />
      </Box>
    );
  };

const ChildData = ({ data }) => {
  const { firstName, lastName } = data.personal_information;
  const week_wise_data = data["week_wise_data"];
  const labels = week_wise_data.map((item) => item.week_number);
  const ratings = week_wise_data.map((item) => item.rating);

  const chartData = {
    labels,
    datasets: [
      {
        label: `${firstName} ${lastName}'s Rating`,
        data: ratings,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 5,
      },
    ],
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        {`${firstName} ${lastName}'s Rating`}
      </Typography>
      <Line data={chartData} options={{}} />
    </Box>
  );
};

const OverallAverage = ({ overall_average_of_all_children }) => (
  <Paper sx={{ padding: 2 }}>
    <Typography variant="h6" gutterBottom>
      Overall Average of all students: {overall_average_of_all_children}
    </Typography>
  </Paper>
);

const StudentInfoTable = ({ data }) => {
    const { firstName, lastName, id, disability } = data.personal_information;
    let average = 0.0;
    data["week_wise_data"].forEach(week_info => {
        average += week_info.rating;
    });
    average /= data["week_wise_data"].length;
  
    return (
      <TableContainer component={Paper}>
        <Table sx={{ width: '100%' }}>
          <TableHead style={{background: "#FFF5E1"}}>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Disability</TableCell>
              <TableCell>Overall Average</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={id}>
              <TableCell>{firstName}</TableCell>
              <TableCell>{lastName}</TableCell>
              <TableCell>{id}</TableCell>
              <TableCell>{disability}</TableCell>
              <TableCell>{average.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const StudentRemarksTable = ({ data }) => {
    const week_wise_data = data.week_wise_data;
  
    return (
      <TableContainer component={Paper}>
        <Table sx={{ width: '100%' }}>
          <TableHead style={{background: "#FFF5E1"}}>
            <TableRow>
              <TableCell>Week Number</TableCell>
              <TableCell>Remarks by instructor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {week_wise_data.map((week_data, index) => (
                <TableRow key={index}>
                    <TableCell>{week_data.week_number}</TableCell>
                    <TableCell>{week_data.remarks}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };


const ParentDashboard = ({ data }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <OverallAverage overall_average_of_all_children={data.overall_average_of_all_children} />
      </Grid>
      {data.children_data.map((child, index) => (
        <React.Fragment key={index}>
        <Grid item xs={3} key={`${child.personal_information.id}_1`}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <StudentInfoTable data={child} />
            </Box>
        </Grid>
        <Grid item xs={3} key={`${child.personal_information.id}_2`}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <StudentRemarksTable data={child} />
            </Box>
        </Grid>
        <Grid item xs={3} key={`chart1-${child.personal_information.id}`}>
          <StudentMonthlyAttendance data={child} />
        </Grid>
        <Grid item xs={3} key={`chart2-${child.personal_information.id}`}>
          <ChildData data={child} />
        </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default ParentDashboard;