import APIcall from '../Services/commonService';

export const AxiosGetStudentDetails=async (orgId)=>{
  try{
     const res= await APIcall({
        url:'https://www.developerguru.in/getStudentDetsils?orgId=orgId`',
        method:'POST'
     })
   return res;
  }
  catch(e)
  {
    console.log(e);
  }


}