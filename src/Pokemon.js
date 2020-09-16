import React from 'react';
import './Pokemon.css';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit}, image } = this.props.myPokemon;
    return (
      <div className="div-pokemon">
        <div>
          <p className="title"> {name} </p>
          <p> {type} </p>
          <p> {`Average weight ${value} ${measurementUnit}`}  </p>
        </div>
        <div>
          <img src={image} alt={name} />
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.object,
  image: PropTypes.string
};

export default Pokemon;