import React from 'react';
import pokemons from './data'
import Pokemon from './Pokemon'
import './Pokedex.css';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex : 0
    }
    this.nextPokemon = this.nextPokemon.bind(this);
  }

  nextPokemon = () => {
    let nextIndex = 0;
    this.setState((prevState, _props) => {
      if (prevState.pokemonIndex < pokemons.length - 1) {
        nextIndex = this.state.pokemonIndex + 1;
      }
      return {pokemonIndex: nextIndex};
    });
  };

  render() {
    const myPokemon = pokemons[this.state.pokemonIndex];
    return (
      <div className="main">        
        <h1>Trybe Pokedex</h1>
        <div className="div-pokedex">
          { pokemons.filter((item) => item.id === myPokemon.id)
            .map((item, index) => 
            <Pokemon key={index} myPokemon={item} />
          )}
        </div>
        <button onClick={this.nextPokemon}>Próximo</button>
      </div>
    )
  }
}

export default Pokedex;