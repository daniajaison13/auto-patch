import React from "react";
import { Layout, Menu, Drawer, Button, Modal, Switch  , message} from "antd";
import {
  WindowsOutlined,
  QqOutlined,
  CloudOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import ContentTable from "./content/ContentTable";
import WorkInProgress from "./content/WorkInProgress";
import OELContentTable from "./content/OELContentTable";
import UpperTile from "./dashboard/UpperTile";
import LowerTile from "./dashboard/LowerTile";
import "./DashBoard.css";
import { ExclamationCircleOutlined } from "@ant-design/icons";



const { confirm } = Modal;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class DashBoard extends React.Component {
  components = {};
  responseObj = null;
  state = {
    menuSelectedKeys: 1,
    drawerVisible: false,
    currentServer: "",
    modalVisible: false,
    timelineUpdated: false,
    incidentServerObj: null,
    timeLineRenderMode: "default",
    clientToken : "",
    buttonEvent : null,
    serverDetailsObj : null
  };

  getCurrentDate() {
    const m = new Date();
    const dateString =
    m.getUTCFullYear() + "/" +
    ("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +
    ("0" + m.getUTCDate()).slice(-2) + " " +
    ("0" + m.getHours()).slice(-2) + ":" +
    ("0" + m.getMinutes()).slice(-2) + ":" +
    ("0" + m.getSeconds()).slice(-2);

    return dateString

  }
 
  
  

  showConfirm = (e) => {
    
    setTimeout(() => {
      this.setState({timelineUpdated : true});
      message.info('A Ticket has been raised');
    }, 10000)
    
    // this.setState({timelineUpdated : true});
    // fetch("http://localhost:8080/api/remedyticket?id=1")
    // .then(res => res.text())
    //   .then((res) => {
    
    // let responseObj = JSON.parse(res);
    // console.log('Response Obj--------- ' + res);
    // responseObj['operation'] = 'Ticket Initiation';
    // responseObj['title'] = `Ticket with  ${responseObj.incidentId} is initiated. Refrenece Id -${responseObj.responseMessage.referenceNumber}`;
    // responseObj['status'] = responseObj.responseMessage.statusMessage;
    // responseObj['date'] = date;
    // console.log('date' +  responseObj.date);
    // console.log('response set -----' + responseObj);
    // this.setState({incidentServerObj : responseObj});

    //   })
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
    

    


    //this.setState({incidentServerObj : responseObj})
    
    //e.target.style.display = 'none';
    confirm({
      title: `Do you want to Raise a ticket for  ${this.state.currentServer}`,
      icon: <ExclamationCircleOutlined />,
      content:
        "When clicked the OK button, a Ticket will be raised tagging the membership group",
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 2000);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {},
    });

    
  };


  handleColumnClick = (serverName) => {
    console.log("server name :" + serverName);
    this.setState({ drawerVisible: true });
    this.setState({ currentServer: serverName });
    fetch(`http://localhost:8080/api/codexdetails?hostname=${this.state.currentServer}`).then(res => res.text()).then(data => {
      console.log(data)
      const that = this;
      let dataJson = JSON.parse(data);

      
       
        dataJson['hostip'] = '10.176.42.18';
        dataJson['productionType'] = 'PROD';

       
      
      
      
      that.setState({serverDetailsObj : dataJson});
    }
    ).catch(e => console.log(e));
    
  };

  onClose = () => {
    this.setState({ drawerVisible: false });
  };
  handleClick = () => {
    console.log("Hello Parent click...");
  };
  handleClick = (index) => (e) => {
    console.log("menu item clicked");
    this.setState({ menuSelectedKeys: index });
    console.log(this.state.menuSelectedKeys);
  };

  componentDidMount() {
    console.log("DashBoard Mounted");

    fetch(`http://localhost:8080/api/codexdetails?hostname=${this.state.currentServer}`).then(res => res.text()).then(data => {
      console.log(data)
      const that = this;
      let dataJson = JSON.parse(data); 
      dataJson['hostip'] = '10.176.42.18';
      dataJson['productionType'] = 'PROD';
      that.setState({serverDetailsObj : dataJson});
    }
    ).catch(e => console.log(e));

   
    fetch("http://localhost:8080/api/remedyticket?id=1").then(res => res.text()).then(data => {
      console.log(data)
      const that = this;
      let dataJson = JSON.parse(data);
      console.log('dataJson ' + dataJson);
      console.log(typeof dataJson);
      const date = that.getCurrentDate();
      dataJson['operation'] = 'Ticket Initiated';
      dataJson['title'] = `Ticket with  ${dataJson.incidentId} is initiated. Refrenece Id -${dataJson.responseMessage.referenceNumber}`;
      dataJson['status'] = dataJson.responseMessage.statusMessage;
      dataJson['date'] = date;
      console.log("data json ..........." + JSON.stringify(dataJson));
      that.setState({incidentServerObj : dataJson});
    }
    ).catch(e => console.log(e));
    
  }
  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="o" className="menu-item-header">
              <b>Operating Domain</b>
            </Menu.Item>
            <Menu.Item
              key="1"
              icon={<WindowsOutlined />}
              className="menu-item"
              onClick={this.handleClick(1)}
            >
              Windows
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<QqOutlined />}
              className="menu-item"
              onClick={this.handleClick(2)}
            >
              RHEL
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<CloudOutlined />}
              className="menu-item"
              onClick={this.handleClick(3)}
            >
              OEL
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          className="site-layout"
          style={{ marginLeft: 200, height: "100vh" }}
        >
          <Header
            className="app-header"
            style={{
              backgroundColor: "#ffff",
              padding: 0,
              textAlign: "center",
            }}
          >
            <SyncOutlined style={{ marginRight: "5px" }} />
            <h4>Auto Patch~5</h4>
          </Header>

          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            {(() => {
              switch (this.state.menuSelectedKeys) {
                case 1:
                  return (
                    <ContentTable
                      onClick={this.handleClick}
                      handler={this.handleColumnClick}
                    />
                  );
                case 2:
                  return <WorkInProgress />;
                case 3:
                  return (
                    <OELContentTable
                      onClick={this.handleClick}
                      handler={this.handleColumnClick}
                    />
                  );
                default:
                  return <WorkInProgress />;
              }
            })()}
          </Content>

          <Footer style={{ textAlign: "center" }}>
            Auto-Patch ©2020 Created by Team5
          </Footer>
          <Drawer
            title="Vulnerablity Assesment Result"
            placement="right"
            closable={true}
            onClose={this.onClose}
            visible={this.state.drawerVisible}
            getContainer={false}
            width={960}
            style={{ position: "absolute" }}
          >

            
            <div class="header-tile">
              <div>
                <h4>
                  Host Name : <i>{this.state.currentServer}</i>
                </h4>
                <p>
                  IP Address : <i>10.176.42.18</i>
                </p>
                <p>
                  Environment : <i>PROD</i>
                </p>
              </div>

              <h4>
                Owner : <i>BM056542</i>
              </h4>
              <div>
                <h4>
                  Membership Group : <i>ES Ops SharedSvc CTS</i>
                </h4>
                <Button type="primary" onClick={this.showConfirm}>
                  Raise Ticket
                </Button>
              </div>
            </div>

            <UpperTile />
            
            <LowerTile
              timelineUpdated={this.state.timelineUpdated}
              incidentTicketObj={this.state.incidentServerObj}
            />
          </Drawer>
        </Layout>
      </Layout>
    );
  }
}

export default DashBoard;
