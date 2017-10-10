import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {

  state = {
    quote: ''
  }

  getQuote = () => {
    fetch('http://quotes.stormconsultancy.co.uk/random.json')
    .then(r => r.json())
    .then(responseData => this.setState({quote: responseData}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Random Quote Generator</h1>
        </header>
        <div className='container'>
          <div className='main'>
            <button onClick={this.getQuote}>Random Quote</button>
            <p className='quote'>{this.state.quote.quote}</p>
            <p className='author'>{this.state.quote.author}</p>
          </div>
          <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false"><button className='twitter'>Tweet</button></a>
          <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
    );
  }
}

export default App;
