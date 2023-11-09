import PropTypes from 'prop-types';
import {  useNavigate } from 'react-router-dom';


function NewsCard({news}) {
    const home = useNavigate()
    
    const {image_url,details, title} = news;



    return(
<div>
    <div className='border p-5 space-y-7'>
    <img src={image_url} alt="" />
    <h2 className='font-bold text-xl'>{title} .</h2>
    <p>{details}</p>
    <button onClick={()=>home("/")} 
    className='px-4 py-2 bg-red-800 text-white'>
        ← All News In This Category </button>
    </div>


</div>
    )
}

NewsCard.propTypes  = {
    news : PropTypes.object
}

export default NewsCard;