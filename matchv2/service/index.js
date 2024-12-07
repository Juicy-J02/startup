const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt')
const app = express();
const DB = require('./database.js')

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

app.set('trust proxy', true);

const apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/scores', async (req, res) => {
  const scores = await DB.getHighScores();
  res.send(scores);
});

apiRouter.post('/score', async (req, res) => {
  const score = { ...req.body, ip: req.ip };
  await DB.addScore(score);
  const scores = await DB.getHighScores();
  res.send(scores);
});

apiRouter.delete('/scores', async (req, res) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  const scores = await DB.deleteScores(user.userName);
  res.send(scores);
});

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.userName)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.userName, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.userName);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Incorrect Credentials' });
});

apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
