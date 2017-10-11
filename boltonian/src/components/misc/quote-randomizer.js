import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

const styles = {
  container: {
    display: 'block',
    color: '#2D3142',
    fontFamily: 'madelynregular',
    fontSize: '70px',
    textAlign: 'center',
    height: '55px',
    paddingTop: '20px'
  }

};


class QuoteRandomizer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      quotes: [],
      selectedQuote: '',
    };
    this.loadQuotes = this.loadQuotes.bind(this);
  };

	loadQuotes() {
    axios.get(this.props.source)
      .then(res => {
        const quotes = res.data;
        console.log('quotes',res.data)
        this.setState({ quotes });
      })
  }

  chooseRandomQuote() {
    const randomNumber = Math.floor(Math.random() * this.state.quotes.length);
    console.log('randomNumber', randomNumber);
    const selectedQuote = this.state.quotes[randomNumber];
    console.log('selectedQuote', selectedQuote);
    this.setState({selectedQuote: selectedQuote.content.rendered});
  }
	
  componentDidMount() {
    this.loadQuotes();
    this.chooseRandomQuote();
  }

  render() {
    const items = this.state.selectedQuote;

    console.log('items', items)

    return (
      <div className="home-page-wp">
        <ul className="info-items">
          {items}
        </ul>
      </div>
    );
  }
}

export default QuoteRandomizer;

