import React from 'react';
import {Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublicIcon from '@material-ui/icons/Public';
import './Post.css';

function Post({
    displayName,
    avatar,
    userName,
    verified,
    gif,
    text
}) {
    return (
        <div className="post">
            <div className="post__name">
                <Avatar src={avatar} />
            </div>  
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{displayName} {' '}
                            <span className="post__headerSpecial">
                                {verified ? <VerifiedUserIcon className="post__badge" /> : ''} @{userName}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={gif} alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatOneIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublicIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
