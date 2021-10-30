import Corner from "react-github-corner"

import Header from "../src/components/Header";
import FundoPrincipal from "../src/components/FundoPrincipal";
import { getAllProducts } from "../src/services/apiGet.js";

function Home (props) {
  const { dataProducts } = props

  return (
    <div>
      <Header />
      <Corner octoColor="#E42044" />
      <FundoPrincipal />
      <div>
        <h3>Mais vistos</h3>
        <div className="card-box">
          {dataProducts.map(data => {
            return (
              <ul key={data._id}>
                <a href={`/produtos/${data._id}`}>
                  <div className="card">
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                  </div>
                </a>
              </ul>
            )
          })}
        </div>
      </div>
      {/* 

      <footer>
        <h3>Portifolio - Northon Gracik</h3>
      </footer> 
      */}
    </div>
  )
}

export async function getServerSideProps(){
  const dataProducts = await getAllProducts();

  return {
    props:{
      dataProducts
    }
  }
}



export default Home;