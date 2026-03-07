import React from 'react'

const WelcomeMsg = ({ onGetPostsClick }) => {
    return (
        <div>
            <center className='welcome-msg'><h1>There are no Post</h1>
                <button
                    onClick={onGetPostsClick}
                    type="button"
                    class="btn btn-primary">Get Post from Server
                </button>
            </center>
        </div>
    )
}

export default WelcomeMsg
