const express = require('express')

express()
  .get('/', (req, res) => res.json({ hello: 'world' }))
  .listen(8080, () => console.log('Listening on port 8080.'))
