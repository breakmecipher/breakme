import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Breakme';
  msg: string = 'Gaius Julius Caesar, known by his nomen and cognomen Julius Caesar, was a populist Roman dictator, politician, military general, and historian who played a critical role in the events that led to the demise of the Roman Republic and the rise of the Roman Empire. He also wrote Latin prose. Wikipedia';
  binaries: string;
  cipherMsg: string;
  decipherMsg: string;
  mod: number;
  ir: number[];
  dateValues: number[];
  ic: number[];
  keyIndex: string;
  key: string;
  date: Date = new Date();
  isRandomKey: boolean = true;
  cicles: number = 2;
  step: number = 1;

  newDate(): void {
    this.date = new Date();
  }

  setDate(date: string): void {
    if(new Date(date)) {
      this.date = new Date(date);
    }
  }

  setRandomKey(b): void {
    this.isRandomKey = b;
  }

  zeroPad(num: string): string {
    return "00000000".slice(String(num).length) + num;
  }

  convertToBin(msg: string, keepMod?: boolean): string[] {
    let binaries: string[] = [];
    for (var i = 0; i < msg.length; i++) {
      let byte = msg[i].charCodeAt(0).toString(2);
      binaries.push(this.zeroPad(byte));
    }

    const mod: number = binaries.length % 3;
    if (keepMod) this.mod = mod;
    //console.log('mod',mod);

    if (mod != 0) {
      for (let i = 3 - mod; i > 0; i--) {
        binaries.push('01100011');
      }
    }
    
    return binaries;
  }

  getDateValues(array: string[]): number[] {
    let values: number[] = [];
    for (let i = 0; i < array.length; i++) {
      values[i] = parseInt(array[i]);
    }
    return values;
  }

  datePad(array: string[]): string {
    let values: string = '';
    let mod: number = array.length % 3;

    values += '-date-';
    if (mod != 0) {
      for (let i = 3 - mod; i > 0; i--) {
        values += '-';
      }
    }
    // mod = (values + array.join('')).length % 3;
    // console.log('mod',mod, values + array.join(''));
    return values + array.join('');
  }

  cipher(msg?: string, key?: string): void {
    let date: Date = this.date.getTime() ? this.date : new Date();    
    let arrayDate: string[] = String(date.getTime()).split('');
    let dateValues: number[] = this.getDateValues(arrayDate);
    let dateBin: string[] = this.convertToBin(this.datePad(arrayDate));
    
    if (!msg) msg = this.msg;
    
    let binaries: string[] = this.convertToBin(msg, true);

    //add mod
    let modBin: string[] = this.convertToBin(String(this.mod));
    for (let x = 0; x < modBin.length; x++) {
      binaries.push(modBin[x]);
    }

    let ir: number[] = [];
    let ic: number[] = [];

    if (!this.isRandomKey) key = this.key;

    if (key) {
      ir = this.getKeyDec(key.substr(0, 8));
      ic = this.getKeyDec(key.substr(8, 16));
      
      ir = this.getFirstKey(binaries, ir, dateValues, dateBin);
      ic = this.getFirstKey(binaries, ic, dateValues, dateBin);
    } else {
      ir = this.setRandomValues();
      ic = this.setRandomValues();
    }

    //Run cipher on message
    let bits: string[] = this.cipherRun(binaries, ir, ic, dateValues);
    
    //Run cipher on date
    let bitsDate: string[] = this.cipherRun(dateBin, this.ir, this.ic);

    bits = bits.concat(bitsDate);
    
    this.key = this.getKeyHex(this.ir) + this.getKeyHex(this.ic);
    this.cipherMsg = btoa(this.convertFromBin(bits.join('')));
    
    //this.decipher(this.cipherMsg, this.key);
  }

  //Just interate use the main where the magic happen and use my strategy to set new key for each 
  //interaction
  cipherRun(binaries: string[], ir: number[], ic: number[], dateValues?: number[]): string[] {
    let bits: string[] = [];
    let bits24: string = '';
    for (let i = 0; i < binaries.length; i += 3) {
      bits24 = binaries[i] + binaries[i + 1] + binaries[i + 2];
    
      for (let j = 0; j < this.cicles; j++) {   
        bits24 = this.cipher24(bits24, ir, ic);
      }
    
      if (i + 3 < binaries.length) {
        ir = this.newKeyCipher(ir, dateValues);
        ic = this.newKeyCipher(ic, dateValues);
      }

      bits.push(bits24);
    }
    this.ic = ic;
    this.ir = ir;
    return bits;
  }

  getKeyHex(keys: number[]): string {
    let key: string = '';
    for (let i = 0; i < keys.length; i++) {
      key = key + keys[i].toString(16)
    }
    return key;
  }

  convertFromBin(bits: string): string {
    let msg: string = '';
    for (let i = 0; i < bits.length; i += 8) {
      let bin = bits.slice(i, i + 8);
      msg += String.fromCharCode(parseInt(bin, 2));
    }
    return msg;
  }

  getRandom(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  //This method use the date you set to prevent that a same message produce the same cipher when you are
  //using the a fix password
  getFirstKey(binaries: string[], values: number[], dateValues: number[], dateBin: string[]): number[] {
    let keys: number[] = values;
    for (let i = binaries.length - 1; i > 3; i -= 3) {
      keys = this.newKeyDecipher(keys, dateValues);
    }

    for (let i = dateBin.length - 1; i > 3; i -= 3) {
      keys = this.newKeyDecipher(keys);
   }
    return keys;
  }

  setRandomValues(): number[] {
    let keys: number[] = [];
    for (let i = 0; i < 8; i++) {
      keys[i] = this.getRandom(16);
    }
    return keys;
  }

  //The roulette are a very simple strategy that possibilite make a huge complexity of the cipher text
  //Just getting a possible index base on step value
  upRoulette(array: number[]): number[] {
    let values: number[] = [];

    for (let i = 0; i < array.length; i++) {
      let num = array[i] + this.step;
      while(num > 15) {
        num -= 16;
      }
      
      values[i] = num;
    }
    return values;
  }

  downRoulette(array: number[]): number[] {
    let values: number[] = [];

    for (let i = 0; i < array.length; i++) {
      let num = array[i] - this.step;
      while(num < 0) {
        num += 16;
      }

      values[i] = num;
    }
    
    return values;
  }

  //Get new key for a next turn based on date an the step setted on Roulette
  newKeyCipher(randValues: number[], dateValues?: number[]): number[] {
    let values: number[] = this.upRoulette(randValues);

    if (dateValues) {
      for (let j = 0; j < dateValues.length; j++) {
        for (let i = 0; i < values.length; i++) {
          let calc = values[i] + dateValues[j];
          if (calc > 15) calc = calc - 16;
          values[i] = calc;
        }
      }
    }

    return values;
  }

  //Reverse process to get keys when decipher is run
  newKeyDecipher(randValues: number[], dateValues?: number[]): number[] {
    let values: number[] = this.downRoulette(randValues);
    
    if (dateValues) {
      for (let j = 0; j < dateValues.length; j++) {
        for (let i = 0; i < values.length; i++) {
          let calc = 0;
          calc = values[i] - dateValues[j];
          if (calc < 0) calc = calc + 16;

          values[i] = calc;
        }
      }
    }

    return values;
  }

  cipher24(bits: string, ir: number[], ic: number[]): string {
    let keyIndex: string = '';
    let values: string[] = bits.split('');

    for (let j = 0; j < 8; j++) {
      //remove value
      keyIndex += values[ir[j]];
      values.splice(ir[j], 1);

      //change value
      let a = values[0];
      let b = values[ic[j]];
      values[0] = b;
      values[ic[j]] = a;
    }

    return values.join('') + keyIndex;
  }

  decipher(msg: string, key: string) {
    msg = atob(msg);
    //console.log(msg, key);
    
    let ir: number[] = this.getKeyDec(key.substr(0, 8));
    let ic: number[] = this.getKeyDec(key.substr(8, 16));

    let binaries: string[] = this.convertToBin(msg);
    let mod: number = 0;

    let bits: string[] = [];
    let bits24: string = '';
    // let cicles: number = 2;
    let dateValues: number[];
    let arrayDate: string[] = [];
    for (let i = binaries.length - 1; i > 0; i -= 3) {

      bits24 = binaries[i - 2] + binaries[i - 1] + binaries[i];

      // bits24 = this.decipher24(bits24, ir, ic);
      for (let j = 0; j < this.cicles; j++) {
        bits24 = this.decipher24(bits24, ir, ic);
      }

      if (i - 3 > 0) {
        ir = this.newKeyDecipher(ir, dateValues);
        ic = this.newKeyDecipher(ic, dateValues);
      }

      if (dateValues) {
        if (mod > 0) {
          bits24 = bits24.substr(0, mod * 8);
          mod = 0;
          bits.push('');
        }
        if (bits.length == 0) mod = parseInt(this.convertFromBin(bits24));

        if (bits.length >= 1) bits.unshift(bits24);
      } else {
        let data: string = this.convertFromBin(bits24);
        if (data == '-da') {
          let timeString: string = arrayDate.join('').replace(/[^\d.]/g, '');
          ir = this.upRoulette(ir);
          ic = this.upRoulette(ic);
          dateValues = this.getDateValues(timeString.split(''));
        }
        arrayDate.unshift(data);
      }

    }

    this.decipherMsg = this.convertFromBin(bits.join(''));
    //console.log('decipherMsg', this.decipherMsg);
    if(!this.decipherMsg) this.decipherMsg = 'ERROR: Impossible decipher!';

  }

  decipher24(bits: string, ir: number[], ic: number[]): string {
    let keyIndex: string = bits.substr(16, 24);
    let values: string[] = bits.substr(0, 16).split('');

    for (let j = 7; j >= 0; j--) {
      //change value
      let a = values[0];
      let b = values[ic[j]];
      values[0] = b;
      values[ic[j]] = a;

      //insert value
      values.splice(ir[j], 0, keyIndex[j]);
    }
    return values.join('');
  }

  getKeyDec(hex: string): number[] {
    let values: number[] = [];
    for (let i = 0; i < hex.length; i++) {
      values[i] = parseInt(hex[i], 16);
    }
    
    //console.log(values);
    return values;
  }
}