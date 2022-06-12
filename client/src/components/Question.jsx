import { useState } from 'react'
import 'assets/css/Question.css'
import {AiFillHeart} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'

//TODO useState Hooks may generate an infinte loop !! Remember that situation na !?

export default function Navbar(props) {
  const q = props.each_ques;
  const [isFav,setFav] = useState(q.isLiked);

  const isQuestionFav = (isFav) => {
    if(isFav===true)
      return "aqua";
    else
      return "transparent";
  }
  const handleLikeButtonClick = () => {
    if(isFav===true)
      setFav(false);
    else
      setFav(true);
  }
  // const handleDeleteButtonClick = () => {
    
  // }
  const routeQues = (id) => {
    console.log("Routing to Question having q.id = " , id);
  }

  return (
    <div className="question-card">
      <div className="question-info">
        <div className="question-number-name">
          <h3 className="hover-ptr noselect" onClick={()=>{routeQues(q.id)}}>Q.{q.id} {q.name}</h3>
        </div>
        <ul className="question-tags-list">
          {q.tags.map((tag)=>(<li key={tag} className="question-tags">{tag}</li>))}
        </ul>
      </div>
      <div className="question-edits">
        <AiFillHeart 
          className="star-svg icon"
          fill={isQuestionFav(isFav)} 
          size={40} 
          onClick={handleLikeButtonClick}/>
        <AiFillDelete 
          // className="delete-svg"
          // fill={isQuestionFav(isFav)} 
          // fill="#ff8a00"
          className="del-svg icon"
          fill="transparent"
          size={40} 
          // onClick={handleLikeButtonClick}
        />
        </div>
        <div className="delete-question-button">
        </div>
      {/*
        <AiFillHeart 
        className="star-svg"
        fill={isQuestionFav(q.isLiked)} 
        size={40} 
        onClick={handleLikeButtonClick}
      />
     */}
    </div>
  )
}
