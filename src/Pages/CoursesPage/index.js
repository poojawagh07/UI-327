
import style from './CoursesPage.module.scss';
import {CourseDetaisl} from '../../MocData/';
import { useState } from 'react';
import CourseDetails from '../../Components/CourseDetails';


const CoursesPage = () => {

    const[courseDetails,setCourseDetails]=useState(CourseDetaisl);

    console.log(courseDetails);

    return (<>
        <div><CourseDetails courseDetails={courseDetails}/></div>
    </>)
}

export default CoursesPage;