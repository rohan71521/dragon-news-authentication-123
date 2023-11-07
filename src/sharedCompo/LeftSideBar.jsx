import { useState } from "react"
import { useEffect } from "react"
import { NavLink } from "react-router-dom"


function LeftSideBar() {
    const [ categories, setCategories] = useState([]);
    // const [ news,  setNews] = useState([]);


    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data => setCategories(data) )
    },[])
    // useEffect(()=>{
    //     fetch('news.json')
    //     .then(res=> res.json())
    //     .then(data => setNews(data) )
    // },[])

    
    return(
<div className="md:sticky md:top-0 md:left-0 fixed top-5 left-0">
    <h3 className="text-xl pb-5">All Category</h3>

    {
        categories.map(categorie => <>
        <div style={{}}
        className="px-4 py-2 hover:bg-slate-300">
        <NavLink 
        key={categorie.id}>
        {categorie.name}
        </NavLink></div></>)
    }


    {/* <div>
    {
        news.map(singleNews=> <div key={singleNews._id}
        className=" my-5">
        <img src={singleNews.thumbnail_url} alt="" />
        <div className="p-3">
        <h3 className="text-lg font-bold py-3">{singleNews.title}</h3>
        <div className=" flex justify-between items-center pb-5">
        <p>International</p>
        <span>sunday, 23 </span>
        </div> 
        </div>
        </div>)
    }
    </div> */}

          
</div>
    )
}

export default LeftSideBar