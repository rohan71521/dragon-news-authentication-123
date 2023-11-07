import logo from '../assets/logo.png'


import moment from 'moment';
function Header() {
    
    return(
        <div>
            <img className='mx-auto py-4' src={logo} alt="" />
            <p className='text-center'>Journalism Without Fear or Favour</p>
            <p className='text-center'>{moment().format('dddd, MMMM, D, YYYY')}</p>
        </div>
    )
}

export default Header;