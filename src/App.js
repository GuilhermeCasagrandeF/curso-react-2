import { useState } from "react";
import { v4 as uuid } from 'uuid';
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {
    
    const [times, setTimes] = useState([
        {
            id: uuid(),
            nome: 'Programação',
            cor: '#57C278'
        },
        {
            id: uuid(),
            nome: 'Front-End',
            cor: '#82CFFA'
        },
        {
            id: uuid(),
            nome: 'Data Science',
            cor: '#A6D157'
        },
        {
            id: uuid(),
            nome: 'Devops',
            cor: '#E06B69'
        },
        {
            id: uuid(),
            nome: 'UX e Design',
            cor: '#DB6EBF'
        },
        {
            id: uuid(),
            nome: 'Mobile',
            cor: '#FFBA05'
        },
        {
            id: uuid(),
            nome: 'Inovação e Gestão',
            cor: '#FF8A29'
        },
    ]);
    
    const inicial = [
        {
            id: uuid(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[0].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[0].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[0].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[0].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[1].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[1].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[1].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[1].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[2].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[2].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[2].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[2].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[3].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[3].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[3].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[3].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[4].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[4].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[4].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[4].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'JULIANA AMOASEI',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[5].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'DANIEL ARTINE',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[5].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'GUILHERME LIMA',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[5].nome
        },
        {
            id: uuid(),
            favorito: false,
            nome: 'PAULO SILVEIRA',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[5].nome
        },
    ]
    
    const [colaboradores, setColaboradores] = useState(inicial)
    
    function deletarColaborador(id) {
        setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
    }

    function mudarCorTime(cor, id) {
        setTimes(times.map(time => {
            if(time.id === id){
                time.cor = cor;
            }

            return time;
        }));
    }

    function cadastrarTime(novoTime) {
        setTimes([...times, {...novoTime, id: uuid() }]);
    }

    function resolverFavorito(id) {
        setColaboradores(colaboradores.map(colaborador => {
            if(colaborador.id === id){
                colaborador.favorito = !colaborador.favorito;
            }

            return colaborador;
        }));
    }
    
    return (
        <div>
            <Banner />
            <Formulario 
                times={times.map(time => time.nome)} 
                aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
                cadastrarTime={cadastrarTime}
            />
            <section className="times">
                <h1>Minha organização</h1>
                {times.map((time, indice) => 
                    <Time 
                        mudarCor={mudarCorTime}
                        key={indice} 
                        time={time} 
                        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
                        aoDeletar={deletarColaborador}
                        aoFavoritar={resolverFavorito}
                    />
                )}
            </section>
            <Rodape />
        </div>
    );
}
    
export default App;
    