function UpdateStudentsData() {
  return (
    <>
      <div className="container">
        <div className="row d-flex aign-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="card p-5">
              <form>
                <div className="mb-3">
                  <label class="form-label">Course</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Reader</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Issue Date</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Return Date</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Fine</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <input type="text" class="form-control" />
                </div>
                <div
                  type="submit"
                  className="btn btn-primary d-flex justify-content-center"
                >
                  Submit
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UpdateStudentsData;
