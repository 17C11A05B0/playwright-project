import { HomePage } from "./HomePage"
import { RegistrationPage } from "./RegistrationPage"
import { LoginPage } from "./LoginPage"

export class POManager 
{
    constructor(page) 
    {
        this.page = page 
        this.homePage = new HomePage(this.page) 
        this.registrationPage = new RegistrationPage(this.page)
    } 

    getHomePage() 
    {
        return this.homePage
    } 

    getRegistrationPage()
    {
        return this.registrationPage
    } 

     getLoginPage() {                // ✅ ADD THIS
    return new LoginPage(this.page)
  }
}