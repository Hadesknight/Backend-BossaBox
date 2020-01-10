import app from './app';

const port = 4000;

app.server.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});
