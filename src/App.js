import React, { Component } from 'react';
import './App.css';
import Currency from './components/Currency';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore'
import Header from './components/Head'
import Footer from './components/Footer'
const store = configureStore();

class App extends Component {
  render() {
    return (
        <Provider store={store}>

          <div>
                 <Header/>
                 <Currency/>
                 <Footer/>
          </div>

        </Provider>

    );
  }
}

export default App;
