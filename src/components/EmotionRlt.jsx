import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchData } from "../api/api";
import { emotion } from "../const/emotion"

function EmotionRlt() {
    const [data, setData] = useState(null);
    const { e_id } = useParams();

    useEffect(() => {
        fetchData(e_id).then((jdata) => {
        setData(jdata);
        });
    }, []);

    return (
      <div className="content">
        <section className=" is-medium is-link">
            <h4>{emotion[e_id]}</h4>

            {data==null ? 
            <>
                <p>loading</p>
            </>
            :
            <>
                <ol>
                {data.map((d, index) => {
                    return(
                        <li key={index}>
                            <div className="box">
                                {d.name} / <Link to={`/flower/${d.par_name}`}>{d.par_name}</Link> / {d.mean}
                            </div>
                        </li>
                    );
                })}
                </ol>
            </>
            }
        </section>
        <div className="has-text-centered mt-6">
            <Link to="/">
                <button className="button is-link">home</button>
            </Link>
        </div>
      </div>
    );
  }
  
  export default EmotionRlt;