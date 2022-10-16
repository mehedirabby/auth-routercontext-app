/*
        Basic context API set up
    1.context API: Share auth state with other components (across the application)
    2.Create an userContext
    3.ContextProvider with passed peramiter {children}
    4.set the UserContext  in the index.js
    5.now to consume the context:export the AuthContext from UserContext
    6.now at header or anywhere else: use useContext
    7.Now at Header or Home () or anywhere else ): use useContext hook to get the info in the context
*/

/*
    Auth Integration
    1.use getAuth by passing the app from firebase config
    2.create a function named createUser to return createUserEmailWithPassword
*/
