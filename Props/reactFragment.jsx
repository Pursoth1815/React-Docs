const App  = () => {
    const isUserLogged = false;
    const name = 'Pursoth';
    return (
      <div className="App">
        <h1> Hey What's up Buddy </h1>
        {
          isUserLogged ?
         ( <>
            <h1> Hii {name} </h1>
          </>)
          :
          (<>
            <h1> Sorry ! </h1>
            <h2> Unable to fetch your data</h2>
          </>)
        }
      </div>
    );
  }

// REACT FRAGMENT <> EMPTY TAG </>

// React Fragments allow you to wrap or group multiple elements without adding an extra node to the DOM