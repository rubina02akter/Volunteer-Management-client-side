import axios from "axios";



const axiosInstance = axios.create({
  baseURL: 'https://server-side-rho-lemon.vercel.app', // Correct domain
  withCredentials: true
});

const UseAxiosSecure = () => {

  // const{signOutUser} = useContext(AuthContext);
  // const navigate = useNavigate();
  // console.log('hi');

  // useEffect(() => {
  //   axiosInstance.interceptors.response.use(response => {
  //     return response ;
  //   }, error => {
  //     console.log('error caught in interceptor',error)

  //     if(error.status === 401 || error.status === 403){
  //       console.log('need to log out this user')
  //       signOutUser()
  //       .then(()=>{
  //         console.log('logged out user')
  //         navigate('/login')
  //       })
  //       .catch(error => {
  //         console.log('error',error)
  //       })
  //     }

  //     return Promise.reject(error)
  //   } )
  // },[])

  return axiosInstance;
};

export default UseAxiosSecure;