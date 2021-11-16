import { React } from "react";

function Entries(props) {
  return (
    <div className='note-container'>
      <span>
        <h1 className='note-title'> {props.title}</h1>
      </span>
      <span>
        <p className='note-comment'> {props.content}</p>
      </span>
    </div>
  )
}

export default Entries;

