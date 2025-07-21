import React, {useState} from 'react';
function CommentSection() {

    const [name, SetName] = useState();

    function handleClick(event){
        SetName(event.target.value)
    }
    
    return(<div>
        <input value={name} onChange={handleClick}/>
        <p>Name: {name}</p>
    </div>);
}

export default CommentSection;