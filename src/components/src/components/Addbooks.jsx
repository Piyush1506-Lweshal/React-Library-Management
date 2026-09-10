import React from "react";

function Addbooks() {
  return (
    <>
      <div className="container bg-light py-3">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <nav className="navbar text-bg-secondary btn-outline-warning">
                <div className="container">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn text-bg-light btn-outline-success"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                  <button className="btn text-bg-light btn-outline-success">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </span>
                    Add New Books
                  </button>
                </div>
              </nav>
              <table style={{ fontSize: "12px" }} className="table">
                <thead>
                  <tr>
                    <th>Member ID</th>
                    <th>Member</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Borrowed Date</th>
                    <th>Returned Date</th>
                    <th>Status</th>
                    <th className="colspan-3">Action</th>
                  </tr>
                  <tr>
                    <td>M001</td>
                    <td>Piyush Sharma</td>
                    <td>The Alchemist</td>
                    <td>Paulo Coelho</td>
                    <td>2026-03-20</td>
                    <td>2026-03-27</td>
                    <td>Returned</td>
                    <td>
                      <button type="button" className="btn btn-outline-success">
                        Return
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-warning">
                        Review
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-danger">
                        Reverse
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>M002</td>
                    <td>Anjali Verma</td>
                    <td>Rich Dad Poor Dad</td>
                    <td>Robert Kiyosaki</td>
                    <td>2026-03-22</td>
                    <td>-</td>
                    <td>Borrowed</td>
                    <td>
                      <button type="button" className="btn btn-outline-success">
                        Return
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-warning">
                        Review
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-danger">
                        Reverse
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>M003</td>
                    <td>Rahul Singh</td>
                    <td>Atomic Habits</td>
                    <td>James Clear</td>
                    <td>2026-03-18</td>
                    <td>2026-03-25</td>
                    <td>Returned</td>
                    <td>
                      <button type="button" className="btn btn-outline-success">
                        Return
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-warning">
                        Review
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-danger">
                        Reverse
                      </button>
                    </td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td>M004</td>
                    <td>Neha Joshi</td>
                    <td>Ikigai</td>
                    <td>Hector Garcia</td>
                    <td>2026-03-24</td>
                    <td>-</td>
                    <td>Borrowed</td>
                    <td>
                      <button type="button" className="btn btn-outline-success">
                        Return
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-warning">
                        Review
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-danger">
                        Reverse
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>M005</td>
                    <td>Aman Gupta</td>
                    <td>Think and Grow Rich</td>
                    <td>Napoleon Hill</td>
                    <td>2026-03-15</td>
                    <td>2026-03-22</td>
                    <td>Returned</td>
                    <td>
                      <button type="button" className="btn btn-outline-success">
                        Return
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-warning">
                        Review
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-danger">
                        Reverse
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>M006</td>
                    <td>Sneha Kapoor</td>
                    <td>The Psychology of Money</td>
                    <td>Morgan Housel</td>
                    <td>2026-03-26</td>
                    <td>-</td>
                    <td>Borrowed</td>
                    <td>
                      <button type="button" className="btn btn-outline-success">
                        Return
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-warning">
                        Review
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-danger">
                        Reverse
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>M007</td>
                    <td>Rohan Mehta</td>
                    <td>Deep Work</td>
                    <td>Cal Newport</td>
                    <td>2026-03-10</td>
                    <td>2026-03-17</td>
                    <td>Returned</td>
                    <td>
                      <button type="button" className="btn btn-outline-success">
                        Return
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-warning">
                        Review
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-danger">
                        Reverse
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>M008</td>
                    <td>Kavya Nair</td>
                    <td>Start With Why</td>
                    <td>Simon Sinek</td>
                    <td>2026-03-28</td>
                    <td>-</td>
                    <td>Borrowed</td>
                    <td>
                      <button type="button" className="btn btn-outline-success">
                        Return
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-warning">
                        Review
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-danger">
                        Reverse
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>M009</td>
                    <td>Arjun Patel</td>
                    <td>Zero to One</td>
                    <td>Peter Thiel</td>
                    <td>2026-03-12</td>
                    <td>2026-03-19</td>
                    <td>Returned</td>
                    <td>
                      <button type="button" className="btn btn-outline-success">
                        Return
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-warning">
                        Review
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-danger">
                        Reverse
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>M010</td>
                    <td>Meera Iyer</td>
                    <td>The Power of Habit</td>
                    <td>Charles Duhigg</td>
                    <td>2026-03-29</td>
                    <td>-</td>
                    <td>Borrowed</td>
                    <td>
                      <button type="button" className="btn btn-outline-success">
                        Return
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-warning">
                        Review
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-danger">
                        Reverse
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>M011</td>
                    <td>Vikram Chauhan</td>
                    <td>Can't Hurt Me</td>
                    <td>David Goggins</td>
                    <td>2026-03-14</td>
                    <td>2026-03-21</td>
                    <td>Returned</td>
                    <td>
                      <button type="button" className="btn btn-outline-success">
                        Return
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-warning">
                        Review
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn btn-outline-danger">
                        Reverse
                      </button>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Addbooks;
