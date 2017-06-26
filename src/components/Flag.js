import React from 'react';

// const data = {
//   'cu': {
//     'name': 'Cuba',
//     'icon': 'flag-cu.png',
//   },
//   'fr': {
//     'name': 'France',
//     'icon': 'flag-fr.png',
//   },
//   'jp': {
//     'name': 'Japan',
//     'icon': 'flag-jp.png',
//   },
//   'nl': {
//     'name': 'Netherlands',
//     'icon': 'flag-nl.png',
//   },
//   'uz': {
//     'name': 'Uzbekistan',
//     'icon': 'flag-uz.png',
//   }
// }

// export default class Flag extends React.Component {
//   render() {
//     const name = data[tis.props.code].name;
//     const icon = data[tis.props.code].icon;
//
//     return (
//       <span className="flag">
//         <img className="icon" title={name} src={`/img/${icon}`}/>
//         {this.props.showName && <span className="name"> {name}</span>}
//       </span>
//     )
//   }
// }

export const Flag = props => (
  <span className="flag">
    <img className="icon" title={props.name} src={`/img/${props.icon}`} alt={`${props.name}'s flag`} />
    {props.showName && <span className="name"> {props.name} </span>}
  </span>
)

export default Flag;
