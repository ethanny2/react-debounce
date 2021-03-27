import { useState, useEffect, useCallback} from 'react';
import { debounce } from 'lodash';
import { currentWeather, weeklyForecast } from './api/openWeather';
import Today from './Today';
import Weekly from './Weekly';
import './App.css';
import { CSSTransition } from 'react-transition-group';

/* Debounce a network request on a search bar using lodash library and the
_.debounce function
*/

function App() {
	const [userText, setUserText] = useState('');
	const [today, setToday] = useState(null);
	const [weekly, setWeekly] = useState([]);
	const [triggerAnim, setTriggerAnim] = useState(false);
	const duration = 500;

	// const defaultStyle = {
	// 	transition: `opacity ${duration}ms ease-in-out`,
	// 	opacity: 0
	// };

	// const transitionStyles = {
	// 	entering: { opacity: 0.0 },
	// 	entered: { opacity: 1 },
	// 	exiting: { opacity: 0 },
	// 	exited: { opacity: 0 }
	// };
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

	let debounceSearchFunction = useCallback(
		debounce(debounceCurrentWeather, 500),
		[]
	);

	useEffect(() => {
		if (userText !== '') {
			console.log('Calling debounce search function! ' + userText);
			debounceSearchFunction(userText);
		}
	}, [userText]);

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
			setTriggerAnim(true);
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
						onChange={ e => {
							setTriggerAnim(false);
							setUserText(e.target.value)
						}}
					/>
				</div>
			</form>
			{today ? (
				<CSSTransition in={triggerAnim} timeout={duration} appear classNames="weekly">
							<Today today={today} />
				</CSSTransition>
			) : null}

			{weekly.length ? (
				<CSSTransition in={triggerAnim} timeout={duration} appear classNames="weekly">
								<Weekly weekArr={weekly} />
				</CSSTransition>
			) : null}
		</main>
	);
}

export default App;
