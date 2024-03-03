import request from 'supertest'
import { app } from '../../src'

describe('/trainings', () => {
    
    beforeAll(async () => {
        await request(app).delete('/__tests__/data')
    })

    it('echo test', () => {
        expect(1).toBe(1);
    })
    
    it('should return empty array of trainings', async () => {
        await request(app).get('/trainings').expect(200, [])
    })

    it('should return 404 error for nonexisting training', async () => {
        await request(app).get('/trainings/666').expect(404)
    })

    it(`shouldn't create training with incorrect input data`, async () => {
        await request(app)
            .post('/trainings')
            .send({reps: 2, repsPerSet: 5})
            .expect(401)
    })

    it('should create training with correct input data', async () => {
        await request(app)
            .post('/trainings')
            //.send({sets: 3, repsPerSet: 20})
            .expect(201)
    })
})

describe('/goals', () => {

    beforeAll(async () => {
        await request(app).delete('/__tests__/data')
    })

    it('should return empty array of goals', async () => {
        await request(app).get('/goals').expect(200, [])
    })

})