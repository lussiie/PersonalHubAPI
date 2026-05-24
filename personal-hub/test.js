const http = require('http')

const data = JSON.stringify({
  username: 'Lusine',
  password: '2008'
})
const options = {
  hostname: 'localhost',
  port: 4000,
  path: '/api/auth/register',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}
const req = http.request(options, res => {
  let body = ''
  res.on('data', chunk => body += chunk)
  res.on('end', () => {
    console.log(JSON.parse(body))
  })
})

req.write(data)
req.end()