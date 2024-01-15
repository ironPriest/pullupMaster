import express, {Request, Response} from 'express'

// create express app
const app = express()

const port = 3000

const trainings = [
    {
        timeStamp: 1212,
        sets: 4,
        repsPerSet: 10
    },
    {
        timeStamp: 1313,
        sets: 5,
        repsPerSet: 6
    }
]

const goals = [
    {
        user: 'fooBar',
        number: 23,
        date: 1212
    },
    {
        user: 'barFoo',
        number: 27,
        date: 1313
    }
]

app.get('/', (req: Request, res: Response) => {
    res.send('hello word')
})

app.get('/trainings', (req: Request, res: Response) => {
    res.send(trainings)
})

app.get('/goals', (req: Request, res: Response) => {
    res.send(goals)
})

// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})