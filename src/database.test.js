import * as db from './database.js'
import PouchDB from 'pouchdb'

beforeAll(async () => {
    // use an in-memory pouchdb implementation
    PouchDB.plugin(require('pouchdb-adapter-memory'))
    await db.initialize({adapter: 'memory'})
})

test('implement later', () => {})