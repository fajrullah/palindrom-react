
import React, { useState } from 'react';
function App() {
  const [isPalindrome, setPalindrome] = useState(false)
  const [char, setChar] = useState('')
  const handleChange = (e) => {
    const value = e.target.value
    const re = /[\W_]/g;
    const stringLower = value.toLowerCase().replace(re, '');
    const stringReverse = value.split('').reverse().join('');
    setPalindrome(stringReverse === stringLower)
    setChar(value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Check Palindrome
        </p>
        <input onChange={handleChange} placeholder="Enter here..." value={char} />
        <p>
          {
            (isPalindrome && char.length ) ? "It's Palindrome" : "It's not Palindrome"
          }
        </p>
      </header>
    </div>
  );
}

export default App;
