import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Select(props) {
    const [target, setTarget] = useState(0);

    useEffect(()=>{
        console.log("change"+target);
    },[target])

    useEffect(()=>{
        console.log("submit"+props.e_id);
    },[props.e_id])

    function doChange(event){
        const target_id = event.target.value;
        setTarget(target_id);
    }

    return (
      <div className="content">
        <section className="section is-white">
            <div className="content has-text-centered">
            <h3>choose your emotion</h3>
            <form>
                <div className="select is-rounded is-medium is-link">
                    <select name="emotion" onChange={doChange}>
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
                <Link to={`/emotion/${target}`}>
                <button type="submit" className="button is-medium is-link">Search</button>
                </Link>
            </form>
            </div>
        </section>
      </div>
    );
  }
  
  export default Select;