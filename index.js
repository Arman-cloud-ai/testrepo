```javascript
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/online-learning-platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use user routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```