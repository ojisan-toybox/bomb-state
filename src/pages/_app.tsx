import * as React from "react";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
