import React, { Component } from 'react';
import Title from "./components/Title"; 
import FormModule from "./components/Form_Module";
import WeatherModule from "./components/Weather_Module"; 
import image from "./components/image.jpg";
import image2 from "./components/sand.jpg"; 
import './App.css';

const API_KEY = "7091e9888cc2059366fec6185756d8e9";

class App extends Component {
  

  state = {
    temperature : undefined,
    city : undefined,
    country : undefined,
    humidity: undefined,
    description: undefined,
    windSpeed: undefined,
    error: undefined,

  }



  getWeather = async (e) =>
  {

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value; 

    const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const data = await API_CALL.json();

      if(city && country ){
        console.log(data);

        this.setState({
          temperature : data.main.temp,
          city : data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          description: data.weather[0].description,
          error: ''
        })
      }
      else{this.setState({
        temperature : undefined,
        city : undefined,
        country : undefined,
        humidity: undefined,
        description: undefined,
        windSpeed: undefined,
        error : "Please Enter Valid Value"
        })
      }

  }
    

  
  
  
  
  render() {
    return (
      <div className="App">

        <div className= "container-fluid">
          <div className="wrapper" id="Bbox">

              <div className= "col-xs-5" >
                <div className = "row" id="TitleBox" >
                <body className= "PIC" background = {image} style={{height: 670}}> 
                <div id="titles">
                <Title />
                </div>
                </body>
                </div>
              </div>
              
              <div className="col-xs-7">
              <body id="bean">
                <FormModule getWeather= {this.getWeather}/>
                <WeatherModule 
                  temperature = {this.state.temperature}
                  city = {this.state.city}
                  country = {this.state.country}
                  humidity = {this.state.humidity}
                  windSpeed = {this.state.windSpeed}
                  description = {this.state.description}
                  error = {this.state.error}
                />
                </body>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
