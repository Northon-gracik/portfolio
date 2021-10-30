
import Header from "../src/components/Header";
import data from "../db.json"


function Store({  }) {
     
    return(
        <div>
            <Header/>
            <div className="Row">
                <div className="bar">
                    <a href="#">Node</a>
                    <a href="#">Spring</a>
                    <a href="#">React</a>
                </div>
                <a>
                    <div className="Hamburguer">
                        <div className="HamburguerChild"></div>
                        <div className="HamburguerChild"></div>
                        <div className="HamburguerChild"></div>
                    </div>
                </a>
            </div>
            <div className="Wrapper">
                <div className="barSup">
                    <a href="#">Projetos Java</a>
                    <a href="#">Projetos Node</a>
                    <a href="#">Projetos React</a>
                </div>
                 <div className="card-box">
                    {data.map( data => {
                        return(
                            <ul key={data.id}>
                                <a href={`/produtos/id:${data.id}`}>
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
        </div>
    )
}



export default Store