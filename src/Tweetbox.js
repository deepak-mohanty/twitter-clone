import React from 'react';
import './Tweetbox.css';
import { Button, Avatar } from '@material-ui/core';
import userLogo from './userImg.png';

function Tweetbox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={userLogo} />
                    <input name="" id="" placeholder="whats happening ?" value="" />
                </div>
                <input className="tweetBox__inputImage" type="text" placeholder="Optional: Enter Image URL" />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
