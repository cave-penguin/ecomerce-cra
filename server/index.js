import express from 'express'

import { dirname } from 'path'
import { fileURLToPath } from 'url'

import axios from 'axios'
import cors from 'cors'
import { readFile, writeFile } from 'fs/promises'
import 'dotenv/config'

const server = express()
const port = process.env.PORT || 5000

const middleware = [
    cors(),
    express.json({ limit: '5mb' }),
    express.static('public'),
    (req, res, next) => {
        console.log(`${new Date()}: ${req.url} ${req.method}`)
        next()
    },
]

middleware.forEach((it) => server.use(it))

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataFile = `${__dirname}/data/data.json`
const currencyFile = `${__dirname}/data/currency.json`
const read = (data) =>
    readFile(data, { encoding: 'utf8' }).then((response) =>
        JSON.parse(response)
    )

const write = (rates) => {
    writeFile(currencyFile, JSON.stringify(rates), { encoding: 'utf8' })
}

server.get('/api/v1/products', async (req, res) => {
    const data = await read(dataFile).catch(async (err) => console.log(err))
    // console.log(data.slice(0, 5))

    res.json(data.slice(0, 50))
})

server.get('/api/v1/currency', async (req, res) => {
    const rates = await read(currencyFile).catch(async () => {
        const { data } = await axios(
            'https://api.exchangerate.host/latest?base=USD&symbols=USD,EUR,CAD'
        ).catch((err) => {
            console.log(err)
            return {}
        })
        const { rates } = data
        write(rates)
        return rates
    })
    // console.log(rates)

    res.json({
        rates,
    })
})

server.use('/api/', (req, res) => {
    res.status(404)
    res.end
})

server.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
