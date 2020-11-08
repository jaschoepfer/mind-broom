import * as db from './database.js'

beforeAll(async () => {
    // use an in-memory pouchdb implementation
    await db.initialize({adapter: 'memory'})
})

test('implement later', () => {})