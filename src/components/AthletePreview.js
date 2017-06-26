import React from 'react';
import { Link } from 'react-router';

export const AthletePreview = (props)=>{
  <Link to={`/athlete/${this.props.id}`}>
    <div className="athlete-preview">
      <img src={`img/${props.image}`} />
      <h2 className="name">{props.name}</h2>
      <span className="medals-count">
        <img src="/img/medal.png"/> {props.medals.length}
      </span>
    </div>
  </Link>
}

export default AthletePreview;
