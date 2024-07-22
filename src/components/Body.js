
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'

const Body = () => {
 
  const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    }

])

// useEffect(()=>{
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
    
//       const {uid,email,displayName,photoURL} = user;
//       dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      
//       // ...
//     } else {
//       // User is signed out

//       dispatch(removeUser())
//     }
//   });
// },[]);

  return (
    <div className='overflow-hidden'>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body