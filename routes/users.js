const router = require('express').Router()
const axios = require('axios').default



router.get('/all', async (_, res) => {
	let users_url = 'https://jsonplaceholder.typicode.com/users'
	try {
		let { data } = await axios.get(users_url)
		console.log('Fetching users')
		return res.status(200).json(data)
	} catch (e) {
		console.log(e.message)
		return res.status(400).json({ error: e.message })
	}

})



module.exports = router