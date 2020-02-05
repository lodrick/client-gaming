import { SystemJsNgModuleLoader } from '@angular/core';

export class Logic {

    constructor(){}
    
    original:string = "MOM";
     str2:string = ""

     palindrome(){
        for (let i = 1; i >= this.original.length; i--){
        
            this.str2 = this.str2 + this.original.charAt(i);
             if (this.str2 === this.original){
                 console.log("is palindrome");
             }   
        }
     }
    
}
