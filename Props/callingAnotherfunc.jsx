const Person = () => {
    const name = 'Pursoth';
    const isUserLogged = false;
    return(
      <>
        {
          isUserLogged ? (
            <>
              <h1> Hii {name}</h1>
              <h2> Welcome Back</h2>
            </>
          ) : (
            <>
              <h1> Sorry ! </h1>
              <h2> Unable to fetch your data</h2>
            </>
          )
        }
      </>
    )
  }
  
  const App  = () => {
    return (
      <div className="App">
        <h1> Hey What's up Buddy </h1>
        < Person />
      </div>
    );
  }