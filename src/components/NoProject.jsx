import React from 'react';
import noProject from '../assets/no-projects.png';
import Button from './Button';

function NoProject({onClickCreate}) {
  return (
    <div className="flex w-2/3 flex-col items-center justify-center gap-4">
          <img src={noProject} alt="no project" className='w-16 h-16 object-contain' />
          <h2 className='font-bold text-xl text-stone-800'>No project Selected</h2>
          <p className='text-lg text-stone-400'>Select a project or get started with a new one</p>
          <p>
              <Button onClick={onClickCreate}>Create a new project</Button>
          </p>
    </div>
  )
}

export default NoProject
