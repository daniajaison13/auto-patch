import React, { Fragment , Drawer} from 'react';
import { Layout, Breadcrumb ,Pagination ,Select  , Button} from 'antd';
import { Table, Tag, Space } from 'antd';
const {  Content } = Layout;

class ContentTable extends React.Component {

   actionButton = <Button type= 'primary' size = 'small' onClick = {() => this.props.handler()}>Investigate</Button>
    columns = [
      {
        title: 'Server',
        dataIndex: 'server',
        key: 'server',
      },
    {
      title: 'Patch Date',
      dataIndex: 'patch_date',
      key: 'patch_date',
    },
    {
      title : 'Last Reboot',
      dataIndex : 'up_time',
      key: 'up_time'
    },

    {
      title: 'Patch Status',
      key: 'tags',
      dataIndex: 'tags',
      render : tags => {
        let color;
        if (tags === 'pending')
          {
            color = 'volcano'
          }
        else if(tags === 'applied')
          {
            color = 'green'
          }
          else {
            color = 'geekblue'
          }

          return (
            <Tag color={color} key={tags}>
                {tags.toUpperCase()}
              </Tag>

          )
      }

    },
    {
      title: 'Last Patch Flag',
      key: 'flag',
      dataIndex : 'flag'

    },

    {
      title : 'Action',
      key: 'server',
      dataIndex : 'server',
      render : server => {
        
         if(server !== 'N/A')
           {
             return <Button type = 'primary' size = 'small' onClick = {() => this.props.handler(server)} >Inspect</Button>
           }
         else
         {
           return 'N/A';
         }
     }
    }
  ];

   handleClick = () => {
     console.log('Handle Click');
   }

    state = { data : [] 
    }

    componentDidMount () {
      const that = this;
      fetch("http://localhost:8080/api/serverdetails").then(res => res.text()).then(data => {
      console.log(data)
      let dataJson = JSON.parse(data);
      console.log(typeof dataJson);
      dataJson.forEach(data => {
        console.log(data.id);
        data['key'] = data.id;
        data['action'] = data.rebootstatus === 'pending' || data.lastPatchDetails === 'failed' ? 'Apply' : 'N/A';
        data['server'] = data.server_name;
        data['patch_date'] = data.patchDate;
        data['up_time'] = data.machineUpTime;
        data['tags'] = data.rebootStatus;
        data['flag'] = data.lastPatchDetails;
      })
      that.setState({data : dataJson});


    }
    ).catch(e => console.log(e));
    }

    render() {

        console.log('data in state ' + this.state.data);
        return (
        <Table columns={this.columns} dataSource={this.state.data}
        pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}} />


     );
    }
}

export default ContentTable;