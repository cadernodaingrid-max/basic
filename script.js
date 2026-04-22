const treinos = {
    "1": {
        "titulo": "Matriz de Base (Pernas e Empurre Vertical)",
        "tempo": "40 min",
        "aquecimento": "10 min: Bicicleta ergométrica (ritmo leve/moderado) para elevar a temperatura corporal.",
        "exercicios": [
            { "nome": "Agachamento (Dominância de Joelho)", "img": "assets/exercicios/agachamento.webp" },
            { "nome": "Desenvolvimento de Ombros (Empurre Vertical)", "img": "assets/exercicios/desenvolvimento.webp" },
            { "nome": "Elevação de Quadril (Ponte)", "img": "assets/exercicios/elevacao-quadril.webp" },
            { "nome": "Apoio de Frente na Parede/Banco", "img": "assets/exercicios/apoio.webp" }
        ]
    },
    "2": {
        "titulo": "Postura e Estabilidade (Costas e Quadril)",
        "tempo": "40 min",
        "aquecimento": "10 min: Bicicleta ergométrica (ritmo leve/moderado) para elevar a temperatura corporal.",
        "exercicios": [
            { "nome": "Levantamento Terra Funcional", "img": "assets/exercicios/terra.webp" },
            { "nome": "Remada Unilateral com Halter (Puxada Horizontal)", "img": "assets/exercicios/remada-unilateral.webp" },
            { "nome": "Perdigueiro", "img": "assets/exercicios/perdigueiro.webp" },
            { "nome": "Stiff (Extensores de Quadril)", "img": "assets/exercicios/stiff.webp" }
        ]
    },
    "3": {
        "titulo": "Simetria e Equilíbrio (Unilaterais)",
        "tempo": "40 min",
        "aquecimento": "10 min: Bicicleta ergométrica (ritmo leve/moderado) para elevar a temperatura corporal.",
        "exercicios": [
            { "nome": "Afundo Estático (Base Anteroposterior)", "img": "assets/exercicios/afundo.webp" },
            { "nome": "Remada em Pé com Barra", "img": "assets/exercicios/remada-barra.webp" },
            { "nome": "Elevação Lateral de Ombros", "img": "assets/exercicios/elevacao-lateral.webp" },
            { "nome": "Prancha Ventral (Core)", "img": "assets/exercicios/prancha.webp" }
        ]
    },
    "4": {
        "titulo": "Circuito de Integração (Coordenação e Estamina)",
        "tempo": "40 min",
        "aquecimento": "10 min: Bicicleta ergométrica (ritmo leve/moderado) para elevar a temperatura corporal.",
        "exercicios": [
            { "nome": "Agachamento Sumô", "img": "assets/exercicios/sumo.webp" },
            { "nome": "Floor Press (Supino no Chão)", "img": "assets/exercicios/floor-press.webp" },
            { "nome": "Rosca Direta (Kit)", "img": "assets/exercicios/rosca-direta.webp" },
            { "nome": "Abdominal Infra", "img": "assets/exercicios/infra.webp" }
        ]
    }
};

const urlParams = new URLSearchParams(window.location.search);
const opcaoSelecionada = urlParams.get('opcao');
const listaContainer = document.getElementById('exercise-list');

if (opcaoSelecionada && treinos[opcaoSelecionada]) {
    const treino = treinos[opcaoSelecionada];

    document.getElementById('workout-title').textContent = treino.titulo;
    document.getElementById('workout-duration').textContent = `⏱ ${treino.tempo}`;
    
    const warmupElem = document.getElementById('warmup-content');
    warmupElem.innerHTML = `
        <p>${treino.aquecimento}</p>
    `;

    listaContainer.innerHTML = "";

    treino.exercicios.forEach((exer, index) => {
        const li = document.createElement('li');
        const idUnico = `ex-${opcaoSelecionada}-${index}`;

        const imgContainer = document.createElement('div');
        imgContainer.className = 'exercise-image-container';

        const img = document.createElement('img');
        img.src = exer.img;
        img.loading = "lazy";
        img.className = 'exercise-img';
        img.onerror = () => imgContainer.style.display = 'none';

        imgContainer.appendChild(img);

        const contentContainer = document.createElement('div');
        contentContainer.className = 'exercise-content';

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.id = idUnico;

        const span = document.createElement('span');
        span.textContent = exer.nome;

        contentContainer.appendChild(checkbox);
        contentContainer.appendChild(span);

        li.appendChild(imgContainer);
        li.appendChild(contentContainer);
        listaContainer.appendChild(li);
    });
} else {
    document.body.innerHTML = "<h1>Treino não encontrado</h1><a href='index.html'>Voltar</a>";
}