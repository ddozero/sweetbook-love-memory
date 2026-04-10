require('dotenv').config();
const express = require('express');
const cors = require('cors');

// routes 나중에 만들면 여기 추가
// const booksRouter = require('./routes/books');
// const ordersRouter = require('./routes/orders');

const app = express();
const PORT = process.env.PORT || 3001;
const SWEETBOOK_ENV = process.env.SWEETBOOK_ENV || 'sandbox';

app.use(cors());
app.use(express.json());

// routes 나중에 만들면 여기 추가
// app.use('/api/books', booksRouter);
// app.use('/api/orders', ordersRouter);

app.get('/test', (req, res) => {
  res.json({
    message: '백엔드 서버 연결 성공!',
    sweetbookEnv: SWEETBOOK_ENV,
    hasApiKey: !!process.env.SWEETBOOK_API_KEY,
  });
});

//서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Sweetbook environment: ${SWEETBOOK_ENV}`);
});