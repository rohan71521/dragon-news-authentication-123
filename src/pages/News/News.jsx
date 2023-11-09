import { useLoaderData, useParams } from "react-router-dom";
import RightSideBar from "../../sharedCompo/RightSideBar";
import Header from "../../sharedCompo/Header";
import NewsCard from "./NewsCard";





function News() {
   
   const news = useLoaderData();
   const {id} = useParams()
   // console.log(news, id);

   const filteredNews = news.filter(singleNews => singleNews._id === id)
   
   //  console.log(filteredNews);



   return(
<div>
   <Header></Header>

   <div className="flex py-10 gap-10">
   <section className="md:w-3/4">
     {
      filteredNews.map(news=> <NewsCard  
         key={news._id} 
         news = {news}
         ></NewsCard>)
     }
   </section>


   <section className="md:w-1/4">
      <RightSideBar></RightSideBar>
   </section>
   </div>


</div>
)
}

export default News;