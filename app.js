const axios = require('axios')
const express= require('express')
const app=express()
const port=5000

let appsecret= 'bb1d5fb3243552b259f7b657ad320a037e6f7c778819acb6ec3f0d3b7ff9a6810c7a41eeee64d664a0477c780263359771cadd78d99be7ec4978546307c29e26f3131fe8b566f21014c0cfb36270a3ec86921097acfd5aebd7bfba4d58dfcddab5907472d299e5e800471a885cfe67ed710565e6bae176590d569c612005f067'
let appkey='ab078601d1b13f323861c33f0eb606af399e136512aac8ff3df96f9cd6401d4f'
let accesscode='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJiMDA4OGViM2Q1Nzc0MDNhOGVhMjgxMzVkNjc1NWYxMDI4NmNlZTczMTcyNjZiM2Q0YzhhYjhlMmU2ZGRkZmJmYjNmMTcxNTY2MGViYTY0ZWRkYTk0ZTZiNjBmMzBiZTdmNjRkODJiMmViZmNhZmRjMGZiMDg2OTYzMTQ2ZDA3NmY3ZWUxNTE1YWRmM2FlMTEyYTBkNzhjN2IxODgxYmU1N2ExZjMwM2E0OGUxOTdiMmI2NGYzZTVlYjg3ZGY3MmRhNTc3OTIzY2Y4NTE1MmZmYzJmOTQ1OGNhZTYzODNmNWQ5YjFlMzY1MDQzNmE0NmE5MGRiNzY3Y2UwM2YxZjIxIiwiYXBwS2V5IjoiYWIwNzg2MDFkMWIxM2YzMjM4NjFjMzNmMGViNjA2YWYzOTllMTM2NTEyYWFjOGZmM2RmOTZmOWNkNjQwMWQ0ZiIsImlhdCI6MTU3MjY0NTYxNywiZXhwIjoxNTcyNjQ3NDE3fQ.yx9gi9XveaF21peStHrreiYwurBZ74REQXzNO9becqQ'
let address= ["http://194.170.95.212:5000/webhook"]

app.post('/webhook',(req,res)=> console.log(req))

async function ExchangeCode(){
  const resp = await axios.post('https://sandbox.dapi.co/v1/auth/ExchangeToken', {
    appSecret: appsecret,
    appKey:appkey,
    accessCode: accesscode
  })
  return resp
}

async function Identity(header){
  const resp = await axios.post('https://sandbox.dapi.co/v1/data/Identity', {
    appSecret: appsecret,
    addresses: address
  }, header)
  return resp
}

async function UserAccounts(header){
  const resp = await axios.post('https://sandbox.dapi.co/v1/data/UserAccounts', {
    appSecret: appsecret,
    addresses: address
  }, header)
  return resp
}

async function AccountBalance(header){
  const resp = await axios.post('https://sandbox.dapi.co/v1/data/AccountBalance', {
    appSecret: appsecret,
    addresses: address
  }, header)
  return resp
}

async function Transactions(header){
  const resp = await axios.post('https://sandbox.dapi.co/v1/data/Transactions', {
    appSecret: appsecret,
    addresses: address
  }, header)
  return resp
}

async function main(){
  const exchangeCode= await ExchangeCode()
  console.log(exchangeCode.data)

  let header = {
      headers : {'authorization': 'Bearer ' + exchangeCode.data.accessToken}
  }

  let identity= await Identity(header)
  console.log(identity.data)

  let useracounts= await UserAccounts(header)
  console.log(useracounts.data)

  let accountbalance= await AccountBalance(header)
  console.log(accountbalance.data)

  let transactions= await Transactions(header)
  console.log(transactions.data)
}
main()
app.listen(port, () => console.log(`app listening on port ${port}!`))