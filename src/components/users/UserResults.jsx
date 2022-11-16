import {useState, useEffect} from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

const URL = import.meta.env.VITE_API_URL
const TOKEN = import.meta.env.VITE_API_TOKEN

function UserResults() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        const response = await fetch(`${URL}/users`, {
            headers: {
                Authorization: `token ${TOKEN}`
            }
        })
        const data = await response.json()

        setUsers(data)
        setLoading(false)

        console.log(data)

    }
  
    useEffect(() => {
        if(!users.length) {
            fetchUsers()
        }      
    }, [])  
    

    if(!loading) {
        return (
            <ul className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
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