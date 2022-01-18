import { createContext,useReducer } from "react";
import githubReducer from "../GithubReducer";

const GithubContext = createContext()

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) =>{

   const initialState = {
       user : [],
       user: {},
       repos: [],
       loading : false
   }

   const [state,dispatch] = useReducer(githubReducer,initialState)

// clear Users 

// const clearUsers = () => dispatch({type:'CLEAR_USERS'})

   // Search users
//     const searchUsers = async (text) =>{

//         setLoading()

//         const params = new URLSearchParams ({
//             q:text
//         })
//         const responce = await fetch(`${GITHUB_URL}/search/users?${params}`,{
//             headers:{
//                 Authorization:`token${GITHUB_TOKEN}`
//             }
//         })

//         const {items} = await responce.json()
    
//         dispatch({
//             type : 'GET_USERS',
//             payload : items
//         })
      
//    }  



     // get single user
//      const getUser = async (login) =>{

//         setLoading()

      
//         const responce = await fetch(`${GITHUB_URL}/users/${login}`,{
//             headers:{
//                 Authorization:`token${GITHUB_TOKEN}`
//             }
//         })

       

//         if(responce.status === 404){
//             window.location = '/notfound'
//         }else{
//             const data = await responce.json()
    
//             dispatch({
//                 type : 'GET_USER',
//                 payload : data
//             })

//         }
      
//    }  


//    const getUserRepos = async (login) =>{

//     setLoading()

//     const params = new URLSearchParams ({
//         sort:'created',
//         per_page:10
//     })
  
//     const responce = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,{
//         headers:{
//             Authorization:`token${GITHUB_TOKEN}`
//         }
//     })

//     const data = await responce.json()

//     dispatch({
//         type : 'GET_REPOS',
//         payload : data
//     })
  
// }  


   //set Loading 

//    const setLoading = () => dispatch({
//       type :'SET_LOADING'
//    }) 

   return <GithubContext.Provider value ={{
       ...state,
       dispatch,
    
      // clearUsers,
      // getUser,
      // getUserRepos
       
       
   }}>
       {children}
   </GithubContext.Provider>

}

export default GithubContext