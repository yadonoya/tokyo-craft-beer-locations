const express = require('express');
const app = express();
const PORT = process.end.PORT || 3000

app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});