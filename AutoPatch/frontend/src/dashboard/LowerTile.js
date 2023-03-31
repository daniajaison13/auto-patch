import React from "react";
import { Card, Timeline, List } from "antd";
import TimelineItem from "antd/lib/timeline/TimelineItem";

// const timelineItemsList = timeLineData.map((item) => {
//   <li> {item.title}</li>;
//   // <TimelineItem  >
//   //   <List>
//   //     <List.Item>item.operation</List.Item>
//   //     <List.Item>item.title</List.Item>
//   //     <List.Item>item.date</List.Item>
//   //   </List>
//   // </TimelineItem>;
// });
class LowerTile extends React.Component {
  timelineData = [
    {
      operation: "installation",
      status: "success",
      title:
        "Security Intelligence Update for Microsoft Defender Antivirus - KB2267602 (Version 1.315.617.0)",
      date: "5/14/2020 5:59 AM",
    },
    {
      operation: "installation",
      status: "failed",
      title:
        "Update for Microsoft Defender Antivirus antimalware platform - KB4052623 (Version 4.18.2004.6)",
      date: "5/10/2020 9:41 AM",
    },
    {
      operation: "installation",
      status: "success",
      title:
        "Security Intelligence Update for Windows Defender Antivirus - KB2267602 (Version 1.313.2708.0)",
      date: "5/7/2020 8:30 AM",
    },
    {
      operation: "installation",
      status: "failed",
      title:
        "Update for Microsoft Defender Antivirus antimalware platform - KB4052623 (Version 4.18.2004.6)",
      date: "4/30/2020 11:30 AM",
    },
    {
      operation: "installation",
      status: "failed",
      title:
        "2020-04 Cumulative Update for Windows 10 Version 1909 for x64-based Systems (KB4549951)",
      date: "4/19/2020 0:47 PM",
    },
  ];

componentDidMount () {

}


  render() {
    return (
      <Card style={{ width: "100%" }}>
        <h4>Time Line</h4>

        {(() => {
          if (this.props.timelineUpdated === true) {
               const data = this.props.incidentTicketObj;
              this.timelineData.unshift(this.props.incidentTicketObj) 
              
            return (<Timeline>
              {this.timelineData.map((item) => (
                <TimelineItem color = {item.status === 'failed' ? 'red' : 'green'}>
                  <List size="small" bordered = {false}>
                    <List.Item >{item.operation}</List.Item>
                    <List.Item>{item.title}</List.Item>
                    <List.Item>{item.date}</List.Item>
                  </List>
                </TimelineItem>
              ))}
            </Timeline>);
              

            
          } else {
            return (
              <Timeline>
                {this.timelineData.map((item) => (
                  <TimelineItem color = {item.status === 'failed' ? 'red' : 'green'}>
                    <List size="small" bordered = {false}>
                      <List.Item >{item.operation}</List.Item>
                      <List.Item>{item.title}</List.Item>
                      <List.Item>{item.date}</List.Item>
                    </List>
                  </TimelineItem>
                ))}
              </Timeline>
            );
          }
        })()}

        {/* <Timeline>
        <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="red">
      
      <p>Solve initial network problems 2</p>
      <p>Solve initial network problems 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item color="gray">
    </Timeline.Item>
    </Timeline> */}
      </Card>
    );
  }
}

export default LowerTile;
