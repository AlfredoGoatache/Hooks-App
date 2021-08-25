const procesoPesado = (iteraciones:any) =>{
    for( let i = 0; i< iteraciones; i ++ ){
        console.log('Vamos!!!!');
    }
    return`${ iteraciones } iteraciones realizadas.`
}
export{
    procesoPesado
}