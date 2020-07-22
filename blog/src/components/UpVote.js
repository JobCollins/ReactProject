import React from 'react'


const UpVote = ({articleName, upvotes, setArticleInfo}) => {
    const upvoteArticle = async () => {
        const result = await fetch(
            `/api/article/${articleName}/upvote`,
            {method: 'post'}
            )
        const body = await result.json()

        setArticleInfo(body)
    }
    return (
        <>
            <div id="upvotes-section">
                <button onClick ={() => upvoteArticle()}>Up vote</button>
                <p><span>{upvotes}</span> up votes</p>
            </div>
            
        </>
    )
    
};


export default UpVote;