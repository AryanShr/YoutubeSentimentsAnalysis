import axios from "axios";
import {useNavigate} from "react-router-dom";
function SearchBar(props) {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    props.loader(true);
    axios.post("http://localhost:5000/api", {  
      // get the value of the input field 
      id: e.target[0].value
    }).then((res) => {
      console.log(res.data);
      props.loader(false);
      navigate("/dashboard", {state: res.data});
    }
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..." />
        <button type="submit" className="">
          Search
        </button>
      </form>
    </>
  )
}

export default SearchBar; 