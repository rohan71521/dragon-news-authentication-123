import { FaGoogle , FaGithub, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import q1 from '../assets/qZone1.png'
import q2 from '../assets/qZone2.png'
import q3 from '../assets/qZone3.png'
import { useContext } from 'react';
import { UserContext } from '../Context/AuthContext';

function RightSideBar() {

    const { user } = useContext(UserContext)
    
    return(
<div className={`p-2 md:sticky top-0 right-0 ${user ? 'space-y-0' : 'space-y-10'}`}>

    
    {/* login with goole and github */}
    <section className={`space-y-3 ${user && 'hidden'}`}>
    <h3 className='text-xl'>Login With</h3>

    {/* login with google */}
    <div className='flex items-center justify-center gap-3
     text-blue-500 border-black border rounded p-2 cursor-pointer'>
    <FaGoogle/>
    <span>Login With Google</span>
    </div>

    {/* login with github */}
    <div className='flex items-center justify-center gap-3
     text-blue-500 border-black border rounded p-2 cursor-pointer'>
    <FaGithub/>
    <span>Login With Github</span>
    </div>
    </section>
     {/* login with goole and github ends*/}

    




    {/* social media links start*/}
    <section className=''>
    <h3 className='text-xl'>Find Us On</h3>

    {/* facebook */}
    <a href='' 
    className='flex items-center justify-center gap-3
    border rounded-t p-2 cursor-pointer'>
    <FaFacebook/>
    <span>Facebook</span>
    </a>

    {/* instagram */}
    <a href=''
     className='flex items-center justify-center gap-3
     border-x p-2 cursor-pointer'>
    <FaInstagram/>
    <span>Instagram</span>
    </a>


    {/* twiter */}
    <a href='' 
    className='flex items-center justify-center gap-3 
    border rounded-b p-2 cursor-pointer'>
    <FaTwitter/>
    <span>Twiter</span>   
    </a>
    </section>




    {/* Q Zone */}
    <section className='space-y-5'>
    <h3 className='text-xl'>Q-Zone</h3>
    <img src={q1} alt="" />
    <img src={q2} alt="" />
    <img src={q3} alt="" />
    </section>

</div>
    )
}

export default RightSideBar;