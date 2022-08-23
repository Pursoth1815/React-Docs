const Person = (props) => {
    const isUserLogged = true;
    return(
      <>
        {
          isUserLogged ? (
            <>
              <h1> Hii {props.firstName} {props.lastName}</h1>
              <h2> Age: {props.age}</h2>
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
        < Person firstName={'Puli'} lastName={'Kasi'} age={24}/>
      </div>
    );
  }