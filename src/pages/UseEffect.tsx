import { useEffect, useState } from 'react'

const UseEffect = () => {
    const [hidden, setHidden] = useState(false)
    return (
        <div>
            <button onClick={()=> setHidden((prev)=> !prev)}>{hidden ? "Show" : "Hide"}</button>
            {!hidden && <Todo />}
        </div>
    )
}

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(()=> {
        const intervalId = setInterval(()=>{
            console.log('Render')
            setCount((prev)=> prev + 1);
        }, 1000)
        return ()=> {
            clearInterval(intervalId)
        }
    },[])
  return (
    <div>{count}</div>
  )
}

const Todo = () => {
    const controller = new AbortController();
    const signal = controller.signal;
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1', {signal})
        .then(res => res.json())
        .then(data => alert(data.title))
        return ()=> {
            controller.abort()
        }
    }, [])
    return (
        <div>
            <h1 className='border border-red-400 border-4 text-2xl w-60'>Todo</h1>
        </div>
    )
}

export default UseEffect