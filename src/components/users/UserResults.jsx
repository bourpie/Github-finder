import {useState, useEffect} from 'react'
import Spinner from '../layout/Spinner'

function UserResults() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const API_URL = import.meta.env.VITE_API_URL
  
    useEffect(() => {
      fetchUsers()
    
    }, [])  
    
    const fetchUsers = async () => {
        const response = await fetch(`${API_URL}/users`, {
            headers: {
                Authorization: `token ${import.meta.env.VITE_API_TOKEN}`
            }
        })
        const data = await response.json()

        setUsers(data)
        setLoading(false)

    }

    if(!loading) {
        return (
            <ul className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user, index) => (
                    <li key={index}>{user.login}</li>
                ))}
            </ul>
        )
    } else {
        return (
            <Spinner />
        )  
    }

}

export default UserResults