import logo from './logo.svg';
import './App.css';
import Joke from './joke.js';
import jokesData from './jokesData';
function App() {
   /*const jokeComponents= jokesData.map(joke => <Joke
     key={joke.id} question={joke.question} answer={joke.answer}
   />
    )*/
    //You can use either the above code snippet or the below code snippet.
    const jokeComponents= jokesData.map(function(joke) { return(<Joke
      key={joke.id} question={joke.question} answer={joke.answer}
    />)}
     )
    return(
      <div>
        {jokeComponents}
      </div>
    ) 
}

export default App;
