import React from 'react'
import { sagaActions } from '../../store/sagas/sagaActions'
import { useDispatch,useSelector} from "react-redux";
const User = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.users);
  return (
    <>
    <button onClick={()=>{
     dispatch({ type: sagaActions.FETCH_USER_DATA})
    }} className='px-5 bg-zinc-900 text-white'>User Fetch</button>

    <ul> 
            {
                data.map((user)=>{
                    return(
                        <>
                          <li>{user.email}</li>
                          <li>{user.username}</li>
                          <li>{user.number}</li>
                        </>
                    )
                })
            }
    </ul>
   </>
  )
}

export default User