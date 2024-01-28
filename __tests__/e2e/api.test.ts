import request from 'supertest'
import {app} from '../../src'

describe('/trainings', () => {
    
    it('echo test', () => {
        expect(1).toBe(1);
    })
    
    it('should return trainings', async () => {
        await request(app).get('/trainings').expect(200)
    })
})