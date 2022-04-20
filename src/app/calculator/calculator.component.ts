import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //result > x2 > x1 > result
  title = 'test';
//parseFloat((0.1+0.2).toPrecision(12)) //0.3 解決浮點數誤差
  num: number = 0;   //運算元1
  num2: number = 0;   //運算元2
  memo: number = 0;   //記憶數字
  symbol: string = '';  //運算子
  result: string = '0';   //顯示數字 
  hist: string = '';    //歷史紀錄
  temp: string = '';    //暫存

  addNum(x: string): void {    //顯示數字
    if ((this.result === ' 0' || this.result === '0')) {   //為0時不能再輸入0
      this.result = '';
    }
    if (this.result === String(this.memo)) {    //第二個輸入的數
      this.result = ' ';
    }
    if (this.num === 0) {   //判斷是否為第一個輸入的數字
      if (this.result === '0' && this.result.indexOf('.') === -1 && x !== '.') {
        this.result = '';
      }
    } else {    //非第一個數字
      if (this.result === String(this.num)) {
        this.result = ' ';
      }
    }
    if (x === '.' && this.result.indexOf('.') === -1) {    //判斷書入小數點，限制小數點只能出現一個
      this.result += '.';
    } else if (x !== '.') {
      this.result += x;
    }
    if (this.result === ' .' || this.result === '.') {    //如果只輸入.就補零
      this.result = '0.';
    }
    this.num2 = Number(this.result);
  }

  addSymbol(y: string): void {
    this.temp = this.hist;    //將歷史紀錄存入暫存
    if (this.num === 0) {   //輸入第一個數
      this.num = Number(this.result);
    } else if (this.result.indexOf(' ') !== -1 || y === '=') {    //基本算式
      this.hist = String(this.num) + this.symbol + String(this.num2) + '=';
      if (this.symbol === '+') {
        this.num = this.num + this.num2;
      } else if (this.symbol === '-') {
        this.num = this.num - this.num2;
      } else if (this.symbol === '×') {
        this.num = this.num * this.num2;
      } else if (this.symbol === '÷') {
        this.num = this.num / this.num2;
      }
      this.hist += String(this.num) + '\n' + this.temp; 
    }

    if (y === '%') {
      this.hist = '%' + '(' + String(this.num) + ')';   //輸出歷史紀錄
      this.num = this.num/100;
      this.hist += '=' + this.num + '\n' + this.temp;
    } else if (y === '±') {
      this.hist = '±' + '(' + String(this.num) + ')';   //輸出歷史紀錄
      this.num = this.num * -1;
      this.hist += '=' + this.num + '\n' + this.temp;
    } else if (y !== '=') {
      this.symbol = y;
    }
    this.result = String(this.num);
  }

  addMemory(m: string): void {
    this.temp = this.hist;    //將歷史紀錄存入暫存
    if (m !== 'mr' && m !== 'mc' && m !== 'ms') {    //mr，Memory Recall的意思，將當前計算出來的數字呈現出來。
      this.hist = String(this.memo) + '(' + m + ')' + this.result + '='; 
    } 
    if (m === 'm+') {    //m+，記憶當前數字，「加入」累加數字當中。
      this.memo += Number(this.result);
    } else if (m === 'm-') {    //m-，記憶當前數字，以負數的形式「加入」累加數字當中。換句話說，就是把總數扣除當前數字的意思。
      this.memo -= Number(this.result);
    } else if (m === 'mr') {    //mr，Memory Recall的意思，將當前計算出來的數字呈現出來。
      this.result = String(this.memo);
    } else if (m === 'mc') {   //mc，Memory Clean的意思，也就是將目前記憶的數字「歸零」。
      this.memo = 0;
    } else if (m === 'ms') {    //ms，無視目前記憶多少數字，直接以當前數字取代記憶中的數字。
      this.memo = Number(this.result);
    } 

    if (m !== 'mr' && m !== 'mc' && m !== 'ms') {    //mr，Memory Recall的意思，將當前計算出來的數字呈現出來。
      this.hist += String(this.memo) + '\n' + this.temp;    //輸出歷史紀錄
    } else {    //輸出歷史紀錄
      this.hist = 'M = ' + String(this.memo);
      this.hist += '\n' + this.temp;
    }
    this.num = 0;
  }

  clear(c: string): void {   //清除所有數值
    this.result = '0';
    this.num = 0;
    this.symbol = '';
    this.hist = '';
  }

}
