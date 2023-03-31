import React from 'react';
import {Button,Card} from 'antd';
import { findByLabelText } from '@testing-library/react';




class WorkInProgress extends React.Component {
    handleClick = () => {
        console.log('Handle Click ');
    }

    cardStyle = {
        'display' : 'flex',
        'flexFlow' : 'column nowrap',
         'textAlign' : 'center',
         'justifyContent' : 'center'
    }
    
    state = {  }
    render() { 
        return ( 
        <div>
            <Card title="Red Hat Enterprise Linux" extra={<a href="#">More</a>} style={this.cardStyle}>
        <p>Work in Prodgress</p>
          </Card>

        </div>
         );
    }
}
 
export default WorkInProgress;