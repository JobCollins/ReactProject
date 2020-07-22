import React, { useState } from 'react';


const AddComment = ({articleName, setArticleInfo}) => {
    const [ username, setUsername ] = useState('')
    const [ commentText, setCommentText] = useState('')

    const addComment = async () => {
        const result = await fetch(
            `/api/article/${articleName}/add-comment`,
            {
                method:'post', 
                body: JSON.stringify({username, text: commentText}),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const body = await result.json()
            setArticleInfo(body)
            setUsername('')
            setCommentText('')
    }
    return(
        <>
            <div id="add-comment-form">
                <h3>Add a comment</h3>
                <label>
                    Name:
                    <input 
                        type="text" 
                        value={username}
                        onChange={
                            (e) => setUsername(e.target.value)
                        }
                    />
                </label>
                <label>
                    Comment:
                    <textarea 
                        rows="4" 
                        cols="50" 
                        value={commentText}
                        onChange={
                            (e) => setCommentText(e.target.value)
                        }
                    />
                </label>
                <button onClick={() => addComment()}>Comment</button>
            </div>
        </>
    );
}


export default AddComment;