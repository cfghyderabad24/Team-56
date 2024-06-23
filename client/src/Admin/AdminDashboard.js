import React from 'react';
import { Grid, Typography } from '@mui/material';
import { LineChart, Line, BarChart, Bar, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const data = [
  { month: 'Jan', students: 100, instructors: 20, enrollment: 120, donations: 5000, performance: 75 },
  { month: 'Feb', students: 120, instructors: 22, enrollment: 140, donations: 5500, performance: 80 },
  { month: 'Mar', students: 130, instructors: 25, enrollment: 150, donations: 6000, performance: 85 },
  // Add more data for each month
];

const scatterData = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: 45, y: 100 },
  { x: 50, y: 400 },
  { x: 70, y: 150 },
  { x: 100, y: 250 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const App = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
       Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="h6">Attendance</Typography>
            <LineChart width={600} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="students" stroke="#8884d8" />
              <Line type="monotone" dataKey="instructors" stroke="#82ca9d" />
            </LineChart>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="h6">Enrollment</Typography>
            <BarChart width={600} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="enrollment" fill="#8884d8" />
            </BarChart>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="h6">Donations</Typography>
            <LineChart width={600} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="donations" stroke="#8884d8" />
            </LineChart>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="h6">Student Performance</Typography>
            <ScatterChart width={600} height={300}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" type="number" />
              <YAxis dataKey="y" type="number" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter name="A Scatter" data={scatterData} fill="#8884d8" />
            </ScatterChart>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="h6">Donations Distribution</Typography>
            <PieChart width={400} height={300}>
              <Pie dataKey="value" data={data} cx={200} cy={150} outerRadius={60} fill="#8884d8">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
