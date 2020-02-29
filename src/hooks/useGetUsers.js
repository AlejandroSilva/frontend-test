import useAsyncValue from './useAsyncValue'
import {BACKEND_ENDPOINT} from '../constants/constants'

const useGetUsers = ()=> {
  const usersAsync = useAsyncValue()
  const fetchData = async ()=> {
    try {
      usersAsync.setLoading()
      const resp = await fetch(`${BACKEND_ENDPOINT}/api/users`)
      usersAsync.setValue(await resp.json())
    } catch(err) {
      console.error(err)
      usersAsync.setError(err)
    }
  }
  return [usersAsync, fetchData]
}
export default useGetUsers