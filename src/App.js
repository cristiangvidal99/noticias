import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  // definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=86863908e67547fba48fe2949f0fbcb1`;
      
      const response = await fetch(url);
      const noticias = await response.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])
  return (
    <Fragment>
        <Header
          titulo='Buscador de Noticias'
        />

        <div className='container red'>
          <Formulario 
            guardarCategoria={guardarCategoria}
          />

          <ListadoNoticias 
            noticias={noticias}
          />
        </div>
    </Fragment>
  );
}

export default App;
