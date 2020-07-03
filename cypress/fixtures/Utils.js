class Utils{
    getKey(){
    let key
    cy.request({
        method: 'POST',
        url: 'http://127.0.0.1:3000/sign-in',
        body: {
            "password" : "password",
            "email" : "email"
        },
        headers: {
            'content-type': 'application/json'
        }
    }).then((response)=>{
        expect(response.body).have.property('access_token')
        key = response.body['access_token']            
    })
    console.log(key)
    return key
}
}

export default Utils