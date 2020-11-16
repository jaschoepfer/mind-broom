import PouchDB from 'pouchdb'
import { v4 as uuid } from 'uuid'

var lists
var items

const pouchOptions = {}

export async function initialize(testOptions={}) {
    let options = {
        ...pouchOptions,
        ...testOptions
    }
    console.log('using PouchDB with options:', options)
    lists = new PouchDB('lists', options)
    items = new PouchDB('items', options)
    // perform an actual request to verify the DB talks to us
    let listsInfo = lists.info()
    let itemsInfo = items.info()
    await listsInfo
    await itemsInfo
}

const ID_SEP = '/'
const combineID = (parentID, elemID) => parentID + ID_SEP + elemID
const splitID = (combinedID) => combinedID.split(ID_SEP)

const genItemID = (parentID) => combineID(parentID, uuid())

export async function createItem(listID, item) {
    let doc = {
        ...item,
        _id: genItemID(listID)
    }
    let { rev } = await items.put(doc)
    doc._rev = rev
    return doc
}

export async function deleteItem(itemID, revision) {
    await items.remove(itemID, revision)
}
