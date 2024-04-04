import mongoose from 'mongoose'
const mongoConnectionURL = ''

export const mongo = await mongoose.connect(mongoConnectionURL, {
    dbName: "scanner24"
})
console.log("mongo connected")