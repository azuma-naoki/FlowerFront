import { useEffect, useState } from "react";
// import Select from "./Select";
// import Result from "./Result";

function Body() {
    const [e_id, setID] = useState(0);
    const [data, setData] = useState(null);
    useEffect(() => {
        fetchData(props.e_id).then((jdata) => {
        setData(jdata);
        });
    }, []);

    function subForm(event){
        event.preventDefault();
        // event.stopPropagation();
        // const { emotion } = event.target.elements;
        // props.setId(emotion.value);
        setID(1);
        console.log(e_id);
        // navigate("/result");
    }

    return (
      <>
        <section className="is-white">
            <p> this is contents</p>
            <p>{e_id}</p>
            <p>choose your emotion</p>
            <form onSubmit={subForm}>
                <div className="select is-link">
                    <select name="emotion">
                        <option value={0}>喜び</option>
                        <option value={1}>信頼</option>
                        <option value={2}>恐れ</option>
                        <option value={3}>驚き</option>
                        <option value={4}>悲しみ</option>
                        <option value={5}>嫌悪</option>
                        <option value={6}>怒り</option>
                        <option value={7}>期待</option>
                    </select>
                </div>
                <button type="submit" className="button is-link">Search</button>
            </form>

            <p>result</p>

            {data==null ? 
            <>
                <p>loading</p>
            </>
            :
            <>
                {data.map((d) => {
                    return(
                        <>
                            <p>{d}</p>
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
  export default Body;