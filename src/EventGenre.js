import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer,Cell } from 'recharts';

const EventGenre = ({ events }) => {

  const [data, setData] = useState([]);
  // eslint-disable-next-line
  useEffect(() => { setData(() => getData());}, [events]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
      return { name: genre, value };
    });
    return data;
  };

  //Colors of Pie chart 
  const colors = ["#00a1fe", "#00c46c", "#ffc928", "#f56464"];

  return (
    <ResponsiveContainer height={400} >
      <PieChart width={400} height={400}>
        <Pie 
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
            {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]}/>
          ))
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre; 