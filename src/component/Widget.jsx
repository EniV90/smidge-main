import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./widget.css";
import "@dexhunterio/swaps/lib/assets/style.css";
// import SwapWidget from "@dexhunterio/swaps";
import { Suspense } from "react";
import { getRPC } from "../lib//getRPC";
import { SwapWidget } from '@uniswap/widgets'

// The url of the default uniswap token list. This list will be passed to the Uniswap component
// and will appear by default in the token selector UI.
const TOKEN_LIST = "https://ipfs.io/ipns/tokens.uniswap.org";

const UNI = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";

const Widget = () => {
  if (typeof window !== "undefined") {
    window.Browser = {
      T: () => {},
    };
  }

  const settings = {
    jsonRpcUrlMap: {
      1: [getRPC(1)],
    },
    tokenList: TOKEN_LIST,
    defaultInputTokenAddress: "NATIVE",
    defaultInputAmount: "1",
    defaultOutputTokenAddress: UNI,
  };
  return (
    <main>
      <h1>Uniswap Swap Widget</h1>
      <Suspense
        fallback={<AiOutlineLoading3Quarters className="animate-spin" />}
      >
        <SwapWidget {...settings} />
      </Suspense>
    </main>
  );
};

export default Widget;
