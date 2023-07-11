import React from 'react'
import './featuredInfo.css'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem1">
            <span className="featuredVector">
                <MoveToInboxIcon className='featuredIcon'/>
            </span>
            <span className="featuredTitle">Total Revenues</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,129,430</span>
            </div>
        </div>

        <div className="featuredItem2">
            <span className="featuredTotalVector">
                <AssignmentReturnedIcon  className='featuredIcon '/>
            </span>
            <span className="featuredTitle">Total Transaction</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">1,520</span>
            </div>
        </div>

        <div className="featuredItem3">
            <span className="featuredVector">
                <ThumbUpIcon className='featuredIcon'/>
            </span>
            <span className="featuredTitle">Total Likes</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">9,721</span>
            </div>
        </div>

        <div className="featuredItem4">
            <span className="featuredVector">
                <PeopleOutlineIcon className='featuredIcon'/>
            </span>
            <span className="featuredTitle">Total Likes</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">892</span>
            </div>
        </div>


    </div>
  )
}
