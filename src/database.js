import PouchDB from 'pouchdb'
PouchDB.plugin(require('pouchdb-adapter-memory'))

var lists
var items

const pouchOptions = {}

export async function initialize(testOptions) {
    let options = {
        ...pouchOptions,
        ...testOptions
    }
    console.log(options)
    lists = new PouchDB('lists', options)
    items = new PouchDB('items', options)
    // perform an actual request to verify the DB talks to us
    let listsInfo = lists.info()
    let itemsInfo = items.info()
    await listsInfo
    await itemsInfo
}