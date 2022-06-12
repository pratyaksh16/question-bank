import './App.css';
import QuestionCard from 'components/Question.jsx';
import AllQuestions from 'assets/data/AllQuestions'
import { useState } from 'react';

function App() {
  const [ques,setQues] = useState(AllQuestions);
  return (
    <div className="App">
      <div className="questions-container">
        {ques.map((q)=>{return (<QuestionCard each_ques={q} key={q.id}/>)})}
      </div>
    </div>
  );
}

export default App;
