import React, { useState } from 'react';
import { Clock } from './Clock';
import { useWindowWidth } from './useWindowWidth';

export default function App () {
  const widht = useWindowWidth()
  const [isClockHidden, setIsClockHidden] = useState(false)

 
    if (isClockHidden) {
      return <h1>Clock is hidden</h1>
    }

    return (
      <div>
        <button onClick={ () => setIsClockHidden(true)}>Hide Clock</button>
        <Clock />
        <h1>{widht}</h1>
      </div>  
    )   
}

