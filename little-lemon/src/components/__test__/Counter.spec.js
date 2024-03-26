import { initializeTimes, updateTimes } from '../../components/Main'; 

// Unit test for initializeTimes function
test('initializeTimes returns expected initial state', () => {
  // Define the expected initial state
  const expectedInitialState = [
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];
  
  // Call initializeTimes function
  const initialState = initializeTimes();
  
  // Check if the initial state matches the expected state
  expect(initialState).toEqual(expectedInitialState);
});


// Unit test for updateTimes function
test('updateTimes returns the same value as provided in the state', () => {
  // Define an example state
  const currentState = [
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];
  
  // Call updateTimes function with an example action
  const nextState = updateTimes(currentState);
  
  // Check if the next state is equal to the current state
  expect(nextState).toEqual(currentState);
});








/*import { render, fireEvent, screen } from '@testing-library/react'

import { Newpage } from '../newpage'

test('newpage', () => { 

    render(<Newpage />);
    const newpage = screen.getByTestId('submit');
    
    expect(newpage).toBeInTheDocument();
 }) */






/*
import Counter from '../Counter'


test("increments counter", () => {

    render(<Counter />);

    const counter = screen.getByTestId('counter');
    const incrementBtn = screen.getByTestId('increment');

    fireEvent.click(incrementBtn);

    expect(counter).toHaveTextContent('2')


 })*/