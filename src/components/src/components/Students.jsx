import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const books = [
  {
    id: "BK101",
    image: "https://via.placeholder.com/80x96?text=React",
    name: "React JS Guide",
    course: "BCA",
    type: "Programming",
    reader: "Piyush Tiwari",
    issueDate: "10-06-2026",
    returnDate: "25-06-2026",
    fine: 0,
    status: "Issued",
  },
  {
    id: "BK102",
    image: "https://via.placeholder.com/80x96?text=Node",
    name: "Node JS Handbook",
    course: "BSc IT",
    type: "Programming",
    reader: "Rahul Sharma",
    issueDate: "05-06-2026",
    returnDate: "20-06-2026",
    fine: 50,
    status: "Due",
  },
  {
    id: "BK103",
    image: "https://via.placeholder.com/80x96?text=DBMS",
    name: "Database Systems",
    course: "BCA",
    type: "Academic",
    reader: "Aman Singh",
    issueDate: "01-06-2026",
    returnDate: "15-06-2026",
    fine: 0,
    status: "Returned",
  },
];

const statusStyles = {
  Issued: "bg-success-subtle text-success border border-success-subtle",
  Due: "bg-danger-subtle text-danger border border-danger-subtle",
  Returned: "bg-primary-subtle text-primary border border-primary-subtle",
};

const stats = [
  {
    label: "Total Books",
    value: "1,500",
    icon: "bi-journal-bookmark",
    color: "primary",
  },
  {
    label: "Issued Books",
    value: "320",
    icon: "bi-box-arrow-up-right",
    color: "success",
  },
  {
    label: "Due Books",
    value: "25",
    icon: "bi-exclamation-circle",
    color: "danger",
  },
  {
    label: "Returned",
    value: "950",
    icon: "bi-arrow-return-left",
    color: "info",
  },
  {
    label: "Readers",
    value: "420",
    icon: "bi-people",
    color: "warning",
  },
  {
    label: "Fine Collected",
    value: "Rs. 5,200",
    icon: "bi-wallet2",
    color: "dark",
  },
];

const statusOptions = ["All", "Issued", "Due", "Returned"];

const exportColumns = [
  { label: "Book ID", getValue: (book) => book.id },
  { label: "Book Name", getValue: (book) => book.name },
  { label: "Course", getValue: (book) => book.course },
  { label: "Book Type", getValue: (book) => book.type },
  { label: "Reader", getValue: (book) => book.reader },
  { label: "Issue Date", getValue: (book) => book.issueDate },
  { label: "Return Date", getValue: (book) => book.returnDate },
  { label: "Fine", getValue: (book) => `Rs. ${book.fine}` },
  { label: "Status", getValue: (book) => book.status },
];

const formatCsvValue = (value) => `"${String(value).replace(/"/g, '""')}"`;

function Students() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredBooks = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return books.filter((book) => {
      const matchesStatus =
        statusFilter === "All" || book.status === statusFilter;

      const matchesSearch =
        !normalizedSearch ||
        [book.id, book.name, book.course, book.type, book.reader]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesStatus && matchesSearch;
    });
  }, [searchTerm, statusFilter]);

  const handleExport = () => {
    const rows = [
      exportColumns.map((column) => formatCsvValue(column.label)).join(","),
      ...filteredBooks.map((book) =>
        exportColumns
          .map((column) => formatCsvValue(column.getValue(book)))
          .join(","),
      ),
    ];

    const file = new Blob([rows.join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");

    link.href = url;
    link.download = "student-issued-books.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container-fluid min-vh-100 bg-light px-3 px-lg-4 py-4">
      <div
        className="rounded-3 border bg-white shadow-sm p-4 mb-4"
        style={{
          background:
            "linear-gradient(135deg, #ffffff 0%, #f2f7ff 46%, #fff8ec 100%)",
        }}
      >
        <div className="d-flex flex-column flex-xl-row align-items-start align-items-xl-center justify-content-between gap-4">
          <div>
            <div className="d-inline-flex align-items-center gap-2 rounded-pill bg-primary-subtle px-3 py-2 mb-3 text-primary fw-semibold small">
              <i className="bi bi-mortarboard" />
              Student Library Desk
            </div>
            <h2 className="fw-bold text-dark mb-2">Issued Books Records</h2>
            <p className="text-secondary mb-0">
              Track student readers, due books, returns, and fine collection in
              one clean workspace.
            </p>
          </div>

          <div className="d-flex flex-wrap gap-2">
            <Link
              to="/addstudents"
              className="btn btn-primary d-inline-flex align-items-center gap-2 shadow-sm"
            >
              <i className="bi bi-person-plus" />
              Add Student
            </Link>
            <button
              type="button"
              className="btn btn-outline-secondary d-inline-flex align-items-center gap-2"
              onClick={handleExport}
            >
              <i className="bi bi-download" />
              Export
            </button>
          </div>
        </div>
      </div>

      <div className="row g-3 mb-4">
        {stats.map((item) => (
          <div className="col-12 col-sm-6 col-xl-2" key={item.label}>
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between gap-3">
                  <div>
                    <p className="text-secondary small fw-semibold mb-2">
                      {item.label}
                    </p>
                    <h3 className={`text-${item.color} fw-bold mb-0`}>
                      {item.value}
                    </h3>
                  </div>
                  <span
                    className={`d-inline-flex align-items-center justify-content-center rounded-circle bg-${item.color}-subtle text-${item.color}`}
                    style={{ width: "42px", height: "42px" }}
                  >
                    <i className={`bi ${item.icon}`} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <div className="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center justify-content-between gap-3 p-3 p-lg-4 border-bottom">
            <div>
              <h5 className="fw-bold mb-1">Student Issue List</h5>
              <p className="text-secondary small mb-0">
                {filteredBooks.length} record
                {filteredBooks.length === 1 ? "" : "s"} visible
              </p>
            </div>

            <div className="d-flex flex-column flex-md-row gap-3">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <i className="bi bi-search text-secondary" />
                </span>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search book, reader, course..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </div>

              <div
                className="btn-group"
                role="group"
                aria-label="Filter by book status"
              >
                {statusOptions.map((status) => (
                  <button
                    type="button"
                    className={`btn ${
                      statusFilter === status
                        ? "btn-dark"
                        : "btn-outline-secondary"
                    }`}
                    key={status}
                    onClick={() => setStatusFilter(status)}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th className="ps-4">Book</th>
                  <th>Course</th>
                  <th>Reader</th>
                  <th>Issue Date</th>
                  <th>Return Date</th>
                  <th>Fine</th>
                  <th>Status</th>
                  <th className="text-end pe-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredBooks.map((book) => (
                  <tr key={book.id}>
                    <td className="ps-4">
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src={book.image}
                          alt={book.name}
                          className="rounded-2 object-fit-cover border"
                          width="56"
                          height="64"
                        />
                        <div>
                          <p className="fw-semibold mb-1">{book.name}</p>
                          <div className="d-flex flex-wrap align-items-center gap-2">
                            <span className="text-secondary small">
                              {book.id}
                            </span>
                            <span className="badge rounded-pill bg-secondary-subtle text-secondary">
                              {book.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="fw-semibold">{book.course}</span>
                    </td>
                    <td>{book.reader}</td>
                    <td className="text-secondary">{book.issueDate}</td>
                    <td className="text-secondary">{book.returnDate}</td>
                    <td>
                      <span
                        className={
                          book.fine > 0
                            ? "fw-bold text-danger"
                            : "fw-semibold text-success"
                        }
                      >
                        Rs. {book.fine}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`badge rounded-pill px-3 py-2 ${
                          statusStyles[book.status]
                        }`}
                      >
                        {book.status}
                      </span>
                    </td>
                    <td className="text-end pe-4">
                      <div className="btn-group btn-group-sm">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          title="Delete record"
                          aria-label={`Delete ${book.name}`}
                        >
                          <i class="bi bi-trash"></i>
                        </button>
                        <Link to="/updatestudentdata">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            title="Edit record"
                            aria-label={`Edit ${book.name}`}
                          >
                            <i className="bi bi-pencil-square" />
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredBooks.length === 0 && (
                  <tr>
                    <td className="text-center py-5" colSpan="8">
                      <i className="bi bi-search display-6 text-secondary d-block mb-2" />
                      <p className="fw-semibold mb-1">No records found</p>
                      <p className="text-secondary mb-0">
                        Try a different search term or status filter.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;
