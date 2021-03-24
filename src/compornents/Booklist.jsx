import React, { useState, useEffect } from "react";

const Booklist = (props) => {
    const [bookData, setbookData] = useState(null);
    //const [データを保管するための変数, データを更新するための関数] =useState(変数bookDataの初期値);

    useEffect(() => {
        //コンポーネントが読込まれた時に一番最初に実行される
        //APIからデータを取得、
        const result = props
            .getData?.(props.language)
            .then((response) => setbookData(response)); //非同期処理awaiteを使用しているためthenでつなげる
    }, [props]);
    return (
        <div>
            <ul class="book_list">
                {
                    bookData === null ? (
                        <p>now loading...</p>
                    ) : (
                        bookData.data.items.map((x, index) => (
                            <li key={index}>
                                <figure><img src={x.volumeInfo.imageLinks.smallThumbnail} /></figure>
                                <h2>{x.volumeInfo.title}</h2>
                                <p class="txt_s">著者：{x.volumeInfo.authors}</p>
                            </li>
                        ))
                    )
                }
            </ul>
            {/* <p>{JSON.stringify(bookData)}</p> */}
            {/*繰り返しの時は要素を区別するためkeyというパラメータが必要*/}
        </div>
    )
    //APIから戻ってきたデータはresponseに入る
    //responseのデータをbookDataに入れるためにsetbookDataにresponseの変数を入れる
    // propsに変化あった時実行される、bookDataのあ
    // APIから取得したデータはオブジェクトと配列が組み合わさっているため出力できない、JSON.stringifyで文字列にする
    // const result = props.getData?.(props.language); // ?→'getData`が存在する場合のみ関数を実行
    // return (
    //     <div>
    //         <p>this is {result} book list component</p>
    //     </div>
    // );
};
export default Booklist;