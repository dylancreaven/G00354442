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
 answer:number;
 conversion:number;
 hidden:boolean=true;
 hidden2:boolean=true;
 changingTo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private currencyRatesProvider: CurrencyRatesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConverterPage');
    
    }
  
    onSave()
    {
      
      if(this.currency=="usd")
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          this.storage.set("changingTo",this.changingTo);
          this.changingTo="United States Dollars";
          this.amount=info.rates.USD;
          console.log(this.currency);
    
        })
      }
      else if(this.currency=="sek")
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          this.storage.set("changingTo",this.changingTo);
          this.changingTo="Swedish Krona";
          this.amount=info.rates.SEK;
          console.log(this.currency);
    
        })
      }
      else if(this.currency=="gbp")
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          this.storage.set("changingTo",this.changingTo);
          this.changingTo="British Sterling";
          this.amount=info.rates.GBP;
          console.log(this.currency);
    
        })
      }
      else if(this.currency=="rub")
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          this.storage.set("changingTo",this.changingTo);
          this.changingTo="Russian Rubles";
          this.amount=info.rates.RUB;
          console.log(this.currency);
    
        })
      }
      else if(this.currency=="aud")
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          this.storage.set("changingTo",this.changingTo);
          this.changingTo="Austrailian Dollars";
          this.amount=info.rates.AUD;
          console.log(this.currency);
    
        })
      }
      else if(this.currency=="cad")
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          this.storage.set("changingTo",this.changingTo);
          this.changingTo="Canadian Dollars";
          this.amount=info.rates.CAD;
          console.log(this.currency);
    
        })
      }
      else if(this.currency=="jpy")
      {
        this.hidden=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          this.storage.set("changingTo",this.changingTo);
          this.changingTo="Japanese Yen";
          this.amount=info.rates.JPY;
          console.log(this.currency);
    
        })
      }
      
      
    }
    onConvert(){
      this.storage.set("conversion",this.conversion);
      if(this.currency=="usd")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {

          this.answer=this.conversion*info.rates.USD;
          console.log(this.currency);
    
        })
      }
      else if(this.currency=="sek")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
         
          this.answer=this.conversion*info.rates.SEK;
          console.log(this.currency);
    
        })
      }
      else if(this.currency=="gbp")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          
          this.answer=this.conversion*info.rates.GBP;
          console.log(this.currency);
    
        })
      }
      else if(this.currency=="rub")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          
          this.answer=this.conversion*info.rates.RUB;
          console.log(this.currency);
    
        })
      }
      else if(this.currency=="aud")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
        
          this.answer=this.conversion*info.rates.AUD;
          console.log(this.currency);
    
        })
      }
      else if(this.currency=="cad")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
         
          this.answer=this.conversion*info.rates.CAD;
          console.log(this.currency);
    
        })
      }
      else if(this.currency=="jpy")
      {
        this.hidden2=false;
          this.currencyRatesProvider.GetCurrencyData().subscribe((info)=>
        {
          this.answer=this.conversion*info.rates.JPY;
          console.log(this.currency);
    
        })
      }
      
      
    }


    }


     
  

    
  

   





