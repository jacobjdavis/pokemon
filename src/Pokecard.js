import React, { Component } from 'react';
import './Pokecard.css';

// const POKE_API="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
class Pokecard extends Component{
    render() {
        let num = this.props.id.toString().padStart(3, "0");
        console.log(num.padStart(3, "0"));
        let imgSrc = `${POKE_API}${num}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name} />
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">Experience: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;