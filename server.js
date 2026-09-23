require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const alunoRoutes = require('./src/routes/alunoRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

// Rotas
app.use('/api/alunos', alunoRoutes);

// Certifique-se de importar o cors no topo do ficheiro (junto dos outros imports)
const cors = require('cors'); 

// Logo após inicializar o app (const app = express();), adicione:
// Habilita o CORS para evitar bloqueios no navegador
app.use(cors());

// A nuvem (Render/Railway) injeta a própria porta via process.env.PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 API rodando na porta ${PORT}`);
});