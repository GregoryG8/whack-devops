import React from 'react';

const Hours = () => {
  const today = new Date().getDay();

  const weekdayHours = '10 a.m. - 4 p.m.';
  const weekendHours = '9 a.m. - 8 p.m.';

  const openingHours = (today >= 1 && today <= 5) ? weekdayHours : weekendHours;

  return (
    <div>
      <h2>Today's Shelter Hours...</h2>
      <p>{openingHours}</p>
    </div>
  );
};

export default Hours;