# React-Forum
Black & Orange 是一個鼓勵使用者分享故事的平台。訪客可以同時瀏覽多個不同作者的發文，並透過連結檢視特定作者的所有文章，註冊用戶可以發表、編輯及刪除文章。

* [Demo](https://panoopan.github.io/React-Forum/#/)
![](https://github.com/panoopan/React-Forum/blob/main/Demo.gif)


## 功能
* 顯示所有文章列表
* 分頁功能，排序從新到舊，以 5 筆為一頁
* 點擊文章標題可顯示單頁文章內容
* 點擊作者名稱可顯示該作者之所有文章
* 註冊/登入功能，密碼預設「Lidemy」
* 發布文章功能，登入狀態下，顯示發布文章的頁面按鈕，輸入標題及內容即可新增文章
* 管理功能，登入狀態下，進入後台管理列表，可編輯及刪除文章
<img width="1041" alt="截圖 2021-09-16 下午2 52 38" src="https://user-images.githubusercontent.com/52143262/133564241-6fcb3309-e912-42b6-a4c8-f50146967d67.png">
<img width="1041" alt="截圖 2021-09-16 下午2 54 46" src="https://user-images.githubusercontent.com/52143262/133564504-1a458f02-0821-4055-bc02-0c7b7b40301a.png">
<img width="1041" alt="截圖 2021-09-16 下午2 54 49" src="https://user-images.githubusercontent.com/52143262/133564508-04a3525e-6e88-4c9e-a1bc-5d1e73dbd9fa.png">
<img width="1041" alt="截圖 2021-09-16 下午2 54 51" src="https://user-images.githubusercontent.com/52143262/133564513-f563c91a-fe49-417e-872a-cc8c1d7aa996.png">
<img width="1041" alt="截圖 2021-09-16 下午2 54 53" src="https://user-images.githubusercontent.com/52143262/133564515-000a5166-ec54-4e37-9d8e-a25383093462.png">

## 使用技術
* React 搭配 React-router 建立具備會員系統的部落格
* 串接 Lidemy API
* 以 JSX 語法撰寫元件
* 支援 RWD，使用 styled-components 以 Sass 進行排版
* 使用 React hook 實作功能 
* 組織 React app 檔案結構
* Github Pages 部署

## 專案結構
* /src
  * /components
    * App.js
    * Navbar.js
    * Paginator.js
    * Post.js
    * LoginFrom.js
    * PostForm.js 
  * /customHooks
    * useUsers.js
    * useGetPosts.js
    * useEditPost.js
    * usePaginate.js  
  * /images
  * /pages 
    * HomePage.js
    * LoginPage.js
    * RegisterPage.js
    * AboutPage.js
    * AdminPage.js
    * AuthorPage.js
    * PostPage.js
    * NewPostPage.js
    * EditPostPage.js
  * context.js
  * index.js
  * utils.js
  * WebAPI.js

