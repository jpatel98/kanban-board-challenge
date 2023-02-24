import { v4 as uuidv4 } from 'uuid';

const mockData = [
    {
        id: uuidv4(),
        title: ' ✏️To do',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn TypeScript'
            },
            {
                id: uuidv4(),
                title: 'Finish assignments'
            },
            {
                id: uuidv4(),
                title: 'Workout for 45mins'
            },
        ]
    },
    {
        id: uuidv4(),
        title: '👩‍💻👨‍💻Work In Progress',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn GoLang'
            }
        ]
    },
    {
        id: uuidv4(),
        title: ' ✔️ Completed',
        tasks: [
            {
                id: uuidv4(),
                title: 'Make a kanban board with react'
            }
        ]
    }
]

export default mockData;