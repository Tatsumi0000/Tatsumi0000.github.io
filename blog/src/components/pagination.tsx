import React from "react";
import { Link } from "gatsby"
import { navigate } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config, library } from "@fortawesome/fontawesome-svg-core"
import { faAngleDoubleLeft, faAngleLeft ,faAngleDoubleRight, faAngleRight } from "@fortawesome/free-solid-svg-icons"

config.autoAddCss = false;
library.add(faAngleDoubleLeft, faAngleLeft ,faAngleDoubleRight, faAngleRight);


const Pagenation = ({ pageContext }) => {
  const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext;

  const handleChange = (event, value) => {
    value === 1 ? navigate(`/`) : navigate(`/${value}`);
  };

  return (

<div className="flex flex-col items-center my-12">
    <div className="flex text-gray-700">
    
    {humanPageNumber !== 1 ? <Link to={"/"} className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
    <FontAwesomeIcon icon={faAngleDoubleLeft}/>
    </Link> : <div className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"><FontAwesomeIcon icon={faAngleDoubleLeft}/></div>}
      {previousPagePath ? <Link to={previousPagePath} className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
        <FontAwesomeIcon icon={faAngleLeft}/>
          </Link> : <div className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"><FontAwesomeIcon icon={faAngleLeft}/></div> }
        
        <div className="flex h-12 font-medium rounded-full bg-gray-200">
            <div className="w-12 flex justify-center items-center cursor-pointer rounded-full">{humanPageNumber}</div>
        </div>
      
      {nextPagePath ? <Link to={nextPagePath} className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
        <FontAwesomeIcon icon={faAngleRight}/>
          </Link> : <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"><FontAwesomeIcon icon={faAngleRight}/></div> }
    {humanPageNumber !== numberOfPages ? <Link to={"/"+numberOfPages} className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
    <FontAwesomeIcon icon={faAngleDoubleRight}/>
    </Link> : <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"><FontAwesomeIcon icon={faAngleDoubleRight}/></div>}
    </div>
</div> 

    // <div>
    //  {previousPagePath ? <Link to={previousPagePath}>前のページ</Link> : null }
		//  {nextPagePath ? <Link to={nextPagePath}>次のページ</Link> : null }
    // </div>
  );
};
export default Pagenation;