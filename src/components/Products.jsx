import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [response, setRespose] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      // const { data } = await axios.get(
      //   "https://api.escuelajs.co/api/v1/categories",
      // );
      setRespose(data);
    }
    fetchApi();
  }, []);

  // if (response.length === 0) {
  //   return (
  //     <>
  //       <div className="row">
  //         <div className="col-12">
  //           <div className="card " aria-hidden="true">
  //             <div className="card-body">
  //               <h5 className="card-title placeholder-glow">
  //                 <span className="col-6 placeholder"></span>
  //               </h5>
  //               <p className="card-text placeholder-glow">
  //                 <span className="placeholder col-7"></span>
  //                 <span className="placeholder col-4"></span>
  //                 <span className="placeholder col-4"></span>
  //                 <span className="placeholder col-8"></span>
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <div className="row">
        {response.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 p-3" key={index}>
            <div className="card p-2">
              <img src={item.image} alt="Image" height={200} />
              <h3 className="text-center">{item.name}</h3>
              <button className="btn btn-outline-success btn-sm">
                View Order {index}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Products;
