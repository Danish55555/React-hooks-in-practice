import React, { useRef } from 'react';

function UseRefExample() {
  // Create a reference to the input element with the correct type
  const inputRef = useRef<HTMLInputElement>(null);

  // Function to focus the input field
  const handleFocus = () => {
    inputRef.current?.focus(); // Use optional chaining to safely access the DOM element
  };

  return (
    <>
      <div>
        <h1>UseRef in Practice</h1>
        <input ref={inputRef} type="text" placeholder="Type something..." />
        <button onClick={handleFocus}>Focus Input</button>
      </div>
    </>
  );
}

export default UseRefExample;
