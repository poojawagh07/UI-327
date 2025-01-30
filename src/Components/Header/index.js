
import './Header.css';
import dglogo from '../../assests/images/DG-New-Logo.jpeg';

const Header = ({name,hname1,setCourseValue}) => {
    //console.log(name[0],'name@##$$$$$$');
    //console.log(name.name,'stude Details@@@####');
    //console.log(hname1,'hName@@@@@');
    const courses=['HTML','CSS','BOOTSTRAP','JAVASCRIPT','REACT JS']
    const courseName=()=>{
    // console.log('calling.......');
    setCourseValue(courses);
    }
    return (
        <>
              <button onClick={()=>{courseName()}}>Click Me</button>
                <h3 className='text-white'> THIS IS THE {hname1} PAGE</h3>
               
              <img src={dglogo} alt="imglogo" style={{height:'50px',width:'50px'}}/>
             
           
           
        </>
    )
}
export default Header;




