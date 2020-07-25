import * as React from "react";

export default () => {
  const [text, setText] = React.useState("");
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div>
      <div className="blurWrapper">
        <h2>state全部吹っ飛ばすモーダル</h2>
        <p>入力した後にmodal開いて閉じると状態が消える</p>
        <p>text = {text}</p>
        <input onChange={(e) => setText(e.target.value)}></input>
        <button onClick={() => setOpen(true)}>open modal</button>
      </div>
      <div className="modalWrapper">
        <div className="modalContent">
          <h2>modal no nakami</h2>
          <button onClick={() => setOpen(false)}>close modal</button>
        </div>
      </div>
      <style jsx>
        {`
          .blurWrapper {
            filter: ${isOpen && "blur(5px)"};
            position: ${isOpen && "fixed"};
            width: 100vw;
            height: 100vh;
            // ここで位置を左に固定しなければ白背景色とblurが混じって黒半透明のデザインが滲んで崩れる。
            top: 0;
            left: 0;
          }
          .modalWrapper {
            transition: opacity 0.5s, visibility 0.5s;
            opacity: ${!isOpen ? 0 : 1};
            visibility: ${!isOpen ? "hidden" : "initial"};
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: ${isOpen && "rgba(0, 0, 0, 0.3)"};
          }
          .modalContent {
            transition: opacity 0.5s, visibility 0.5s;
            opacity: ${!isOpen ? 0 : 1};
            visibility: ${!isOpen ? "hidden" : "initial"};
            position: fixed;
            top: 5vh;
            left: 5vw;
            width: 90vw;
            height: 90vh;
            background-color: white;
          }
        `}
      </style>
    </div>
  );
};
