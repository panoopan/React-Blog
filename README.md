# React-Forum
Black & Orange 是一個具備會員功能的討論平台。訪客可以同時瀏覽多個不同作者的發文，在文章下方留言參與討論，並透過連結檢視特定作者的所有文章。註冊用戶可以新增及管理文章狀態。

* [Demo](https://panoopan.github.io/React-Forum/#/)
![](https://github.com/panoopan/React-Forum/blob/main/Demo.gif)


## 功能
* 顯示所有討論文章列表
* 分頁功能，排序從新到舊，以 5 筆為一頁
* 點擊文章標題，可顯示單頁文章內容及留言
* 點擊作者名稱，可顯示該作者之所有文章
* 註冊/登入功能，透過 JWT 實作驗證機制
* 發布文章功能，登入狀態下，進入後台點擊發布文章按鈕，輸入標題及內容即可新增文章
* 管理功能，登入狀態下，進入後台管理列表，可編輯及刪除文章
* 留言功能，登入狀態下，可於每篇文章下方新增留言，並能刪除自己的留言

<img width="1041" alt="截圖 2021-09-16 下午2 52 38" src="https://user-images.githubusercontent.com/52143262/133564241-6fcb3309-e912-42b6-a4c8-f50146967d67.png">
<img width="1041" alt="截圖 2021-09-16 下午2 54 46" src="https://user-images.githubusercontent.com/52143262/133564504-1a458f02-0821-4055-bc02-0c7b7b40301a.png">
<img width="1041" alt="截圖 2021-09-16 下午2 54 49" src="https://user-images.githubusercontent.com/52143262/133564508-04a3525e-6e88-4c9e-a1bc-5d1e73dbd9fa.png">
<img width="1041" alt="截圖 2021-09-16 下午2 54 51" src="https://user-images.githubusercontent.com/52143262/133564513-f563c91a-fe49-417e-872a-cc8c1d7aa996.png">
<img width="1041" alt="截圖 2021-09-16 下午2 54 53" src="https://user-images.githubusercontent.com/52143262/133564515-000a5166-ec54-4e37-9d8e-a25383093462.png">

## 使用技術
* React 搭配 React Router 建立具備會員系統的討論平台
* 串接 Lidemy API
* 以 JSX 語法撰寫元件
* 支援 RWD，使用 styled-components 以 Sass 進行排版
* 使用 React Hooks 實作功能 
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

