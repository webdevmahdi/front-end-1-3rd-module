import React from 'react'

const UserList = ({data, isLoading, error}) => {
    
    if(isLoading && !error){
        return <p className='text-3xl'>Loading...</p>
    }
  return (
    <div>
    {
        data.map((item) => (
            <p>{item.name}</p>
        ))
    }
    </div>
  )
}

export default UserList