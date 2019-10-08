const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });
    app.get('/users', (request, response) => {
        response.send(users);
    });
}

const users = [{
    id: 1,
    name: "Scott McKenzie",
    email: "Scott@McKenzie.com",
},
{
    id: 2,
    name: "Test User 2",
    email: "TestUser2@Test.com",
},
];

// Export the router
module.exports = router;