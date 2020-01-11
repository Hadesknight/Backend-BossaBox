import app from './app';

app.server.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Rodando na porta ${process.env.PORT}`);
});
