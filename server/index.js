const express = require('express')
const next = require('next')
const connectDB = require('./db');
const createRoutes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3002

const server = express()

connectDB();
createRoutes(server)


// server.all('*', (req, res) => {
// 	return handle(req, res)
// })

server.listen(port, (err) => {
	if (err) throw err
	console.log(`> Ready on http://localhost:${port}`)
})



















// Это кастомный роутинг с использованием Epress
// При таком подходе, брейкпоинты должны совпадать структурой в папке pages
// const express = require('express')
// const next = require('next')
// const connectDB = require('./db');
// const createRoutes = require('./routes');

// const port = parseInt(process.env.PORT, 10) || 3002
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
// 	const server = express()

// 	connectDB();
// 	createRoutes(server)



// 	// server.get('/b', (req, res) => {
// 	// 	return app.render(req, res, '/b', req.query)
// 	// })

// 	server.all('*', (req, res) => {
// 		return handle(req, res)
// 	})

// 	server.listen(port, (err) => {
// 		if (err) throw err
// 		console.log(`> Ready on http://localhost:${port}`)
// 	})
// })
