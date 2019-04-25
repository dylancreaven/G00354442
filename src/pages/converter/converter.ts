import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CurrencyRatesProvider } from '../../providers/currency-rates/currency-rates';
import {Storage} from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-converter',
  templateUrl: 'converter.html',
})

export class ConverterPage 
{
 currency:any=[];
 amount:number; 
 symbol:any;
 answer:number=0;
 conversion:number=0;
 //hidden variables are to make the webpage show itself as i plan it to. So it doesnt all pop up at once
 hidden:boolean=true;
 hidden2:boolean=true;
 changingTo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private currencyRatesProvider: CurrencyRatesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConverterPage');
    
    }
  
    onSave()//onSave() method saves the currency chosen and shows the rates of that currency to the screen
    {
      //so these two values are defaulted back to 0 everytime you change currency
      this.answer=0;
      this.conversion=0;
     this.hidden2=true;
      
      
      if(this.currency=="usd")//United States Dollars
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
         
          this.amount=info.rates.USD;
          
    
        })
        this.storage.set("changingTo",this.changingTo);
        this.changingTo="United States Dollars";
        console.log(this.currency);
      }
      else if(this.currency=="sek")//Swedish krona
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
         
          this.amount=info.rates.SEK;
         
    
        })
        this.storage.set("changingTo",this.changingTo);
        this.changingTo="Swedish Krona";
        console.log(this.currency);
      }
      else if(this.currency=="gbp")//British Sterling
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          
          this.amount=info.rates.GBP;
         
    
        })
        this.storage.set("changingTo",this.changingTo);
          this.changingTo="British Sterling";
          console.log(this.currency);
      }
      else if(this.currency=="rub")//Russian Rubles
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          
          this.amount=info.rates.RUB;
          
    
        })
        this.storage.set("changingTo",this.changingTo);
          this.changingTo="Russian Rubles";
          console.log(this.currency);
      }
      else if(this.currency=="aud")//Austrailian Dollars
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
         
          this.amount=info.rates.AUD;
         
    
        })
        this.storage.set("changingTo",this.changingTo);
        this.changingTo="Austrailian Dollars";
        console.log(this.currency);
      }
      else if(this.currency=="cad")//Canadian Dollars
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          
          this.amount=info.rates.CAD;
       
    
        })
        this.storage.set("changingTo",this.changingTo);
          this.changingTo="Canadian Dollars";
          console.log(this.currency);
      }
      else if(this.currency=="jpy")//Japanese yen
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
        
          this.amount=info.rates.JPY;
          
    
        })
        this.storage.set("changingTo",this.changingTo);
        this.changingTo="Japanese Yen";
        console.log(this.currency);
      }
      else if(this.currency=="dkk")//Danish krone
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          
          this.amount=info.rates.DKK;
          
    
        })
        this.storage.set("changingTo",this.changingTo);
          this.changingTo="Danish Krone";
        console.log(this.currency);
      }
      else if(this.currency=="chf")//Swiss Franc
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          
          this.amount=info.rates.CHF;
          
    
        })
        this.storage.set("changingTo",this.changingTo);
         this.changingTo="Swiss Franc";
        console.log(this.currency);
      }
      else if(this.currency=="cny")//Chinese Yuan
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          
          this.amount=info.rates.CNY;
         
    
        })
        this.storage.set("changingTo",this.changingTo);
        this.changingTo="Chinese Yuan";
        console.log(this.currency);
      }
      else if(this.currency=="pln")// Polish Zloty
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          
          this.amount=info.rates.PLN;
         
    
        })
        this.storage.set("changingTo",this.changingTo);
        this.changingTo="Polish Zloty";
        console.log(this.currency);
      }
      
    }
    onConvert(){//onConvert() saves value of input box (in euro) and converts it to the chosen currency
      //onConvert() uses the same currencies as commented above
      
      this.hidden2=false;
      this.storage.set("conversion",this.conversion);
      if(this.currency=="usd")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          
          this.answer=this.conversion*info.rates.USD;
          console.log("1 Euro is "+this.answer+" in "+this.changingTo)
         
    
        })
        this.symbol="$";
      }
      else if(this.currency=="sek")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
         
          this.answer=this.conversion*info.rates.SEK;
          console.log("1 Euro is "+this.answer+" in "+this.changingTo)
         
    
        })
        this.symbol="kr";
      }
      else if(this.currency=="chf")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          this.answer=this.conversion*info.rates.CHF;
          console.log("1 Euro is "+this.answer+" in "+this.changingTo)
         
    
        })
        this.symbol="Fr";
      }
      else if(this.currency=="gbp")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          
          this.answer=this.conversion*info.rates.GBP;
          console.log("1 Euro is "+this.answer+" in "+this.changingTo)
          
    
        })
        this.symbol="£";
        
      }
      else if(this.currency=="rub")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          
          this.answer=this.conversion*info.rates.RUB;
          console.log("1 Euro is "+this.answer+" in "+this.changingTo)
          
    
        })
        this.symbol="₽";
      }
      else if(this.currency=="aud")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
        
          this.answer=this.conversion*info.rates.AUD;
          console.log("1 Euro is "+this.answer+" in "+this.changingTo)
          
    
        })
        this.symbol="AUD$";
      }
      else if(this.currency=="cad")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
         
          this.answer=this.conversion*info.rates.CAD;
          console.log("1 Euro is "+this.answer+" in "+this.changingTo)
         
    
        })
        this.symbol="$";
      }
      else if(this.currency=="jpy")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          this.answer=this.conversion*info.rates.JPY;
          console.log("1 Euro is "+this.answer+" in "+this.changingTo)
         
    
        })
        this.symbol="¥";
      }
      else if(this.currency=="dkk")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
         
          this.answer=this.conversion*info.rates.DKK;
          console.log("1 Euro is "+this.answer+" in "+this.changingTo)
    
        })
        this.symbol="Kr";
      }
      else if(this.currency=="cny")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
         
          this.answer=this.conversion*info.rates.CNY;
          console.log("1 Euro is "+this.answer+" in "+this.changingTo)
    
        })
        this.symbol="¥";
      }
      else if(this.currency=="pln")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
         
          this.answer=this.conversion*info.rates.PLN;
          console.log("1 Euro is "+this.answer+" in "+this.changingTo)
    
        })
        this.symbol="zł";
      }
      
    
    }


    }


     
  

    
  

   





