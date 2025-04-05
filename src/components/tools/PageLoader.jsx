import { MdImageSearch } from "react-icons/md";



export default function PageLoader() {
    return (
        <div className="min-h-150 flex flex-col items-center justify-center bg-gray-100" >
          <span className="text-blue-500 mr-3 ml-2">
            <MdImageSearch className="text-6xl mb-3" />
          </span>
  
  
    
  
          <h1 className="text-2xl pl-7 text-blue-500 font-roboto-mono font-bold flex items-center" >
            <span>Loading...</span>
    
          </h1>
        </div>
      );
  }
  