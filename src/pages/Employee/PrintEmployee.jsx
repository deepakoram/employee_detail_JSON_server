import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Form, Input } from "antd";
import generatePDF from "react-to-pdf";
import "./style.scss";
//------------------------------------------------------------------------------

const PrintEmployee = () => {
  const targetRef = useRef();
  const location = useLocation();
  const data = location.state;

  return (
    <div className="form-wrapper">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Print employee</h2>
        <button
          onClick={() => generatePDF(targetRef, { filename: "page.pdf" })}
        >
          Print
        </button>
      </div>
      <div
        ref={targetRef}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
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
          autoComplete="off"
        >
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          ></Form.Item>
          <Form.Item label="Employee Id" name="EmployeeId">
            <Input disabled />
          </Form.Item>

          <Form.Item label="Employee Name" name="EmpName">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Department" name="Department">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Salary" name="Salary">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Ph Number" name="PhNumber">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Email Id" name="EmailId">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Address" name="Address">
            <Input disabled />
          </Form.Item>
          <Form.Item label="State" name="State">
            <Input disabled />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PrintEmployee;
