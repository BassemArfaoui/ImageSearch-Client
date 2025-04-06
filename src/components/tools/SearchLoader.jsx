import { MdImageSearch } from "react-icons/md";



export default function SearchLoader() {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-100" >
        <span className="text-blue-500 mr-2 ml-1">
          <MdImageSearch className="text-4xl mb-2" />
        </span>


  

        <h1 className="text-lg pl-7 text-blue-500 font-roboto-mono font-bold flex items-center" >
          <span>Searching...</span>
  
        </h1>
      </div>
    );
  }
  