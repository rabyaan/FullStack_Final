import React from 'react'
import TaskForm from '@/components/custom/TaskForm'
import { getTask, getCompletedTask, getUncompletedTask } from './actions/tasks'
import { Switch } from "@/components/ui/switch"
import DeleteDialog from '@/components/custom/DeleteDialog'
import UpdateForm from '@/components/custom/UpdateForm'


export default async function () {

  const task = await getTask()
  const cTasks = await getCompletedTask()
  const uTasks = await getUncompletedTask()

  let totalTasks = 0;

  task.map(() => {
    totalTasks++;
  });

  let completedTasks = 0;

  cTasks.map(() => {
    completedTasks++;
  });

  let notCompletedTasks = 0;
  uTasks.map(() => {
    notCompletedTasks++;
  });

  return (
    <div className='max-w-[1200px] m-auto mt-10 flex flex-col gap-6'>
      <div className=''>
        <h1 className='font-bold text-5xl text-center'>Task Management App</h1>
      </div>
      <div className='cards flex gap-2 px-[40px] py-6'>
        <div className='p-6 py-9 rounded-3xl w-full bg-[#91ffe7] items-center flex flex-col '>
          <p>Total Tasks</p>
          <p className='font-bold text-[50px]'>
            {totalTasks}
          </p>
        </div>
        <div className='p-6 py-9 rounded-3xl w-full bg-[#d6ffa8] items-center flex flex-col '>
          <p>Completed Tasks</p>
          <p className='font-bold text-[50px]'>
            {completedTasks}
          </p>
        </div>
        <div className='p-6 py-9 rounded-3xl w-full bg-[#ffb5b5] items-center flex flex-col '>
          <p>Pending Tasks</p>
          <p className='font-bold text-[50px]'>
            {notCompletedTasks}
          </p>
        </div>
      </div>
      <TaskForm />
      {task.map(task => (
        <div key={task.id} className=' rounded-3xl py-9 px-4 flex align-middle justify-between mb-6 border-[#e0e0e0] border-[1px]'>
          <div>
            <p className='font-bold'>{task.name}</p>
          </div>
          <div className='flex items-center justify-between gap-2'>
            <div className='flex items-center justify-between gap-1'>
              <p className='text-[14px]'>Mark as Completed</p>
              <UpdateForm />
              {/* <Switch /> */}
            </div>
            <div>
              <DeleteDialog id={task.id} />
            </div>
          </div>

        </div>
      ))}



    </div>
  )
}
