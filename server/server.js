const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const idToUrlMap = {
  // "12jk34": "https://westonludeke.com",
  // "36wl45": "https://example.com",
  // "99ab21": "https://rainbucket.xyz",
  "66xx61": "http://client-app.preview.icyntkt.xyz/"
};

const idToPrMap = {
  // "12jk34": "https://api.github.com/repos/rainbucket-xyz/testing/issues/5/comments",
  // "36wl45": "https://api.github.com/repos/rainbucket-xyz/testing/issues/5/comments",
  // "99ab21": "https://api.github.com/repos/rainbucket-xyz/rainbucket/issues/17/comments",
  "66xx61": "https://api.github.com/repos/preview-app-team5/client-app/issues/41/comments"
};

app.use(express.json());
app.use(cors());

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

app.get('/api/comments/:id', (req, res) => {
  const { id } = req.params;
  const prLink = idToPrMap[id];
  if (prLink) {
    res.json({ prLink });
  } else {
    res.status(404).send('Comments Not Found');
  }
});