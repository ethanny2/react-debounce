const Today = ({ today }) => {
	return (
		<section style={{ textAlign:'center'}}>
			<h2>{today.name}</h2>
			<div>
				<img
					src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`}
				/>
			</div>
			<p>Wind Speed: {today.wind.speed}</p>
			<p>Average Temp: {today.main.temp}</p>
			<p>Min Temp: {today.main.temp_min}</p>
			<p>Max Temp: {today.main.temp_max}</p>
		</section>
	);
};

export default Today;