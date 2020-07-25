import * as React from "react";
import { BlurContext } from "../pages/_app";

export default () => {
  const context = React.useContext(BlurContext);
  const [text, setText] = React.useState("");
  console.log(text);
  return (
    <div>
      <h2>state全部吹っ飛ばすモーダル</h2>
      <p>入力した後にmodal開いて閉じると状態が消える</p>
      <p>text = {text}</p>
      <input onChange={(e) => setText(e.target.value)}></input>
      <button
        onClick={() =>
          context.action(
            <div className="modalWrapper">
              <h2>modal no nakami</h2>
              <button onClick={() => context.action(null)}>close modal</button>
            </div>
          )
        }
      >
        open modal
      </button>
    </div>
  );
};
