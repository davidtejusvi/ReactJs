import React, { useState } from 'react';
import { setAvatar } from './utils';
import { AVATARS } from './constants';
import './style.css';

const AvatarPicker = () => {
    const [selectedAvatar, setSelectedavatar] = useState(AVATARS[0])
    const [loading, setLoading] = useState(false)
    const [showPopup, setShowPopup] = useState(false)
    const handleClick = async (ele) => {
        await setAvatar(ele.id)
        setSelectedavatar(ele)
        setShowPopup(false)
    }
    return (
        <main style={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
            <div className='avatar' onClick={() => setShowPopup(!showPopup)}><img src={selectedAvatar.source} style={{ height: '8rem', width: '8rem', borderRadius: '50%', marginTop: '5rem', border: '3px solid #3498db', cursor: 'pointer' }} /></div>
            <div className={`pop-up ${showPopup ? 'show' : 'hide'}`}>
                <div className='sharp'></div>
                <div className={`box`}>{AVATARS.map((ele, idx) => (<img className={`${loading && 'load'}`} onClick={() => handleClick(ele)} style={{ height: '6rem', width: '6rem', borderRadius: '50%', cursor: 'pointer', border: idx == selectedAvatar.id - 1 ? '5px solid #3498db' : "", pointerEvents: idx == selectedAvatar.id - 1 ? 'none' : "" }} src={ele.source} key={idx} />))}</div>
            </div>
        </main>
    );
}

export default AvatarPicker