
import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
})


  // Search users
//   export const searchUsers = async (text) =>{

   

//     const params = new URLSearchParams ({
//         q:text
//     })
//     const responce = await fetch(`${GITHUB_URL}/search/users?${params}`,{
//         headers:{
//             Authorization:`token${GITHUB_TOKEN}`
//         }
//     })

//     const {items} = await responce.json()

//    return items
  
// }  



// Get search results
export const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    })
  
    const response = await github.get(`/search/users?${params}`)
    return response.data.items
  }


   // get single user
//   export  const getUser = async (login) =>{

    

  
//     const responce = await fetch(`${GITHUB_URL}/users/${login}`,{
//         headers:{
//             Authorization:`token${GITHUB_TOKEN}`
//         }
//     })

   

//     if(responce.status === 404){
//         window.location = '/notfound'
//     }else{
//         const data = await responce.json()

//       return data

//     }
  
// }  

// get user repo 
//  export const getUserRepos = async (login) =>{

// const params = new URLSearchParams ({
//     sort:'created',
//     per_page:10
// })

// const responce = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,{
//     headers:{
//         Authorization:`token${GITHUB_TOKEN}`
//     }
// })

// const data = await responce.json()

// return data

// }  


// Get user and repos
export const getUserAndRepos = async (login) => {
    const [user, repos] = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos`),
    ])
  
    return { user: user.data, repos: repos.data }

}
