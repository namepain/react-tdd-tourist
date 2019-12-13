const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('./dist'))

app.use('/api', function (req, res) {
  res.json({
    data: '让子弹飞一会儿'
  })
})

app.use('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, './dist/index.html'))
})

app.listen(3000, () => console.log('Listening on port 3000!'))