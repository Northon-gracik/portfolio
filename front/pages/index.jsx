//git para deploy na vercel
import { useState } from "react";
import Corner from "react-github-corner"

import Header from "../src/components/Header";
import FundoPrincipal from "../src/components/FundoPrincipal";

import { getAllProducts } from "../src/services/apiGet.js";

function Home(props) {
  // const { dataProducts } = props

  const [dataProducts, setDataProducts] = useState([]);

  getAllProducts().then(data => setDataProducts(data));

  return (
    <div>
      <Header />
      <Corner octoColor="#E42044" />
      <FundoPrincipal />
      <div>
        <h3>Mais vistos</h3>
      </div>
      <div className="card-box">
        {dataProducts > 0 ? dataProducts.map(data => {
          return (
            <div key={data._id}>
              <a href={`/produtos/${data._id}`}>
                <div className="card">
                  <h3>{data.name}</h3>
                  <p>{data.description}</p>
                </div>
              </a>
            </div>
          )
        }): 
        <></>
        }
      </div>
      {/* 
      <footer>
        <h3>Portifolio - Northon Gracik</h3>
      </footer> 
      */}
    </div>
  )
}

// export async function getServerSideProps(){
//   const dataProducts = await getAllProducts();

//   return {
//     props:{
//       dataProducts
//     }
//   }
// }



export default Home;
