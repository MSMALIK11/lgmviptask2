import axios from 'axios';



export const getAllUsers=async(p)=>{

  
console.log("api page ",p);

try {
   

    const res=await axios.get(`https://reqres.in/api/users?page=${p}`);
   return res.data
} catch (error) {
    console.log('error while calling api',error);
    
}


}

