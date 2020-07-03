import Utils from '../../fixtures/Utils'

describe("HTTP Example", ()=>{

    let utils = new Utils()
    let token

    it('Retrieving token', ()=>{
        utils.getKey().then((response)=>{
            token = response.body['access_token']
        })
    })

    it('List users', ()=>{
        cy.request({
            method: 'GET',
            url: Cypress.config().baseUrl+'users',
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
            url: Cypress.config().baseUrl+'users/1',
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
            url: Cypress.config().baseUrl+'users/1/accounts',
            headers: {
                'Authorization': token
            }
        }).then((response)=>{
            expect(response.body[0]).to.have.property('name', 'Wife\'s account')
        })
    })
})