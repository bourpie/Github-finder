import { FaSpinner } from 'react-icons/fa'

function Spinner() {
  return (
    <div className='grid place-items-center'>
        <FaSpinner className="text-8xl animate-spin mt-8" />
    </div>
  )
}

export default Spinner