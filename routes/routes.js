// Load the MySQL pool connection
const pool = require('../data/config');

// Route the app
const router = app => {
	// Display welcome message on the root
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });
	
	// Display all users
    app.get('/users', (request, response) => {
    pool.query('SELECT * FROM users', (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });

	// Display a single user by ID
	app.get('/users/:id', (request, response) => {
	    const id = request.params.id;
	 
	    pool.query('SELECT * FROM users WHERE id = ?', id, (error, result) => {
	        if (error) throw error;
	 
	        response.send(result);
	    });
	});
	
	// Add a new user
	app.post('/users', (request, response) => {
    pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
        if (error) throw error;
 
        response.status(201).send(`User added with ID: ${result.insertId}`);
    });
});

});
}

// Export the router
module.exports = router;