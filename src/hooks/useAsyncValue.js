import {useState} from 'react'

export default (defaultValue)=> {
  const defaultState = {
    isLoading: defaultValue===undefined || defaultValue===null,
    error: undefined,
    value: defaultValue
  }
  const [state, setState] = useState(defaultState)

  return {
    isLoading: state.isLoading,
    isError: state.isLoading===false && state.error,
    isOk: state.isLoading===false && state.error===undefined,
    error: state.error,
    value: state.value,
    setLoading: ()=> setState({
      isLoading: true,
      error: undefined,
      value: undefined
    }),
    setError: (error)=> setState({
      isLoading: false,
      error,
      value: undefined
    }),
    setValue: (value)=> setState({
      isLoading: false,
      error: undefined,
      value
    })
  }
}