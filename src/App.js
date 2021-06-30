import React from 'react';
import "./App.css"
import { Provider } from 'react-redux';
import store from "./store";
import SliderAmount from "./components/sliderMonto";
import SliderCuota from './components/sliderCuota';
import SliderResult from './components/sliderResult';
const App = () => {

  return (
    <div className="container-principal">
      <header>
        <h1>Simulá tu crédito</h1>
      </header>
      <Provider store={store}>
        <SliderAmount/>
        <SliderCuota/>
        <SliderResult/>
      </Provider>
    </div>
  )
}

export default App;