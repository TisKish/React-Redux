// 1. Import the React and ReactDOM Libraries
// The React library defines what a component is and how they work together
import React from 'react';
// The ReactDOM Library gets a component to show up in the browser. E.g. If you wanted mobile support you would also import ReactNative
import ReactDOM from 'react-dom/client';

// 2. Get a reference to the dive with ID root 
const el = document.getElementById('root');

// 3. Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4. Create a component
function App() {
    return <h1>Hi there!</h1>;
}

// 5. Show the component on the screen
root.render(<App />);