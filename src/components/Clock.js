import React from 'react';

//functional based Clock

// function tick() {
//     return(
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//      ReactDOM.render(element, document.getElementById('root'));
// }


    //   setInterval(tick, 1000);

  

//turning functional based React to Class based

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render(){
        return(
            <h2 className="border">It is {this.state.date.toLocaleTimeString()}.</h2>
        )
     }
 }

export default Clock