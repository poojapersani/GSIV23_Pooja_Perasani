import React from 'react';
import HomePageComponent from './HomePageComponent'

const ParentComponent = () => {
  return (
    <div>
      {/* Pass showSearch and showHome props */}
      <HomePageComponent />
      {/* Other content */}
    </div>
  );
};

export default ParentComponent;
