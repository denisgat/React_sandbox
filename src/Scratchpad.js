import React from 'react';
import Count from './components/Counter'
import Clock from './components/Clock'
import EggList from './components/EasterEgg'
import { render } from '@testing-library/react';



function scratch() {
    return (
        <div className = "text-center">
            <h1>
                This is the Counter Kata
            </h1>
            <Count />
            <br/>
            <h1>This is the EasterEgg Kata!</h1>
            {/* Need to transfer finished */}
            <EggList/>
            <br/>
            <h1> This is the Clock React Example</h1>
            <br/>
            <Clock/>
            <br/>
        </div>
    )
}

export default scratch