import { Space, Popconfirm } from "antd";

//------------------------------------------------------------------------------

export const constructTable = ({ navigate, confirm, cancel }) => {
  return [
    {
      title: "EmployeeId",
      dataIndex: "EmployeeId",
      key: "EmployeeId",
    },
    {
      title: "EmpName",
      dataIndex: "EmpName",
      key: "EmpName",
    },
    {
      title: "Department",
      dataIndex: "Department",
      key: "Department",
      render: (data)=> {
        console.log(data,"data");
        return(
          <div>
            {data + ","}
          </div>
        )
      }
    },
    {
      title: "Salary",
      dataIndex: "Salary",
      key: "Salary",
    },
    {
      title: "Ph Number",
      dataIndex: "PhNumber",
      key: "PhNumber",
    },
    {
      title: "EmailId",
      dataIndex: "EmailId",
      key: "EmailId",
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "Address",
    },
    {
      title: "State",
      dataIndex: "State",
      key: "State",
    },
    {
      title: "Edit",
      key: "edit",
      render: (data) => {
        return (
          <Space size="middle">
            <a onClick={() => navigate("/edit-employee", { state: data })}>
              Edit
            </a>
          </Space>
        );
      },
    },
    {
      title: "Delete",
      key: "delete",
      render: (data) => {
        return (
          <Popconfirm
            title="Remove employee"
            description="Are you sure to remove the employee?"
            onConfirm={() => confirm(data)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Space size="middle">
              <a>Delete</a>
            </Space>
          </Popconfirm>
        );
      },
    },
    {
      title: "Print",
      key: "print",
      render: (data) => {
        return (
          <Space size="middle">
            <a onClick={() => navigate("/print-employee", { state: data })}>
              Print
            </a>
          </Space>
        );
      },
    },
  ];
};

export const sortedArray = (state) => {
  return state.sort((a, b) => {
    if (a.EmployeeId > b.EmployeeId) {
      return 1;
    }
    if (a.EmployeeId < b.EmployeeId) {
      return -1;
    }
    return 0;
  });
};
