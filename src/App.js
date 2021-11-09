// todo elemento que iremos inserir na tela sera chamado de componente


import React, {useState, useEffect} from 'react';

import SearchBox from './components/SearchBox';
//importando o CSS
//import './App.css';

//16 Exibindo Lista

function App(){
  const[searchText,setSearchText] = useState('');
  const[list, setList] = useState([]);

  useEffect(()=>{
    setList([
      {titulo:'Comprar um bolo',done:false},
      {titulo:'Pegar cachorro petshop',done:true},
      {titulo:'Gravar aula',done:false},
      {titulo:'Estudar prova',done:false}
    ]);

  },[]);

  function addAction(newItem){
    //Console.log(newItem);
     let newList = [...list ];
     newList.push({titulo:newItem, done:false});
     setList(newList);
  }

  return(
    <>
      <h1>Lista de Tarefas</h1>

      <SearchBox
        frasePadrao = "Adicione o item"
        onEnter = {addAction}       
      />
      <hr/>

    <ul>
      {list.map((item, index)=>(
        <li key={index}>
          
        {item.done && <del>{item.titulo}</del>
        
        }
        {!item.done &&
          item.titulo}
        </li>
      )
       
      )}
    </ul>

    </>
  )
}





















/* 15 - TROCANDO DADOS ENTRE COMPONENTES */
//importando o componente criado

/*
import SearchBox from './components/SearchBox';


  function App(){
    //criando uma state
    const [searchText,setSearchText] = useState('');

    function handleSearchInput(novoTexto){
      setSearchText(novoTexto);
    }

    return(
      <>
        <h1>Lista de Tarefas</h1>

        <SearchBox 
          // props chamada frasePadrao
          frasePadrao="Faça sua busca..."
          // props que recebe uma função, quando o usuario digitar algo no campo
          onChangeText={handleSearchInput}
        
        />
        
        <hr/>
        

        texto procurado: {searchText}


      </>
    )
  }
*/










/*
// uso do UseEffect ( ciclo de vida do componente)
function App(){

  // vamos fazer um contador
  const[contagem,setContagem]= useState(0);

  //função que recebe 2 parametros
  // o primeiro pode ser uma função anonima - por exemplo
  // segundo geramente recebe um array
  // 1º é a função que vai executar qdo alguma coisa acontecer
  //2º vai ser o observador
  useEffect(() =>{
    document.title="Contagem: " + contagem;
  },[contagem])
  
  function aumentarAction(){
    setContagem(contagem + 1);
  }

  return(
    <>
      <h1>Contagem: {contagem}</h1>
      <button onClick={aumentarAction}>Aumentar numero</button>
    </>
  )
}
*/

/*
const Input = styled.input`
width:400px;
height:30px;
font-size:16px;
padding:5px; 
border:2px solid black; 
`;


function App(){

  //criando um state
  const[conta,setConta] = useState(0);
  const[gorgeta,setGorgeta] = useState(10);

  //pegar o valor que o usuario esta digitando
  const handleContaInput = (e) =>{
    setConta(parseFloat(e.target.value));
  }

  const handleGorgetaInput = (e) =>{
    setGorgeta(parseFloat(e.target.value));
  }

 

  return(
    <>
      <h1>Calculadora de Gorgeja</h1>
      <p>Quanto deu a conta?</p>
      <Input type="number" placeholder="Insira o valor da conta" value={conta} onChange= {handleContaInput}/>
      
      <br/>
      <p>Qual a porcentagem da gorgeta?</p>
      <Input type = "number" value={gorgeta} onChange={handleGorgetaInput}/>
      <hr/>
      {conta > 0 &&
        <>
          <p>Sub-total: R$ {conta.toFixed(2)}</p>
          <p>Gorgeta({gorgeta}%): R$ {((gorgeta/100)*conta).toFixed(2)}</p>
          <p><b>Total: R${(conta + ((gorgeta/100)*conta)).toFixed(2)}</b></p>

        </>      
      }
      

    </>
  )
}
*/


/*
//campo input
//1º coisa a fazer é atrelar o conteudo do nosso campo com o state
//ou seja, o que estiver no state estara no meu input e o que estiver no meu input estara no meu state

  const Input = styled.input`
    width:400px;
    height:30px;
    font-size:16px;
    padding:5px; 
    border:2px solid black; 
  `;

  function App(){
    //criando o state

    const [email, setEmail]= useState('');

    
    const handleEmailInput = (e) =>{
      //pega o valor que o usuario esta digitando
      setEmail(e.target.value);
    }    

    return(
      <>
        <Input placeholder="Digite um email valido" type="email" value={email} onChange={handleEmailInput}/>

        
        {email.length>0 &&

          <p>{email.length} caracter{email.length != 1 ? 'es' : ''} </p>

        }

       
        
      </>
    )
  }
/*

/*
function App(){
  // vamos colocar um -> const [nomedaVariavel,funçãoDeModificarVariavel]
  //colocamos o prefixo set com o nome da variavel com a 1 letra Maiuscula
  // essa variavel recebe o useState e dentro da useState recebera o valor inicial ( valor padrão, valor que começa)
  const [contagem,setContagem] = useState(0);

  const botaoAction = () =>{
    setContagem(contagem +1);
  }
  return (
    <>
      <div>{contagem} vezes</div>
      <button onClick={botaoAction}>Clique para aumentar</button>
    </>
    
  )  
  
}


*/



/*
const Site = styled.div`
  background-color:blue;
  width:400px;
  height:400px;

`;


const Botao = styled.button`
    font-size:18px;
    padding: 10px 15px;
    border:3px solid red;
    background-color:white;
    margin:5px;


`;

const BotaoPequeno = styled(Botao)`
    fontsize:12px;
    padding:5px 10px;

`;


function App(){
  
  return (
    <Site>
      <Botao >Clique aqui</Botao> 
      <BotaoPequeno >Clique aqui</BotaoPequeno> 
    </Site>
    
  )  
  
}

*/






/*
const Botao = styled.button`
    font-size:18px;
    padding: 10px 15px;
    background-color:${props => props.color}

`;

*/

/*
const Botao = styled.button`
    font-size:18px;
    padding: 10px 15px;
    background-color:${props => props.color}

`;


function App(){
  
  return (
    <Site>
      <Botao color="#FF0000">Clique aqui</Botao> 
      <Botao color = "#00FF00">Clique aqui</Botao> 
    </Site>
    
  )  
  
}
*/











//Podemos criar nosso componente e depois iremos exportar ele
// Existem 2 formas para se criar um componente - através de Classes ou Funções
// a forma tradicional era criar através de classes


// vamos criar uma classe com o nome App que sera um componente
// dentro dela precisamos renderizar, por isso é necessario colocar o render(){}
// e dentro do render é necessario retornar algo, assim colocamos o return

/*
class App extends React.Component{

  render(){
    return<h1>Testando 1,2,3 ...</h1>
  }
}
*/


//CSS com Stylesheet
/*
function Avatar(props){
  return (
    <div style={{backgroundColor:'red', padding:20, width:900}}>
      <img src={props.url} alt={props.name}/>
      <br/>
      <span>{props.name}</span>
    </div>
  );
}
*/











  //css padrao
  /*
  function Avatar(props){
    return (
      <div className="avatar">
        <img src={props.url} alt={props.name}/>
        <br/>
        <span>{props.name}</span>
      </div>
    );
  }
  */

  
/*
  function App (){
    let user ={
      url:"https://www.google.com.br/google.jpg",
      name: "Google"
    }

    return <div>
      <Avatar url ={user.url} name = {user.name}/>    
      
    </div>
  }
*/
/*
  function BemVindo(props){
    return <h1>Seja Bem vindo! {props.nome}</h1>
  }
*/
/*function App (){
       return <div>
         <BemVindo nome="Fabio"/>
         <BemVindo nome="Ana"/>
         <BemVindo nome="Kel"/>
         
       </div>
       
     }*/

// Vamos criar um componente atraves de funções


  // function App (){
  //   return <h1>Testando 3,4,5...</h1>
  // }

  

  // Há uma terceira forma de criar componente que é através de variavel

  // let App = () =>{
  //   return <h1>Testando 6,7,8...</h1>
  // };

export default App;