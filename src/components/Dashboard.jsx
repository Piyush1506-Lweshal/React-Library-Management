// import { Component } from "react";
// import style from "../styles/dashboard.module.css";

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
//     <div className="container">

//       <div className={`row ${style.dashboard}`}>
//         <div className="col">
//             <table className="table border-collapse: collapse; ">
//                 <thead>
//                     <tr>
//                         <th>Serial Number</th>
//                         <th>Student Name</th>
//                         <th>Book Id</th>
//                         <th>Book Name</th>
//                         <th>Category</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody className="p-0">
//                     {feedDataStudents.map((data) => (
//                       <tr key={data.serialNumber}>
//                             <td>{data.serialNumber}</td>
//                             <td>{data.studentName}</td>
//                             <td>{data.bookId}</td>
//                             <td>{data.bookName}</td>
//                             <td>{data.category}</td>
//                             <td>{data.status}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Dashboard;

// // a building block of UI is Components.
// // independent ,reusable bits of code that serve as the building blocks for any user interface.
