import React, { Component } from "react";

export const CharactersContext = React.createContext();

class CharactersProvider extends Component {
  state = {
    charactersData: [],
    currentlySelectedIndex: 0,
    isLoading: true,
  };

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          this.loadData(data.results);
        }, 1500);
      });
  }

  handleNext = () => {
    this.setState((prevState) => {
      return { currentlySelectedIndex: prevState.currentlySelectedIndex + 1 };
    });
  };

  handleBack = () => {
    this.setState((prevState) => {
      return { currentlySelectedIndex: prevState.currentlySelectedIndex - 1 };
    });
  };

  loadData = (charactersData) => {
    this.setState({ charactersData, isLoading: false });
  };

  render() {
    const value = {
      handleNext: this.handleNext,
      handleBack: this.handleBack,
      charactersData: this.state.charactersData,
      currentlySelectedIndex: this.state.currentlySelectedIndex,
      disableLoading: this.disableLoading,
      isLoading: this.state.isLoading,
      loadData: this.loadData,
    };

    return (
      <CharactersContext.Provider value={value}>
        {this.props.children}
      </CharactersContext.Provider>
    );
  }
}

export default CharactersProvider;
export const CharactersConsumer = CharactersContext.Consumer;
