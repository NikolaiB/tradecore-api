describe("HTTP Example", ()=>{

    let token
    it('POST', ()=>{
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
            token = response.body['access_token']
        })
    })

    it('List users', ()=>{
        cy.request({
            method: 'GET',
            url: 'http://127.0.0.1:3000/users',
            headers: {
                'Authorization': token
            }
        }).then((response)=>{
            expect(response.body[0]).to.have.property('name', 'User The One')
        })
    })

    it('Get a single user', ()=>{
        cy.request({
            method: 'GET',
            url: 'http://127.0.0.1:3000/users/1',
            headers: {
                'Authorization': token
            }
        }).then((response)=>{
            expect(response.body).to.have.property('name', 'User The One')
        })
    })

    it('Get user accounts', ()=>{
        cy.request({
            method: 'GET',
            url: 'http://127.0.0.1:3000/users/1/accounts',
            headers: {
                'Authorization': token
            }
        }).then((response)=>{
            expect(response.body[0]).to.have.property('name', 'Wife\'s account')
        })
    })
})