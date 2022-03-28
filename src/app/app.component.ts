import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
//result > x2 > x1 > result
  title = 'test';
//parseFloat((0.1+0.2).toPrecision(12)) //0.3 解決浮點數誤差
  x1: number = 0;   //運算元1
  x2: number = 0;   //運算元2
  symbol: string = '';  //運算子
  result: string = '0';   //顯示數字 

  addNum(x: string): void {    //設定運算元和顯示數字
    if (this.result == '0' && x == '0') {   //為0時不能再輸入0
      this.result = '';
    } else {
      if (this.x1 == 0) {   //判斷為第一個數入的數字
        if (this.result == '0' && this.result.indexOf('.') == -1) {   //如果為0且沒有小數點就清空顯示
          this.result = '';   //清空顯示
        }
      } else {
        if (this.result == String(this.x1)) {   //判斷為第一個之後輸入的數字
          this.result = ''    //清空顯示
        } 
      }
    }
    this.result += x;   //顯示數字
    this.x2 = Number(this.result);    //將值匯入x2
  }

  addSymbol(y: string): void {
  
    if (y == '.' && this.result.indexOf('.') == -1) {    //判斷書入小數點，限制小數點只能出現一個
      this.result += '.';
    } else if (y != '.') {    //判斷為小數點以外的輸入
      if (this.x1 == 0) {   //確認是否為第一個輸入的數字
        this.x1 = this.x2;
      } else if (this.x2 != 0 ) {    //沒有輸入新數字前按運算子無作用，並進行運算
        //this.result = String(this.x1) + ' ' + String(this.x2) + ' ' + this.symbol;    //變數測試
        if (this.symbol == '+') {
          this.x1 = this.x1 + this.x2;
        } else if (this.symbol == '-') {
          this.x1 = this.x1 - this.x2;
        } else if (this.symbol == '×') {
          this.x1 = this.x1 * this.x2;
        } else if (this.symbol == '÷') {
          this.x1 = this.x1 / this.x2;
        }
      }  
      if (this.symbol == '=' && this.x2 != 0) {   //如果 = 則 (x1 = x2)並記錄在symbol
        this.x1 = this.x2;
        this.symbol = y;
      } else if (y == '±') {    //切換正負號
        this.x1 = this.x1 * -1;
      } else if (y == '%') {    //百分比
        this.x1 = this.x1 / 100;
      } else {
        this.symbol = y;      //其餘直接紀錄在symbol
      }
      this.result = String(this.x1);    //顯示出x1作為結果
      this.x2 = 0;    //清空x2
    }
    
  }

  addMemory(m: string): void {
    if (m == 'm+') {    //m+，記憶當前數字，「加入」累加數字當中。
      this.x1 += Number(this.result);
    } else if (m == 'm-') {    //m-，記憶當前數字，以負數的形式「加入」累加數字當中。換句話說，就是把總數扣除當前數字的意思。
      this.x1 -= Number(this.result);
    } else if (m == 'mc') {   //mc，Memory Clean的意思，也就是將目前記憶的數字「歸零」。
      this.x1 = 0;
    } else if (m == 'mr') {    //mr，Memory Recall的意思，將當前計算出來的數字呈現出來。
      this.result = String(this.x1);
    } else if (m == 'ms') {    //ms，無視目前記憶多少數字，直接以當前數字取代記憶中的數字。
      this.x1 = Number(this.result);
    } 
  }

  clear(c: string): void {   //清除所有數值
    this.result = '0';
    this.symbol = '';
  }
}


/*
M+：記憶當前數字，「加入」累加數字當中。

M-：記憶當前數字，以負數的形式「加入」累加數字當中。換句話說，就是把總數扣除當前數字的意思。

MC：Memory Clean的意思，也就是將目前記憶的數字「歸零」。

MR：Memory Recall的意思，將當前計算出來的數字呈現出來。

MS：無視目前記憶多少數字，直接以當前數字取代記憶中的數字。


範例：計算(2x3) + (5x6) - (2x4)這串數字時，就可以利用M+、M-的功能快速分開運算，最後再計算結果。先將2x3=6運算出來後，
按「M+」將目前的數字記憶起來，再按C(Clear)清除，你會看見計算機上方出現M的字樣，代表它已經將數字記憶起來了；
接著計算5x6=30，再按「M+」記憶起來。此時計算機中已經儲存了「6+30」的數字！然後再按一次C。

至於「M-」要怎麼用呢？先計算2x4=8後，按「M-」，這意味著計算機記憶的數字變成了「6+30+(-8)」，最後再按「MR」鍵，
就會得出28的答案。計算完成後可以按一下「MC」，將剛剛的儲存資料通通移除！這樣是不是很方便呢？碰到需要連續計算時，
再也不需要拿起紙筆，將數字寫下後自己手動計算了。

其他還有些常見的按鈕，例如MU(Mark up or Mark down)、GT(General Total)、CE(Current Empty)等。
MU是用來計算利率與稅率的，例如AxB再按MU，則會得到A+(AxB%)的答案；至於GT則是將目前按過的等號全部相加在一起，
按AC可以清除掉。CE則是清除當前數字，重新輸入，不會刪除記憶資料。
*/