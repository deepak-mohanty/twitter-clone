import React, {useState, useEffect} from 'react';
import './Feed.css';
import Tweetbox from './Tweetbox';
import Post from './Post';
import userLogo from './userImg.png';
import db from './firebase';

export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        //Loads when Feed components first loads
        db.collection('posts').onSnapshot(snapshot => {
            // console.log('Snapshot', snapshot.docs)
            setPosts(snapshot.docs.map(doc => doc.data()))
        })

    }, [])

    // console.log(posts)
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <Tweetbox />
            
            <Post 
                displayName="Deepak Mohanty"
                userName='dMohanty@gmail.com' 
                verified={true} 
                text="Post is working and connected to firestore"
                avatar={userLogo} 
                gif='https://media.giphy.com/media/gd09Y2Ptu7gsiPVUrv/giphy.gif'
            />
        </div>
    )
}
