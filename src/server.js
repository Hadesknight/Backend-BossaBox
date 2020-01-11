import app from './app';

const port = 4000;

app.server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Rodando na porta ${port}`);
});
