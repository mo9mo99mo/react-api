import React from 'react';
import Booklist from './compornents/Booklist'; //import compornent
import { BrowserRouter, Route, Link } from 'react-router-dom'; //routing
import axios from 'axios'; //Axios import

{/* 関数を定義：入力値に`books`を追加して出力 */ }
// const getDataFromAPI = (keyword) => {
//   return `${keyword} books`;
// };
{/* APIにHTTPリクエストを送る：非同期関数だが同期的にデータを取得できる */ }
const getDataFromAPI = async keyword => {
  const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
  const result = await axios.get(`${requestUrl}${keyword}`);
  return result;
}

const App = () => {
  const languages = ['React', 'Vue', 'Angular'];
  return (
    <BrowserRouter>
      <div>
        <h1>react app</h1>
        {/* リンクタグ追加 */}
        <ul>
          <li><Link to='/'>React</Link></li>
          <li><Link to='/vue'>Vue</Link></li>
          <li><Link to='/angular'>Angular</Link></li>
        </ul>
        <hr />
        {/* 完全一致の場合のみコンポーネントを返す */}
        <Route
          exact
          path='/'
          render={
            (props) =>
              <Booklist
                language={languages[0]}
                getData={(keyword) => getDataFromAPI(keyword)} // getDataという名前で関数を渡す
              />
          }
        />

        {/* 前方一致でコンポーネントを返す */}
        <Route
          path='/vue'
          render={
            (props) =>
              <Booklist
                language={languages[1]}
                getData={(keyword) => getDataFromAPI(keyword)} // getDataという名前で関数を渡す

              />
          }
        />
        <Route
          path='/angular'
          render={
            (props) =>
              <Booklist
                language={languages[2]}
                getData={(keyword) => getDataFromAPI(keyword)} // getDataという名前で関数を渡す
              />
          }
        />
      </div>
    </BrowserRouter>
  );
};
export default App;