import * as React from "react";
import { AppProps } from "next/app";

export const BlurContext = React.createContext<{
  state: React.ReactNode | null;
  action: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
}>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [modalContents, setOpen] = React.useState<React.ReactNode | null>(null);
  return (
    <div>
      <BlurContext.Provider value={{ state: modalContents, action: setOpen }}>
        <div>
          {!modalContents ? (
            <Component {...pageProps} />
          ) : (
            <>
              <div className="blurWrapper">
                <Component {...pageProps} />
              </div>
              <div className="modalWrapper">{modalContents}</div>
            </>
          )}
        </div>
      </BlurContext.Provider>
      <style jsx>
        {`
          .blurWrapper {
            filter: blur(5px);
            background-color: rgba(0, 0, 0, 0.3);
            position: fixed;
            width: 100vw;
            height: 100vh;
            // ここで位置を左に固定しなければ白背景色とblurが混じって黒半透明のデザインが滲んで崩れる。
            top: 0;
            left: 0;
          }
          .modalWrapper {
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
}
