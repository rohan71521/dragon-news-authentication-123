import Header from "../../sharedCompo/Header";
import LeftSideBar from "../../sharedCompo/LeftSideBar";
import NavBar from "../../sharedCompo/NavBar";
import RightSideBar from "../../sharedCompo/RightSideBar";
import NewsFeed from "./NewsFeed";
import TopSlider from "./TopSlider";


function Home() {
    
    return(
<div>
    <Header></Header>
    <TopSlider></TopSlider>
    <NavBar></NavBar>

    <main className="grid md:grid-cols-4 gap-6 py-20">
    <section className="">
        <LeftSideBar></LeftSideBar>
    </section>


    <section className="col-span-2">
        <NewsFeed></NewsFeed>
    </section>



    <section className="">
        <RightSideBar></RightSideBar>
    </section>
    </main>
</div>
    )
}

export default Home;