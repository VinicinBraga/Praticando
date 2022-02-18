import Tweet from "./components/Tweet"
import { useState } from 'react';



function App() {
  const [num, setNum] = useState<number>(1)
  const [tweets, setTweets] = useState<string[]>([
    `Tweet ${num}`,
  ])


  const createTweet = () => {
    const newNumb = num + 1;
    setTweets([...tweets, `Tweet ${newNumb}`]);
    setNum(newNumb);

  }
  return (
    <div className="App">
      {tweets.map(tweet => {
        return <Tweet text={tweet} />
 })}
      
      <button
        onClick={createTweet}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          


        }}
      >
        Adicionar Tweet</button>
    </div>

  )
}

export default App
