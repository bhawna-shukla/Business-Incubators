const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')


const contactRouter = require('./routers/contact')
const UserRouter = require('./routers/user')

const PlanningRouter = require('./routers/planning')
const managingRouter = require('./routers/managing')
const launchingRouter = require('./routers/launching')

// Middleware
app.use(express.json())




app.use(cors({
    origin: ['http://localhost:3000'],
}))
app.use('/user',UserRouter);

app.use('/contact',contactRouter);
app.use('/service',PlanningRouter);
app.use('/service',managingRouter);
app.use('/service',launchingRouter);














app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})