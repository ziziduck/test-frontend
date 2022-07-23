# 0.3版本更新
* `login`(登入功能)  
    * 功能  
        1.  
    * 筆記  
        1.  當ts中 `property '...' has no initializer and is not definitely assigned in the constructor` 在 `tsconfig.json` 中加入 `"strictPropertyInitialization":false`
        2.  當ts中出現 `Object is possibly 'null'` 可加入 `?` 來解決
    * 參考 
        1.  https://blog.csdn.net/weixin_45202083/article/details/109460698 (前後端分離登入)
        2.  https://ithelp.ithome.com.tw/articles/10195280 (Reactive Forms)
        3.  https://abgne.tw/angularjs/angularjs-getting-stared/ng-submit.html (ng-submit)
        4.  https://www.w3school.com.cn/tags/att_label_for.asp (HTML <label> 標籤的for 屬性)

* `register`(註冊功能)  
    * 功能  
        1.   
    * 筆記  
        1.  
    * 參考 
        1.  

# 0.2版本更新
* `home`(幻燈片功能)  
    * 功能  
        1.  自動、手動切換圖片  
    * 筆記  
        1.  全域變數要放在 export class 的下面  
        2.  在 export class 的下面的 function 要特別標註 function  
        3.  使用 x.style.display 會出現(類型 'Element' 沒有屬性 'style')  的 error 是因為 x 沒有宣告類型(Ex: any)  
        4.  document.getElementsByClassName 可以用來取得指定 class name 的元素  
    * 參考 
        1.  http://www.w3bai.com/zh-TW/w3css/w3css_slideshow.html
  
# 0.1版本更新  
* `main`(主頁面功能)  
    * 切版  
        1.  左選單(輸入框)  
        2.  上選單(按鈕、switch)  
        3.  中頁面元件(calculator、page404、home)  
    * 功能  
        1.  頁面元件切換功能  
        2.  下拉式子選單  
        3.  側邊收合選單  
        4.  切換主題和選單呈現方式的switch  
    * 筆記  
        1.  [nzMode] 控制選單垂直或下拉顯示  
        2.  [nzTheme] 控制主題顏色  
  
* `calculator`(計算機功能)  
    * 功能  
        1.  基本四則運算(包含小數點)  
        2.  M加減  
        3.  歷史紀錄  
        4.  清除  
  
* `page404`(錯誤路徑功能)  
    * 功能  
        1.  將沒有在 app-routing.module.ts 的 const routes: Routes = [{}] 裡的 path 導入到 page404  
    * 筆記  
        1.  '**' 是指所有未指定的路徑  
  


# Router 換頁面
https://ithelp.ithome.com.tw/articles/10193649
https://matthung0807.blogspot.com/2019/06/angular-7-router.html  
  
  
# 初始化  
終端機視窗，輸入`npm install`  
安裝 Angular，只須一次 `npm install -g @angular/cli`  
  
# 新增組件  
## 元件  
終端機視窗，輸入`ng g c {目錄}\{元件名稱}`  
## 服務  
終端機視窗，輸入`ng g s {目錄}\{服務名稱}`  
  
# 第三方套件  
## NG-ZORRO  
終端機視窗，輸入`ng add ng-zorro-antd`  
  
  
# Test  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
