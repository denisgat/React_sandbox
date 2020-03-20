import React from 'react';

//Class based Easter Egg Kata
// class EasterEggy extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {eggs: ['bobby','bently','barnell','bonface']}
//     }
//     render(){
//         return (
//             <EggList eggs={this.state.eggs}/>
//         )
//     }
    
// } 

//Function based easter Egg Kata
const EggList = () => {
      const eggs_arr = ['bobby','bently','barnell','bonface']
      const eggs = eggs_arr.map((egg,i) => {
      return<EasterEgg key={i} name={egg}></EasterEgg>
    })
    return (
      <ul>
          {eggs}
      </ul>  
      )
};

const EasterEgg = (props) => {
    return(
    <li>{props.name}</li>
    )
};

export default EggList