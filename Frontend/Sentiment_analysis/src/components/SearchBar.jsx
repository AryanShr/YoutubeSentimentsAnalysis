import axios from "axios";
import { useNavigate } from "react-router-dom";

function getVideoId(url) {
  const videoId = url.split("v=")[1];
  const ampersandPosition = videoId.indexOf("&");
  if (ampersandPosition !== -1) {
    return videoId.substring(0, ampersandPosition);
  }
  return videoId;
}

function SearchBar(props) {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    props.loader(true);
    axios.post("http://localhost:5000/api", {
      // get the value of the input field 
      id: getVideoId(e.target[0].value)
    }).then((res) => {
      props.loader(false);
      navigate("/dashboard", { state: {"id":getVideoId(e.target[0].value),"comment":JSON.parse(res.data)} });
    }
    );
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-800 to-slate-900 bg-scroll">
        <div className="bg-white w-96 rounded overflow-hidden shadow-lg p-6 space-y-10">
          <header className="flex items-center justify-around">
            <div className="text-2xl font-bold text-red-600 text-center justify-center">YouTube</div>
          </header>
          <div>
            <form onSubmit={handleSubmit} className="flex">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Search..."
              />
              <button type="submit" className="ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" fill="red" >
                  <path d="M 21 3 C 11.6 3 4 10.6 4 20 C 4 29.4 11.6 37 21 37 C 24.354553 37 27.47104 36.01984 30.103516 34.347656 L 42.378906 46.621094 L 46.621094 42.378906 L 34.523438 30.279297 C 36.695733 27.423994 38 23.870646 38 20 C 38 10.6 30.4 3 21 3 z M 21 7 C 28.2 7 34 12.8 34 20 C 34 27.2 28.2 33 21 33 C 13.8 33 8 27.2 8 20 C 8 12.8 13.8 7 21 7 z"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar; 