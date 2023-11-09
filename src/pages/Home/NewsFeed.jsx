import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function NewsFeed() {
    const [ news,  setNews] = useState([]);

    useEffect(()=>{
        fetch('news.json')
        .then(res=> res.json())
        .then(data => setNews(data) )
    },[])
    
    return(
<div>

    
   <div>
    {
        news.map(singleNews=> <div key={singleNews._id}
        className="bg-gray-200 my-5 rounded">
        <img src={singleNews.image_url} alt="" />
        <div className="p-3">
        <h3 className="text-lg font-bold py-3">{singleNews.title} .</h3>
        <div className=" flex justify-between items-center pb-5">
        <p>International</p>
        <span>sunday, 23 </span>
        </div> 
        <p>{(singleNews.details).slice(0,200)} . . . . .
        <Link to={`/${singleNews._id}`}
        className="text-blue-600 underline"> Read More </Link></p>
        </div>
        </div>)
    }
    </div>

</div>
    )
}

export default NewsFeed;