import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table, Input, message } from "antd";
import { constructTable, sortedArray } from "./helpers";
import { useDispatch } from 'react-redux'
import { employeeCount } from '../redux/counter/counterSlice'
import "./style.scss";
//------------------------------------------------------------------------------

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { Search } = Input;
  const [data, setData] = useState([]);

  const confirm = (data) => {
    deleteEmployee(data);
    message.success(`${data?.EmpName} is removed`);
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  const onSearch = (value) => {
    if (!value) {
      fetchEmp();
    }
    const filterData = data?.filter((item) =>
      item?.EmpName.toLowerCase().includes(value.toLowerCase())
    );
    setData(filterData);
  };

  function deleteEmployee(emp) {
    fetch(`http://localhost:8000/employees?EmployeeId=${emp?.EmployeeId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const id = data[0].id;
          fetch(`http://localhost:8000/employees/${id}`, {
            method: "DELETE",
          })
            .then((response) => response.json())
            .then(() => fetchEmp())
            .catch((error) => console.error("Error:", error));
        } else {
          console.log("Employee not found");
        }
      })
      .catch((error) => console.error("Error:", error));
  }
  async function fetchEmp() {
    try {
      const res = await fetch("http://localhost:8000/employees");
      const response = await res.json();
      setData(response);
      dispatch(employeeCount(response?.length))
    } catch (error) {
      console.log(error, "error");
    }
  }
  useEffect(() => {
    fetchEmp();
  }, []);

  return (
    <div className="table-container">
      <div className="search-bar">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          style={{ width: "400px", margin: "30px" }}
        />
        <Link to="/add-employee">Add Employee+</Link>
      </div>
      <h3>Employee Table</h3>
      <Table
        columns={constructTable({
          navigate,
          confirm,
          cancel,
        })}
        dataSource={sortedArray(data)}
      />
    </div>
  );
};

export default Home;
