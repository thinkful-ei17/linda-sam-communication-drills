import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: this.props.characters
    }
  }

  characterFilter(input) {
    console.log("Hi i am character", this.props.characters);
    //filter first based on input
    //new list based on filter , pass to CharacterList with setState characters update
    
    let updatedCharacters = this.props.characters.filter(char => char.name.toLowerCase().indexOf(input.toLowerCase()) > -1);

    return this.setState({characters: updatedCharacters}); 
  }  

  render(){
    console.log(this.state.characters);
      return (
        <div className="live-search">
            <SearchForm onInput={(input) => this.characterFilter(input)}/>
            <CharacterCount count={this.state.characters.length} />
            <CharacterList characters={this.state.characters} />
        </div>
    );

  }
}  