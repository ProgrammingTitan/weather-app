import React from "react"; 




class FormModule extends React.Component
{

    render(){
        return(
            <div>
                <form onSubmit={this.props.getWeather}> 
                    <input type="text" name="city" placeholder="Enter you City"/>
                    <input type="text" name="country" placeholder="Enter your Country"/>
                    <button>Get Weather</button>
                </form>

            </div>





        );



    }





}

export default FormModule;