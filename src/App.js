import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./Table";
function App() {
  const [data, setData] = useState([]);
  const [roll, setRoll] = useState("");
  const [total, setTotal] = useState(0);
  // const data1 = [
  //   {
  //     name: "w123",
  //     roll: 1132,
  //     checkInTime: new Date().toLocaleTimeString(),
  //     checkOutTime: new Date().toLocaleTimeString(),
  //   },
  //   {
  //     name: "md",
  //     roll: 12,
  //     checkInTime: new Date().toLocaleTimeString(),

  //   },

  // ];

  const [formData, setFormData] = useState({
    rollNumber: "",
    name: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const addStudent = () => {
    setFormData({
      rollNumber: "",
      name: "",
    });

    if (data.some((s) => s.roll === formData.rollNumber)) {
      alert("You have already checked in");
    } else {
      setData([
        ...data,
        {
          name: formData.name,
          roll: formData.rollNumber,
          checkInTime: new Date().toLocaleTimeString(),
          // checkOutTime: new Date().toLocaleTimeString(),
        },
      ]);
      setTotal(total + 1);
    }
  };
  useEffect(() => {
    // setData(data1);
  }, []);

  // checkout
  const handleCheckout = (e) => {
    setRoll(e.target.value);
  };

  const checkOutBtn = () => {
    // check student exits - Roll Number-

    const findStudent = data.find((e) => e.roll == roll);
    setRoll("");

    if (findStudent.checkOutTime) {
      alert("You have already checked out");
    } else {
      findStudent.checkOutTime = new Date().toLocaleTimeString();
      setData([...data]);
      setTotal(total - 1);
    }
  };

  return (
    <>
      <div className="glassy-text  m-4">
        <div className="p-3">
          <h1>Total No. of student present right now : {total}</h1>
        </div>

        <button
          type="button"
          className="btn btn-primary chkinbtn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          check-in
        </button>

        {/* check-model */}

        <div
          class="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content ">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Check-in Student
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="form">
                  <div class="mb-3 mx-2">
                    <label for="exampleFormControlInput1" class="form-label">
                      Enter name
                    </label>
                    <input
                      type="name"
                      class="form-control"
                      id="exampleFormControlInput1"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="mb-3 mx-2">
                    <label for="exampleFormControlInput12" class="form-label">
                      Enter rollNumber
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput12"
                      name="rollNumber"
                      value={formData.rollNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => addStudent()}
                >
                  Check-in
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* check model end */}

        <button
          type="button"
          className="mx-4 btn btn-info "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
        >
          check-out
        </button>

        {/* checkout model */}

        <div
          class="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  checkout student
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <label for="exampleFormControlInput13" class="form-label">
                  Enter Roll
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput13"
                  name="roll"
                  value={roll}
                  onChange={handleCheckout}
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => checkOutBtn()}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* checout model end */}

        {/* table */}

        <div className="container mt-5">
          <Table data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
