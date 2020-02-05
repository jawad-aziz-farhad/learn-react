import * as React from 'react';
import axios from 'axios';

const Dashboard = (props : any) => {

  React.useEffect(() => {
    console.log('User Params', props.location.state);
  })
  return (
    <div className="container">

    </div>
  )
};
export default Dashboard;