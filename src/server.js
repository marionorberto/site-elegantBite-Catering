require('dotenv').config();
import app from './app';


app.listen(process.env.PORT, () => {
  console.log(`acess http://localhost:${process.env.PORT}`);
  console.log(`server is running at port:${process.env.PORT}`);
});
