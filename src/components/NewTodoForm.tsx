import React, {useState} from 'react';

export const NewTodoForm: React.FC<{addTodo:Function }> = (props) => {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if(description !== '' && assigned !== '') {
            props.addTodo(description, assigned);
            setAssigned('');
            setDescription('');
        }
    }

    return (
    <div className='border-b border-gray-900/10 pb-12'>
      <form>
        <div className='sm:col-span-4'>
          <label className='test'>Assigned</label>
          <input type='text' className='' required
          onChange={e => setAssigned(e.target.value)}
          value={assigned}
          ></input>
        </div>
        <div className='sm:col-span-4'>
          <label className='fd'>Description</label>
          <textarea className='' rows={3} required
          onChange={e => setDescription(e.target.value)}
          value={description}
          ></textarea>
        </div>
        <button type='button'
         onClick={submitTodo}
         className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Add Todo</button>
      </form>
    </div>
    )
}