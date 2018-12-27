import React from "react";


class WeatherModule extends React.Component
{
    render(){
        return(
            <div>
                {this.props.city && this.props.country && <h2>{this.props.city}, {this.props.country}</h2>} 
                {this.props.temperature && <p>Temperature: {this.props.temperature} &#186; C</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                {this.props.windSpeed && <p>Wind Speed: {this.props.windSpeed} km/s</p>}
                {this.props.description && <p>Description: {this.props.description}</p>}
                {this.props.error && <p>{this.props.error}</p>}



            </div>

        );

    }

}

export default WeatherModule;