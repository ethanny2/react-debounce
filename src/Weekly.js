const Weekly = ({ weekArr, styles }) => {
	console.log(weekArr);
  const today = new Date();
  console.log(styles);
	return (
		<section
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(4rem, 1fr))',
				gap: '1rem',
        padding: '1rem',
        ...styles
			}}
		>
			{weekArr.map((day, i) => {
				console.log(day);
				return (
					<div style={{ textAlign: 'center', border:'2px solid grey' }}>
						<h2>{day.name}</h2>
						<h3>{day.weather[0].description}</h3>
						<h3>{`${today.getMonth() + 1}/${
							today.getDate() + i
						}/${today.getFullYear()}`}</h3>
						<div>
							<img
								src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
								alt={day.weather[0].description}
							/>
						</div>
						<p>Wind Speed: {day.wind_speed}</p>
						<p>Average Temp: {day.temp.day}</p>
						<p>Min Temp: {day.temp.min}</p>
						<p>Max Temp: {day.temp.max}</p>
					</div>
				);
			})}
		</section>
	);
};

export default Weekly;
