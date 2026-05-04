//import {test,expect} from '@playwright/test'
// import { HomePage } from '../pageobjects/HomePage'
// import { RegistrationPage } from '../pageobjects/RegistrationPage'
import { POManager } from '../pageobjects/POManager'
//import { RegistrationPage } from '../pageobjects/RegistrationPage'
//import { RegistrationPage } from '../pageobjects/RegistrationPage'
 import {customtest as test,expect} from '../fixtures/testfixture'
//import testdata from '../utils/parabank.json'  assert {type:'json'}
test('login',async({page,testdataForregistration})=>
{
         //const homepage=new HomePage(page)
            //  homepage.goTo()
            //  homepage.clickOnRegisterLink()
            const poManager= new POManager(page)
                const homepage=poManager.getHomePage()
              await  homepage.goTo()
             // await homepage.clickOnRegisterLink()
           const loginPage=poManager.getLoginPage()  
            await loginPage.loginToApplication(
              testdataForregistration.username,
              testdataForregistration.password
            )   

          
})