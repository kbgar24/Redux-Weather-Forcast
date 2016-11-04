import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends React.Component {
	
	renderWeather(cityData) {
		const name = cityData.city.name;

		const temps = cityData.list.map(weather => weather.main.temp).map(temp => (9*temp/5) - 459.67);
		const pressures = cityData.list.map(weather => weather.main.presssure);		
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;


		return (
			<tr key={ name }>
				<td><GoogleMap lon={ lon } lat={ lat } /></td>
				<td><Chart data={ temps } color="orange" units="&deg;F"/></td>
				<td><Chart data={ humidities } color="green" units="%" /></td>
			</tr>

		)
	}



	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr className='table-headers'>
						<th>Map</th>
						<th>Temperature (&deg;F)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{ this.props.weather.map(this.renderWeather) }
				</tbody>
			</table>
		)
	}
}

// export default WeatherList;

// function mapStateToProps({ state }) {
// 	return { weather: state.weather }
// }


// function mapStateToProps({ weather }) {
// 	return { weather: weather }
// }

//equivalent to above two

function mapStateToProps({ weather }) {
	return { weather }
}

export default connect(mapStateToProps)(WeatherList);