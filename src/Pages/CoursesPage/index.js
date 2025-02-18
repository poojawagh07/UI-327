
import style from './CoursesPage.module.scss';
import { CourseDetaisl } from '../../MocData/';
import { useEffect, useState } from 'react';
import CourseDetails from '../../Components/CourseDetails';
import AxiosGetStudentDetails from '../../Services/Api';


const CoursesPage = () => {
    const [courseDetails, setCourseDetails] = useState(CourseDetaisl);
    const [studentDetails,setStudentDetails]=useState();
    const [orgId,setOrgId]=useState();
    console.log(courseDetails);
    console.log(studentDetails);

    useEffect(()=>{
       const orgId= localStorage.getItem('OrgId');
       setOrgId(orgId);
     },[])

     useEffect(()=>{
        if(orgId) getStudentDetails(orgId);
    },[orgId])


    const getStudentDetails = async (orgId) => {
        try {
        const reponse= await AxiosGetStudentDetails(orgId);
         if(response.statusCode===200){
           console.log(response.data); //
           setStudentDetails(response.data);
         }}
       catch (e) {
           console.log(e);
        }


    }





    return (<>
        <div><CourseDetails courseDetails={courseDetails} /></div>
    </>)
}

export default CoursesPage;