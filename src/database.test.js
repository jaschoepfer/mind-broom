import * as db from './database.js'
import PouchDB from 'pouchdb'
import { validate } from 'uuid'

beforeAll(async () => {
    // use an in-memory pouchdb implementation
    PouchDB.plugin(require('pouchdb-adapter-memory'))
    await db.initialize({adapter: 'memory'})
})

test('create item in default list', async () => {
    let parent = 'default'
    let payload = { text: 'breathe motherf*#!r' }
    let doc = await db.createItem(parent, payload)
    let [ parentID, UUID ] = doc._id.split('/')
    expect(parentID).toBe(parent)
    expect(validate(UUID)).toBe(true)
    delete doc._id
    delete doc._rev
    expect(doc).toEqual(payload)
})