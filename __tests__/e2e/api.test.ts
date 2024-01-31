import request from 'supertest'
import {app} from '../../src'

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

    it('should return empty array of goals', async () => {
        await request(app).get('/goals').expect(200, [])
    })
})