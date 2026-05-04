//import {test,expect} from '@playwright/test'
// import { HomePage } from '../pageobjects/HomePage'
// import { RegistrationPage } from '../pageobjects/RegistrationPage'
import { POManager } from '../pageobjects/POManager'
//import { RegistrationPage } from '../pageobjects/RegistrationPage'
//import { RegistrationPage } from '../pageobjects/RegistrationPage'
 import {customtest as test,expect} from '../fixtures/testfixture'
//import testdata from '../utils/parabank.json'  assert {type:'json'}
// test('registration',async({page})=>
// {
//          //const homepage=new HomePage(page)
//             //  homepage.goTo()
//             //  homepage.clickOnRegisterLink()
//             const poManager= new POManager(page)
//                 const homepage=poManager.getHomePage()
//               await  homepage.goTo()
//               await homepage.clickOnRegisterLink()
                

//            // const registerpage=new RegistrationPage(page)

//            const registerpage= poManager.getRegistrationPage()
//           // const registerpage=new RegistrationPage()
//             await registerpage.registerUser('ravi','peter','delhi','saket','delhi','110011','12234','34345','javasc6','asdf')
//             registerpage.clickOnRegisterbutton()
//             await page.waitForTimeout(2000)           
// })

// for(const data of testdata)
// {

// test(`registration ${data.username}`,async({page})=>
// {
//          //const homepage=new HomePage(page)
//             //  homepage.goTo()
//             //  homepage.clickOnRegisterLink()
//             const poManager= new POManager(page)
//                 const homepage=poManager.getHomePage()
//               await  homepage.goTo()
//               await homepage.clickOnRegisterLink()
                

//            // const registerpage=new RegistrationPage(page)

//            const registerpage= poManager.getRegistrationPage()
//           // const registerpage=new RegistrationPage()
//             await registerpage.registerUser(
//                data.firstname,data.lastname,data.address,data.city,data.state,
//                data.zipcode,data.phonenumber,data.ssn,data.username,data.password,data.confirmpassword
//               )
//             registerpage.clickOnRegisterbutton()
//             await page.waitForTimeout(2000)           
// })

// }
    test.describe.serial('parallel test',()=>
    {

   
test('@smokeregistration',async({page,testdataForregistration})=>
{
         //const homepage=new HomePage(page)
            //  homepage.goTo()
            //  homepage.clickOnRegisterLink()
            const poManager= new POManager(page)
            const homepage=poManager.getHomePage()
              await  homepage.goTo()
              await homepage.clickOnRegisterLink()
                

           // const registerpage=new RegistrationPage(page)

           const registerpage= poManager.getRegistrationPage()
          // const registerpage=new RegistrationPage()
            await registerpage.registerUser(
               testdataForregistration.firstname,
               testdataForregistration.lastname,
               testdataForregistration.address,
               testdataForregistration.city,
               testdataForregistration.state,
               testdataForregistration.zipcode,
               testdataForregistration.phonenumber,
               testdataForregistration.ssn,
               testdataForregistration.username,
               testdataForregistration.password,
               testdataForregistration.confirmpassword,
               
              )
            registerpage.clickOnRegisterbutton()
            await page.waitForTimeout(2000) 
          //    await page.waitForURL()
          // expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')
})

test('@sanitylogin',async({page,testdataForregistration})=>
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

  })