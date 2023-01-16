// import { Link, useNavigate } from "react-router-dom";
function Select(props) {
    // const navigate = useNavigate();
    // const setId = props.setId;

    function subForm(event){
        event.preventDefault();
        // event.stopPropagation();
        // const { emotion } = event.target.elements;
        // props.setId(emotion.value);
        // this.setId(1);
        console.log(props.hello);
        // navigate("/result");
    }

    return (
      <>
        <section className="is-white">
            <p> this is contents</p>
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
        </section>
      </>
    );
  }
  
  export default Select;