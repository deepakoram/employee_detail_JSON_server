import { useNavigate, useLocation } from "react-router-dom";
import { Button, Form, Input,Select } from "antd";
import "./style.scss";
//------------------------------------------------------------------------------

const EditEmployee = () => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  const options = [
    {
    value: "IT",
    label: "IT",
    },
    {
    value: "HR",
    label: "HR",
    },
    {
    value: "Customer Support",
    label: "Customer Support",
    },
    {
    value: "Sales",
    label: "Sales",
    },
  ];
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };
  const onFinish = (values) => {
    fetch(`http://localhost:8000/employees?EmployeeId=${data?.EmployeeId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const employee = data[0];
          const id = employee.id;

          const updatedEmployee = {
            ...employee,
            ...values,
          };

          fetch(`http://localhost:8000/employees/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedEmployee),
          })
            .then((response) => response.json())
            .then(() => navigate("/"))
            .catch((error) => console.error("Error:", error));
        } else {
          console.log("Employee not found");
        }
      })
      .catch((error) => console.error("Error:", error));
  };
  return (
    <div className="form-wrapper">
      <h2>Edit employee</h2>
      <Form
        className="form-container"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
          ...data,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Employee Id"
          name="EmployeeId"
          rules={[
            {
              required: true,
              message: "Please input your employee Id",
            },
          ]}
        >
          <Input disabled />
        </Form.Item>

        <Form.Item
          label="Employee Name"
          name="EmpName"
          rules={[
            {
              required: true,
              message: "Please input your employee name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Department"
          name="Department"
          rules={[
            {
              required: true,
              message: "Please input your department",
            },
          ]}
        >
           <Select
          mode="multiple"
          size="middle"
          placeholder="Please select"
          onChange={handleChange}
          style={{
            width: '100%',
          }}
          options={options}
        />
        </Form.Item>
        <Form.Item
          label="Salary"
          name="Salary"
          rules={[
            {
              required: true,
              message: "Please input your Salary!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ph Number"
          name="PhNumber"
          rules={[
            {
              required: true,
              message: "Please input your Ph Number",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email Id"
          name="EmailId"
          rules={[
            {
              required: true,
              message: "Please input your Email Id!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="Address"
          rules={[
            {
              required: true,
              message: "Please input your Address!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="State"
          name="State"
          rules={[
            {
              required: true,
              message: "Please input your State!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditEmployee;
