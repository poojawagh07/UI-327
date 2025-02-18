

const CourseDetails=({courseDetails})=>{
  console.log(courseDetails,'Data Inside Child Components...!');
  return <>
    <div>{courseDetails.map((item,index)=>{
      return <>
       <p>{item.c_id}</p>
       <p>{item.cname}</p>
       <p>{item.cduration}</p>
       <p>{item.cstartDate}</p>
       <p>{item.cFees}</p>
       <p>{item.cTeacher}</p>
       </>

   })}</div>
  </>

}

export default CourseDetails;
