import React, { FunctionComponent, useState, useEffect } from 'react';
import axios from 'axios';

const Example: FunctionComponent = () => {
  const [initialValue, setInitialValue] = useState(null);

  useEffect(() => {
    console.log('mounted');
  }, []);

  return (
    <>
      <div className="container mx-auto px-4">
          Mounted!
      </div>
    </>
    )
};

export default Example;
