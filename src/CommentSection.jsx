import { useState } from "react";

function CommentSection() {

    const [comments, setComments]= useState(["this is the first comment"]);
    const [newComments, setNewComments] = useState("");

    function handleComments(event){
        setNewComments(event.target.value)
    }
    function addComment(){
        if(newComments.trim() !==""){
            setComments(t => [...t, newComments]);
            setNewComments("");
        }
    }

    return (
    <div>
        <h2>This is the comment section</h2>
        <div>
            <input type="text" placeholder="enter a text" value={newComments} onChange={handleComments}></input>
            <button onClick={addComment}>➡️</button>
        </div>
            <ol>
                {comments.map((comment, index) =>(
                    <li key={index}>
                    <span>{comment}</span>
                </li>
                ))}
            </ol>
    </div>);
}

export default CommentSection;