class Utils{
    getKey(){
    return cy.request({
        method: 'POST',
        url: 'sign-in',
        body: {
            "password" : "password",
            "email" : "email"
        },
        headers: {
            'content-type': 'application/json'
        }
    })
}
}

export default Utils