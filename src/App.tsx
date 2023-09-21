import Flor from './components/Flor';

function App() {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: ' 70px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <h1 style={{ color: 'white' }}>Te quiero Mucho</h1>
      </div>
      <div>
        <Flor />
      </div>

      <div className='light light-1'></div>
      <div className='light light-2'></div>
      <div className='light light-3'></div>
      <div className='light light-4'></div>
      <div className='light light-5'></div>
      <div className='light light-6'></div>
      <div className='light light-7'></div>
      <div className='light light-8'></div>
      <div className='light light-9'></div>
      <div className='light light-10'></div>
      <div className='light light-11'></div>
      <div className='light light-12'></div>
    </>
  );
}

export default App;
