const express = require('express');
const app = express();
const port = 3001;

const idToUrlMap = {
  '12jk34': 'https://zipxam.com',
  "36wl45": "https://westonludeke.com",
  "99ab21": "https://rainbucket.xyz"
};

app.use(express.json());

app.get('/api/preview/:id', (req, res) => {
  const { id } = req.params;
  const url = idToUrlMap[id];
  if (url) {
    res.json({ url });
  } else {
    res.status(404).send('Not Found');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});