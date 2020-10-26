import { useState, useEffect } from 'react';
import { currentWeather, weeklyForecast } from './api/openWeather';
import Today from './Today';
import Weekly from './Weekly';
import './App.css';

/* 
  Debounce a network request on a search bar using a debounce effect natively
  implemented through React and useEffect hooks
*/

function App() {
	const [userText, setUserText] = useState('');
	const [debounceTerm, setDebounceTerm] = useState('');
	const [today, setToday] = useState(null);
	const [weekly, setWeekly] = useState([]);

	useEffect(() => {
		const id = setTimeout(() => {
			if (userText !== '') {
				setDebounceTerm(userText);
			}
		}, 500);
		return () => {
			clearTimeout(id);
		};
	}, [userText]);

	useEffect(() => {
		const debounceCurrentWeather = async (searchTerm) => {
			console.log('Inside here usertext is ' + searchTerm);
			const response = await currentWeather.get('', {
				params: {
					q: searchTerm
				}
			});
			console.log(response.data);
			setToday(response.data);
		};
		debounceCurrentWeather(debounceTerm);
	}, [debounceTerm]);

	useEffect(() => {
		const networkRequest = async () => {
			const response = await weeklyForecast.get('', {
				params: {
					lat: today.coord.lat,
					lon: today.coord.lon
				}
			});
			console.log(response.data);
			const weatherArray = response.data.daily;
			weatherArray.shift();
			setWeekly(weatherArray);
		};
		if (today) {
			networkRequest();
		}
	}, [today]);

	return (
		<main>
			<form>
				<div className='field'>
					<label htmlFor='search'>Weather Search</label>
					<input
						type='text'
						autoComplete='off'
						placeholder='type in a city name'
						value={userText}
						id='search'
						onChange={(e) => setUserText(e.target.value)}
					/>
				</div>
			</form>
			{today ? <Today today={today} /> : null}
			{today ? <Weekly weekArr={weekly} /> : null}
		</main>
	);
}

export default App;
