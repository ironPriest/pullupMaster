import express, {Request, response, Response} from 'express'

// create express app
export const app = express()

const port = 3000

let trainings = [
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

let goals = [
    {
        user: 'fooBar',
        city: 'Mensk',
        number: 23,
        date: 1212
    },
    {
        user: 'barFoo',
        city: 'Warsaw',
        number: 27,
        date: 1313
    }
]

app.get('/', (req: Request, res: Response) => {
    res.send('hello word')
})

app.get('/trainings', (req: Request, res: Response) => {
    res.status(200).send(trainings)
})

app.post('/trainings',(req: Request, res: Response) => {

    //if (!req.body.sets) {res.sendStatus(400)}
    //console.log(req.body);
    const newTraining = {
        timeStamp: +(new Date()),
        sets: req.body.sets,
        repsPerSet: req.body.repsPerSet
    }
    trainings.push(newTraining)
    res.status(201).send(newTraining)
})

app.get('/goals', (req: Request, res: Response) => {
    if (req.query.city) {
        let searchString: string = req.query.city.toString()
        res.send(goals.filter(p => p.city.indexOf(searchString) > -1))
    } else {
        res.status(200).send(goals)
    }
})

app.get('/goals/:user', (req: Request, res: Response) => {
    let goal = goals.find(p => p.user === req.params.user)
    if (goal) {
        res.send(goal)
    } else {
        res.sendStatus(404)
    }
})

app.put('/goals/:user', (req: Request, res: Response) => {
    let goal = goals.find(p => p.user === req.params.user)
    if (goal) {
        goal.number = req.body.number;
        res.send(goal)
    } else {
        res.sendStatus(404)
    }
})

app.delete('/goals/:user', (req: Request, res: Response) => {
    for (let i=0; i < goals.length; i++) {
        if (goals[i].user === req.params.user) {
            goals.splice(i, 1);
            res.send(204);
            return
        }
        res.sendStatus(404);
    }
})

app.delete('/__tests__/data', (req: Request, res: Response) => {
    trainings = [];
    goals = [];
    response.sendStatus(204)
})

// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})