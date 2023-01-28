import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { fetchFlowerData } from "../api/api";

function FlowerRlt() {
    const [data, setData] = useState(null);
    const { f_name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchFlowerData(f_name).then((jdata) => {
        setData(jdata);
        });
    }, []);

    return (
        <>
        <button className="button is-link" onClick={()=>{navigate(-1)}}>go back</button>
      <div className="content">
        <section className="is-medium is-link">
            <div className="message is-link">
            <div className="message-header">
            <p className="is-size-4">{f_name}</p>
            </div>
            <div className="message-body">
            {data==null ? 
            <>
                <p>loading</p>
            </>
            :
            <>
                {Object.keys(data).map((d, index) => {
                    return(
                        <div className="content">
                            <h4 className="has-text-primary">{d}</h4>
                            <ol>
                            {data[d].map((m, ind) =>{
                                return (
                                    <li key={m}>{m}</li>
                                )
                            })}
                            </ol>
                        </div>
                    )
                })}
            </>
            }
            </div>
            </div>
        </section>
        <div className="has-text-centered mt-6">
            <Link to="/">
            <button className="button is-link">home</button>
            </Link>
        </div>
      </div>
      </>
    );
  }
  
  export default FlowerRlt;