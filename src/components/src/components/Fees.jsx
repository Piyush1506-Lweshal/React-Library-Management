import React, { useState } from "react";

function Fees() {
  const [name, setName] = useState("");
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const val = e.target.value;
    setName(val);
    setSearch(val);
  };
  const [fees, setFees] = useState({
    studentId: "",
    studentName: "",
    course: "",
    semester: "",
    totalFee: "",
    paidAmount: "",
    dueAmount: "",
    paymentMode: "",
    receiptNo: "",
    transactionId: "",
    paymentDate: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updated = {
      ...fees,
      [name]: value,
    };

    if (name === "totalFee" || name === "paidAmount") {
      const total = Number(name === "totalFee" ? value : updated.totalFee) || 0;
      const paid =
        Number(name === "paidAmount" ? value : updated.paidAmount) || 0;

      updated.dueAmount = total - paid;

      if (paid === 0) updated.status = "Pending";
      else if (paid >= total) updated.status = "Paid";
      else updated.status = "Partial";
    }

    setFees(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRecords([...records, fees]);

    setFees({
      studentId: "",
      studentName: "",
      course: "",
      semester: "",
      totalFee: "",
      paidAmount: "",
      dueAmount: "",
      paymentMode: "",
      receiptNo: "",
      transactionId: "",
      paymentDate: "",
      status: "",
    });
  };

  const totalCollection = records.reduce(
    (sum, item) => sum + Number(item.paidAmount),
    0,
  );

  const filtered = records.filter(
    (item) =>
      item.studentName.toLowerCase().includes(search.toLowerCase()) ||
      item.studentId.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container-fluid py-4 bg-light">
      <h2 className="fw-bold mb-4 text-primary">
        💰 Fees Collection Management
      </h2>

      {/* Cards */}

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card shadow border-0 bg-primary text-white">
            <div className="card-body">
              <h5>Total Students</h5>
              <h2>{records.length}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow border-0 bg-success text-white">
            <div className="card-body">
              <h5>Total Collection</h5>
              <h2>₹ {totalCollection}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow border-0 bg-warning text-dark">
            <div className="card-body">
              <h5>Paid Students</h5>
              <h2>{records.filter((x) => x.status === "Paid").length}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow border-0 bg-danger text-white">
            <div className="card-body">
              <h5>Pending Students</h5>
              <h2>
                {
                  records.filter(
                    (x) => x.status === "Pending" || x.status === "Partial",
                  ).length
                }
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}

      <div className="card shadow mb-4">
        <div className="card-header bg-dark text-white">
          <h4>Collect Fees</h4>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-3">
                <label>Student ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="studentId"
                  value={fees.studentId}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label>Student Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="studentName"
                  value={fees.studentName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label>Course</label>
                <input
                  type="text"
                  className="form-control"
                  name="course"
                  value={fees.course}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label>Semester</label>
                <input
                  type="text"
                  className="form-control"
                  name="semester"
                  value={fees.semester}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label>Total Fee</label>
                <input
                  type="text"
                  className="form-control"
                  name="totalFee"
                  value={fees.totalFee}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label>Paid Amount</label>
                <input
                  type="text"
                  className="form-control"
                  name="paidAmount"
                  value={fees.paidAmount}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label>Due Amount</label>
                <input
                  type="text"
                  className="form-control"
                  value={fees.dueAmount}
                  readOnly
                />
              </div>

              <div className="col-md-3">
                <label>Status</label>
                <input
                  type="text"
                  className="form-control"
                  value={fees.status}
                  readOnly
                />
              </div>

              <div className="col-md-3">
                <label>Payment Mode</label>
                <select
                  className="form-select"
                  name="paymentMode"
                  value={fees.paymentMode}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>Cash</option>
                  <option>UPI</option>
                  <option>Card</option>
                  <option>Net Banking</option>
                  <option>Cheque</option>
                </select>
              </div>

              <div className="col-md-3">
                <label>Receipt No</label>
                <input
                  type="text"
                  className="form-control"
                  name="receiptNo"
                  value={fees.receiptNo}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label>Transaction ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="transactionId"
                  value={fees.transactionId}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <label>Payment Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="paymentDate"
                  value={fees.paymentDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button className="btn btn-success mt-4">Collect Fees</button>
          </form>
        </div>
      </div>

      {/* Search */}

      <div className="card shadow">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h4>Fees Records</h4>

          <input
            className="form-control w-25"
            placeholder="Search Student..."
            value={name}
            onChange={handleSearch}
          />
        </div>

        <div className="card-body table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Semester</th>
                <th>Total Fee</th>
                <th>Paid</th>
                <th>Due</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Receipt</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="11" className="text-center">
                    No Records Found
                  </td>
                </tr>
              ) : (
                filtered.map((item, index) => (
                  <tr key={index}>
                    <td>{item.studentId}</td>
                    <td>{item.studentName}</td>
                    <td>{item.course}</td>
                    <td>{item.semester}</td>
                    <td>₹ {item.totalFee}</td>
                    <td>₹ {item.paidAmount}</td>
                    <td>₹ {item.dueAmount}</td>

                    <td>
                      <span
                        className={`badge ${
                          item.status === "Paid"
                            ? "bg-success"
                            : item.status === "Partial"
                              ? "bg-warning text-dark"
                              : "bg-danger"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td>{item.paymentMode}</td>
                    <td>{item.receiptNo}</td>
                    <td>{item.paymentDate}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Fees;
