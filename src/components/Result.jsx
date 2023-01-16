import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../api/api";

function Result(props) {
    console.log(props.e_id);
    const [data, setData] = useState(null);
    useEffect(() => {
        fetchData(props.e_id).then((jdata) => {
        setData(jdata);
        });
    }, []);

    return (
      <>
        <section className=" is-medium is-link">
            <p>result</p>

            {data==null ? 
            <>
                <p>loading</p>
                <p>{props.e_id}</p>
            </>
            :
            <>
                {data.map((d) => {
                    return(
                        <>
                            <p>{data.意味}</p>
                        </>
                    );
                })}
            </>
            }
        </section>
        <button className="button is-link">home</button>
      </>
    );
  }
  
  export default Result;