import React, {useState,useEffect} from 'react';
import styled from 'styled-components';

// ira dar estilo ao componente
const InputText = styled.input `
    border:2px solid #000;
    border-radius:5px;
    padding:15px;
    font-size:17px;
    width:300px;
`;

//função SearchBox-> função de busca, uma caixa de texto
function SearchBox(props){

    // iremos criar uma constante
    const [texto,setTexto] = useState('');

    // função para monitorar
    //  useEffect(()=>{
    // //     //recebe como primeiro argumento a props em App.js chamada onChangetext e o segundo argumento o texto
    //    props.onChangeText(texto)},[texto]);}

    // // função que pega o valor do componente
    
    function handleKeyUp(e){
        //alert(e.keyCode);
         if (e.keyCode == 13){
            if(props.OnEnter){
                props.OnEnter(texto);                
            }
            setTexto('');          
        }
    }

    return(
        <InputText 
            type="text" 
            //o armazenamento esta em texto
            value = {texto}
            //na ação onChange recebera a função inputText
            onChange={(e)=>setTexto(e.target.value)}
            onKeyUp = {handleKeyUp}
            placeholder={props.frasePadrao ?? "Digite alguma coisa"}
        />
    );
};


export default SearchBox;