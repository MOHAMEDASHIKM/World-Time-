import React from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment-timezone';
import "./fullScreen.css";

const FullScreenTimezone = () => {
  const { timezone } = useParams();

  return (
    <div id="full-screen-body">
      <h1>{timezone.toUpperCase()}</h1>
      <h2>Current Time: {moment().tz(timezone).format('h:mm:ss A')}</h2>
      <h3>Date: {moment().tz(timezone).format('DD/MM/YYYY')}</h3>
      <h3>Day: {moment().tz(timezone).format('dddd')}</h3>
      <h3>UTC Offset: {moment().tz(timezone).format('Z')}</h3>
      <h3>GMT Offset: {moment().tz(timezone).format('zz')}</h3>
    </div>
  );
};

export default FullScreenTimezone;
