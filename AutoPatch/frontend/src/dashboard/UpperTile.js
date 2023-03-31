import React from 'react';
import { Card, Progress , Avatar } from 'antd';
import './UpperTile.css';
import {  CheckCircleTwoTone , ExclamationCircleTwoTone } from '@ant-design/icons';
class UpperTile extends React.Component {
    state = {  }
    render() { 
        return ( <div className="site-card-wrapper">
          <Card title="Total Patch Applied" bordered={true} className = 'custom-card'  style={{ width: 300 }}>
      
      <Avatar style = {{ background : '#ffff' , marginBottom : '21px'}} size={64} icon={<CheckCircleTwoTone twoToneColor="#52c41a"
       class = 'banner-icon' style = {{fontSize : '48px' , backgroundColor : '#ffff'}} />} />
      <span class = 'banner-number'>54</span>
      
    </Card>
    <Card  bordered={true} className = 'custom-card progress-card' style={{ width: 300 }}>
    <div style = {{width : 220}}>
    <span style = {{display : 'flex'}}><Progress percent={28} size="default" strokeColor = 'red' status="active" showInfo = {false} />{" "}<span style = {{paddingLeft : '4px'}}>Critical</span></span>
    <span style = {{display : 'flex'}}><Progress percent={45} size="default" status="active" strokeColor = 'yellow' showInfo = {false}/>{" "}<span style = {{paddingLeft : '4px'}} >Moderate</span></span>
    <span style = {{display : 'flex'}}><Progress percent={27} size="default" status="active" strokeColor = 'green' showInfo = {false}/>{" "}<span style = {{paddingLeft : '4px'}}>Low</span></span>
    </div>
    
    
    </Card>
    <Card title="Total Patch Pending" bordered={true} className = 'custom-card' style={{ width: 300 }}>
    <Avatar style = {{ background : '#ffff' , marginBottom : '21px'}} size={64} icon={<ExclamationCircleTwoTone twoToneColor="#eb2f96"
       class = 'banner-icon' style = {{fontSize : '48px' , backgroundColor : '#ffff'}} />} />
    <span class = 'banner-number'>13</span>
    </Card>
      </div> );
    }
}
 
export default UpperTile;