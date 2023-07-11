import React from 'react'
import "./topbar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='top-wrapper'>
            <div className='topLeft'>
                <span className='logo'>Dashboard</span>
            </div>
            <div className='topRight'>
                <div className='search'>
                    <input type='text' className='text' placeholder='Search'/>
                    <SearchOutlinedIcon className='searchIcon' />
                </div>
                <div className="vector">
                    <NotificationsNoneIcon />
                </div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXiJTOBbHfu9aouDAApS7uAjm3wowfJ5HWMxix7psqIw&s' alt="" className='topAvatar'/>
            </div>
        </div>
        
    </div>
  )
}
