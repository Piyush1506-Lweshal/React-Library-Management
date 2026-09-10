import style from "../styles/dashboard.module.css";
import financeData from "../data/financeData.json";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import businessData from "../data/businessData.json";
// import activityData from "../data/activityData.json";

function Dashboard() {
  return (
    <>
      {/* //Charts div are using here// */}
      <div className="col-lg-5 align-items-center text-align-center ">
        <div className="card p-5">
          <Line
            data={{
              labels: financeData.map((item) => item.name),
              datasets: [
                {
                  label: "Profit",
                  data: financeData.map((item) => item.profit),
                  backgroundColor: "#6A5ACD",
                  borderColor: "#6A5ACD",
                },
                {
                  label: "Loss",
                  data: financeData.map((item) => item.loss),
                  backgroundColor: "#20B2AA",
                  borderColor: "#20B2AA",
                },
                {
                  label: "Revenue",
                  data: financeData.map((item) => item.revenue),
                  backgroundColor: "#74189f",
                  borderColor: "#74189f",
                },
              ],
            }}
          />
        </div>

        <div className="card p-5">
          <Bar
            data={{
              labels: financeData.map((item) => item.name),
              datasets: [
                {
                  label: "Profit",
                  data: financeData.map((item) => item.profit),
                  backgroundColor: "#6A5ACD",
                  borderColor: "#6A5ACD",
                },
                {
                  label: "Loss",
                  data: financeData.map((item) => item.loss),
                  backgroundColor: "#20B2AA",
                  borderColor: "#20B2AA",
                },
                {
                  label: "Revenue",
                  data: financeData.map((item) => item.revenue),
                  backgroundColor: "#74189f",
                  borderColor: "#74189f",
                },
              ],
            }}
          />
        </div>
        <div className="card p-5">
          <Doughnut
            data={{
              labels: financeData.map((item) => item.name),
              datasets: [
                {
                  data: financeData.map((item) => item.profit),
                  backgroundColor: [
                    "#6A5ACD",
                    "#20B2AA",
                    "#74189f",
                    "#fff000",
                    "#f0f",
                  ],
                  borderColor: [
                    "#e4e2f0",
                    "#708c8b",
                    "#e0ccea",
                    "#f0eecd",
                    "rgb(233, 193, 233)",
                  ],
                },
              ],
            }}
          />
        </div>
        <div className="card"></div>
        <div className="card radarCard"></div>
      </div>
    </>
  );
}
export default Dashboard;
// import { Component } from "react";

// function Dashboard() {
//   const feedDataStudents = [
//     {
//       serialNumber: 1,
//       studentName: "Neeraj",
//       bookId: 101,
//       bookName: "The Great Gatsby",
//       category: "Fiction",
//       status: "Given",
//     },
//     {
//       serialNumber: "2",
//       studentName: "Priyanshu",
//       bookId: "102",
//       bookName: "To Kill a Mockingbird",
//       category: "Fiction",
//       status: "Returned",
//     },
//     {
//       serialNumber: "3",
//       studentName: "Rohit",
//       bookId: "103",
//       bookName: "The Hunger Games",
//       category: "Novel",
//       status: "Given",
//     },
//     {
//       serialNumber: "4",
//       studentName: "Shivam",
//       bookId: "104",
//       bookName: "The Catcher in the Rye",
//       category: "Fiction",
//       status: "Returned",
//     },
//     {
//       serialNumber: "5",
//       studentName: "Amit",
//       bookId: "105",
//       bookName: "The Lord of the Rings",
//       category: "Fantasy",
//       status: "Given",
//     },
//   ];
//   return (
//     <>
//       <div className="container">
//         <div className={`row ${style.dashboard}`}>
//           <div className="col">
//             <table className="table border-collapse: collapse; ">
//               <thead>
//                 <tr>
//                   <th>Serial Number</th>
//                   <th>Student Name</th>
//                   <th>Book Id</th>
//                   <th>Book Name</th>
//                   <th>Category</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody className="p-0">
//                 {feedDataStudents.map((data) => (
//                   <tr key={data.serialNumber}>
//                     <td>{data.serialNumber}</td>
//                     <td>{data.studentName}</td>
//                     <td>{data.bookId}</td>
//                     <td>{data.bookName}</td>
//                     <td>{data.category}</td>
//                     <td>{data.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Dashboard;

// // a building block of UI is Components.
// // independent ,reusable bits of code that serve as the building blocks for any user interface.
