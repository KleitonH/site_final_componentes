
import './App.css'
import CustomCard from './assets/components/CustomCard/CustomCard'
// fontes usadas abaixo
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
  const handleButtonClick = () => {
    alert('Você clicou no botão!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <CustomCard
        title="Material UI"
        description="Este é um exemplo de um card usando Material UI com React."
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};


export default App
