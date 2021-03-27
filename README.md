[![GitHub issues](https://img.shields.io/github/issues/ethanny2/react-debounce)](https://github.com/ethanny2/react-debounce/issues)[![GitHub forks](https://img.shields.io/github/forks/ethanny2/react-debounce)](https://github.com/ethanny2/react-debounce/network)[![GitHub stars](https://img.shields.io/github/stars/ethanny2/react-debounce)](https://github.com/ethanny2/react-debounce/stargazers)[![GitHub license](https://img.shields.io/github/license/ethanny2/react-debounce)](https://github.com/ethanny2/react-debounce)[![Twitter Badge](https://img.shields.io/badge/chat-twitter-blue.svg)](https://twitter.com/ArrayLikeObj)


# React Hooks Debounce

<p align="center">
  <img width="460" height="300" src="https://media1.giphy.com/media/emDkdpzsX4lFSPdj6L/giphy.gif">
</p>


## Background

This is a short demo demonstrating how to make a  2 versions of a debounced network search. 
- The first with the use of the [lodash library's debounce() method](https://lodash.com/docs/4.17.15#debounce) 
- The second is made with React 16+ and useEffect hooks.


## Technology Used

- React 16 (hooks)
- lodash (for debounce())
- axios (for network requests)
- OpenWeatherApi (for up to data weather forecasts)
- react-transition-group (forsimple declarative animation on React components)


## Concepts 

#### Debouncing
- A common programming pattern to optimize how many times a specific function can be
called in given period of time. 
- Commonly seen in use with search bars such as on Google / and any other search engine. If the function to search for the weather fired everytime the user fired the keyDown event (they pressed a key) it would start the network request as soon the first key is pressed, thus wasting bandwidth and slowing down your application.
- The solution is to have the function only execute after a specified time period (usually between 100ms - 800ms before users start to feel the delay).


### axios
- Using the axios.create() method to abstract the weather API into objects that more clearly convey their use and semantic meaning
