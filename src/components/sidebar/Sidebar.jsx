import React from 'react'
import './sidebar.css'
import PieChartIcon from '@mui/icons-material/PieChart';
import PaymentsIcon from '@mui/icons-material/Payments';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h1 className='sidebarBoard'>Board.</h1>
             </div>   
             <div>
                <ul className='sidebarList'>
                    <li className='list1'>
                        <PieChartIcon className='Logo' />
                      Dashboard
                    </li>
                    <li className='list'>
                        <PaymentsIcon className='Logo'/>
                        Transactions
                    </li>
                    <li className='list'>
                        <WorkHistoryIcon  className='Logo'/>
                        Schedules
                    </li>
                    <li className='list'>
                        <AccountCircleIcon className='Logo'/>
                        Users
                    </li>
                    <li className='list'>
                        <SettingsIcon className='Logo'/>
                        Settings
                    </li>
                </ul>
                </div>
                <div className='desk'>
                    <p >Help</p>
                    <p className='contact'>Contact Us</p>
                </div>
            </div>
            
        </div>
    
  )
}
