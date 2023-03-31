import React from "react";
import { Layout, Breadcrumb, Pagination, Select, Button } from "antd";
import { Table, Tag, Space } from "antd";

class OELContentTable extends React.Component {

    handleClick = () => {
        console.log('Hello Actioj');
    }
  columns = [
    {
      title: "Host Name",
      dataIndex: "host_name",
      key: "host_name",
    },
    {
      title: "Operating System",
      dataIndex: "operating_system",
      key: "operating_system",
    },
    {
      title: "Minor version",
      dataIndex: "minor_version",
      key: "minor_version",
    },
    {
      title: "Last Patch Date",
      dataIndex: "last_patch_date",
      key: "last_patch_date",
    },
    {
      title: "Server Up Time",
      dataIndex: "server_up_time",
      key: "server_up_time",
    },
    {
      title: "Comments",
      dataIndex: "comments",
      key: "comments",
    },
    {
      title: "Patch Staus",
      dataIndex: "patch_status",
      key: "patch_status",
      render: (patch_status) => {
        let color;
        console.log("patch_status" + patch_status);
        if (patch_status === "Pending") {
          color = "volcano";
        } else if (patch_status === "applied") {
          color = "green";
        } else {
          color = "geekblue";
        }

        return (
          <Tag color={color} key={patch_status}>
            {patch_status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Last Patch Flag",
      dataIndex: "last_patch_flag",
      key: "last_patch_flag",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "action",
      render: (action) => {
        if (action !== "N/A") {
          return (
            <Button type="primary" size="small" onClick = {this.handleClick()}>
              Inspect
            </Button>
          );
        } else {
          return "N/A";
        }
      },
    },
  ];
  state = { data: [] };
  componentDidMount() {
    const that = this;
    fetch("http://localhost:8080/api/oel/serverdetails")
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        let dataJson = JSON.parse(data);
        console.log(typeof dataJson);
        dataJson.forEach((data) => {
          data["action"] =
            data.patch_status === "Pending" || data.last_patch_flag === "failed"
              ? "Apply"
              : "N/A";
        });

        that.setState({ data: dataJson });
      })
      .catch((e) => console.log(e));
  }
  render() {
    return (
      <Table
        columns={this.columns}
        dataSource={this.state.data}
        pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}}
      />
    );
  }
}

export default OELContentTable;
