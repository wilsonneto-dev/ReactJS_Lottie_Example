import React from 'react';
import Lottie from 'react-lottie';

import animation from './assets/lottie/email-sent.json';

function App() {
  return (
    <div className="App">
      <center>
        <h2>Testando React Lottie</h2>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
          height={400}
          width={400}
        />
      </center>
    </div>
  );
}

export default App;
