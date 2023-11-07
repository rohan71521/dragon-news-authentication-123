import Marquee from "react-fast-marquee";


function TopSlider() {



    return (
        <div className="bg-gray-200 p-2 flex gap-2 my-10">
            <button className="px-4 py-1 btn-secondary">Latest</button>
            <Marquee pauseOnHover={true }>
               <p className="mr-20"> I can be a React component, multiple React components, or just some text.</p>
               <p className="mr-20"> I can be a React component, multiple React components, or just some text.</p>
               <p className="mr-20"> I can be a React component, multiple React components, or just some text.</p>
            </Marquee>
        </div>
    )
}

export default TopSlider;