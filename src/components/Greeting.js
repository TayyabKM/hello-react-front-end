import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, isLoading } = useSelector((store) => store.greeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  const greetingStyle = {
    color: 'blue',
    fontSize: '24px',
  };

  const loadingStyle = {
    fontSize: '20px',
  };

  return (
    <div>
      <h2 style={greetingStyle}>Greetings</h2>
      {isLoading && <h1 style={loadingStyle}>Loading...</h1>}
      {greeting && <h1>{greeting}</h1>}
    </div>
  );
};

export default Greeting;
