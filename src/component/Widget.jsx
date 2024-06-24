// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import "../../src/index.css";

// import { Suspense } from "react";
// import { getRPC } from "../lib//getRPC";
// import { SwapWidget } from '@uniswap/widgets'


// const TOKEN_LIST = "https://ipfs.io/ipns/tokens.uniswap.org";

// const UNI = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";

// const Widget = () => {
//   if (typeof window !== "undefined") {
//     window.Browser = {
//       T: () => {},
//     };
//   }


//   const settings = {
//     jsonRpcUrlMap: {
//       1: [getRPC(1)],
//     },
//     tokenList: TOKEN_LIST,
//     defaultInputTokenAddress: "NATIVE",
//     defaultInputAmount: "1",
//     defaultOutputTokenAddress: UNI,
//   };

//   const theme =  {
//     primary: '#FFF',
//     secondary: '#A9A9A9',
//     interactive: '#000000',
//     container: '#000000',
//     module: '#222633',
//     accent: '#3B9239',
//     outline: '#CC1',
//     dialog: '#000',
//     fontFamily: 'Josefin Sans',
//     borderRadius: 0.5,
//   }

//   return (
//     <main className="w-full flex justify-center">
//       <Suspense 
//         fallback={<AiOutlineLoading3Quarters className="animate-spin" />}
//       >
//         <SwapWidget {...settings} theme={theme} width='100%'/>
//       </Suspense>
//     </main>
//   );
// };

// export default Widget;