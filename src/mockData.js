
import {v4 as uuidv4} from 'uuid'

const mockData = [
  {
    id: uuidv4(),
    title: '📝 Task to do',
    tasks: [
      {
        id: uuidv4(),
        title: 'Study TypeScript'
      },
      {
        id: uuidv4(),
        title: 'Study Next Js 14'
      },
      {
        id: uuidv4(),
        title: 'Study Firebase'
      }
    ]
  },
  {
    id: uuidv4(),
    title: '✏️ In progress',
    tasks: [
      {
        id: uuidv4(),
        title: 'Study JavaScript'
      },
      {
        id: uuidv4(),
        title: 'Study Zustand'
      },
      {
        id: uuidv4(),
        title: 'Use GitHub Copilot'
      }
    ]
  },
  {
    id: uuidv4(),
    title: '✅ Finished',
    tasks: [
      {
        id: uuidv4(),
        title: 'Study React'
      }
    ]
  }
]

export default mockData
