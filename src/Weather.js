import React from 'react';
import ReactDOM from 'react-dom';
import './Weather.css';



class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: [],
            weatherInst: {
                time: '16:00:00',
                city: 'New York',
                temparature: '16℃'
            }
        }
    }

    componentDidMount() {
        this.getWeather();
    }

    getWeather = _ => {
        fetch('http://localhost:4000/weathers')
            .then(response => response.json())
            .then(response => {
                this.setState({ weather: response.data })
            })
            .catch(err => console.log(err))
    }

    addWeather = _ => {
        const { weatherInst } = this.state;
        fetch(`http://localhost:4000/weather`, {
            method: 'POST',
            body: JSON.stringify(weatherInst), // string or object
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(this.getWeather)
            .catch(err => console.log(err))

    }

    renderWeather = ({ id, time, city, temparature }) => <div key={id}>{city} {temparature}</div>

    render() {
        const { weather, weatherInst } = this.state;

        return (
            <div className="App">
                {weather.map(this.renderWeather)}

                <div>
                    <input value={weatherInst.time} onChange={e => this.setState({ weatherInst: { ...weatherInst, time: e.target.value } })}></input>
                    <input value={weatherInst.city} onChange={e => this.setState({ weatherInst: { ...weatherInst, city: e.target.value } })}></input>
                    <input value={weatherInst.temparature} onChange={e => this.setState({ weatherInst: { ...weatherInst, temparature: e.target.value } })}></input>
                    <button onClick={this.addWeather}>Add Weather</button>
                </div>
            </div>
        );
    }

}

ReactDOM.render(
    <Weather />,
    document.getElementById('root')
);

export default Weather;
