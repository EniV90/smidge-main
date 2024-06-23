import Nav from "../component/Nav";
import item1 from "../assets/images/item1.png";
import item2 from "../assets/images/item2.png";
import item3 from "../assets/images/item3.png";
import item4 from "../assets/images/item4.png";
import item5 from "../assets/images/item5.png";
import item6 from "../assets/images/item6.png";
import bgsmiley from "../assets/images/bgsmiley.png";
import widgetright from "../assets/images/widgetright.png";
import widgetleft from "../assets/images/widgetleft.png";
import aboutimg from "../assets/images/aboutimg.png";
import tokenomics from "../assets/images/tokenomics.png";
import Footer from "../component/Footer";
// import Widget from "../component/Widget";

const Home = () => {
  return (
    <div className=" bg-[#3B9239]">
      <Nav />

<div id="home" className="w-full flex flex-col justify-center items-center py-[40px] md:py-[100px] bg-bg1 bg-center bg-cover bg-no-repeat mt-[0px] md:mt-[-100px]">
  <div className="flex flex-col justify-center items-center">
    <h2 className="font-flyingBird md:text-3xl text-xl text-white text-center">
      CA: 0xea3665e272f14052442e433fb0059424d16cc6c7
    </h2>
    <ul className="flex flex-row space-x-8 mt-10">
      <a href="#">
        <li>
          <img src={item1} alt="link1" className="w-[30px] sm:w-[50px] md:w-[70px] lg:w-[90px]" />
        </li>
      </a>
      <a href="#">
        <li>
          <img src={item2} alt="link2" className="w-[30px] sm:w-[50px] md:w-[70px] lg:w-[90px]" />
        </li>
      </a>
      <a href="#">
        <li>
          <img src={item3} alt="link3" className="w-[30px] sm:w-[50px] md:w-[70px] lg:w-[90px]" />
        </li>
      </a>
      <a href="#">
        <li>
          <img src={item4} alt="link4" className="w-[30px] sm:w-[50px] md:w-[70px] lg:w-[90px]"  />
        </li>
      </a>
      <a href="#">
        <li>
          <img src={item5} alt="link5" className="w-[30px] sm:w-[50px] md:w-[70px] lg:w-[90px]" />
        </li>
      </a>
      <a href="#">
        <li>
          <img src={item6} alt="link6" className="w-[30px] sm:w-[50px] md:w-[70px] lg:w-[90px]" />
        </li>
      </a>
    </ul>
    <h1 className="mt-10 font-Balonku text-[80px] sm:text-[100px] md:text-[150px] lg:text-[200px] xl:text-[300px] text-white text-center">
      $SMIDGE
    </h1>
  </div>
  <div className="flex justify-center items-center mt-[-50px] sm:mt-[-80px] md:mt-[-130px] lg:mt-[-150px] xl:mt-[-200px] ">
    <img src={bgsmiley} alt="bgsmiley" className="w-[40%] sm:w-[60%] md:w-[80%] lg:w-[90%]" />
  </div>
</div>


       <div id="uniswap" className="flex flex-col justify-center items-center w-full py-[50px] md:py-[100px] mt-4 bg-bg2 bg-center bg-cover bg-no-repeat ">
        <h2 className="font-VaguelyRetro text-3xl md:text-6xl lg:text-8xl text-white ">
          BUY $SMIDGE USING UNISWAP
        </h2>
        <div className="lg:w-[50%] w-[90%] mt-16 relative">
          <img
            src={widgetright}
            alt="widgetright"
            className="absolute left-[650px] w-[45%] z-10 lg:block hidden"
          />
          <img
            src={widgetleft}
            alt="widgetleft"
            className="absolute right-[530px] w-[53%] bottom-0 z-10 lg:block hidden"
          />
          <div className="bg-black w-full h-[450px] rounded-lg pt-4 mt-4 relative z-20">
            {/* <Widget /> */}
            <button className="w-full rounded-2xl px-4 py-4 text-[#ab52ad] text-2xl font-bold bg-[#281A28]">Connect Wallet</button>
          </div>
        </div>
        </div> 
  
    

      <div id="about" className="flex flex-col justify-center items-center w-full py-[50px] md:py-[100px] mt-4 bg-bg3 bg-center bg-contain bg-no-repeat">
        <h2 className="font-VaguelyRetro text-3xl md:text-6xl lg:text-8xl text-white ">ABOUT</h2>
        <div className="flex flex-col lg:flex-row justify-between items-start pt-4 mt-4 px-[20px] lg:px-[100px]">
          <div className="flex lg:w-[50%] w-[100%] justify-center items-center">
            <img src={aboutimg} alt="abboutimg" className="w-[80%]" />
          </div>
          <div className="lg:w-[50%] justify-center items-center mt-5">
            <p className="font-flyingBird md:text-4xl text-2xl text-left text-white ">
              Smidge is one of the popular creations of Matt Furie, who took the
              internet by storm with the infamous Pepe. Now, for the first time
              ever, Smidge finds himself on the Ethereum blockchain. It’s only a
              matter of time until he dominates the same way his predecessors
              have...
            </p>
          </div>
        </div>
      </div>

      <div id="tokenomics" className="flex flex-col justify-center items-center w-full py-[50px] md:py-[100px] mt-4 bg-bg4 bg-center bg-cover bg-no-repeat">
        <h2 className="font-VaguelyRetro text-3xl md:text-6xl lg:text-8xl text-white ">TOKENOMICS</h2>
        <div className="flex flex-col justify-center items-center pt-4 mt-4 px-[20px] md:px-[100px]">
          <img src={tokenomics} alt="tokenomics" className="w-[90%] md:[100%]" />
          <p className="font-flyingBird text-2xl text-[#C4DEC4] ">
            Token Supply
          </p>
          <h2 className="font-flyingBird text-4xl md:text-6xl lg:text-8xl text-white ">960.42T</h2>
        </div>
      </div>

      <div id="howtobuy" className="flex flex-col justify-center items-center w-full py-[50px] md:py-[100px] mt-4 bg-bg5 bg-contain bg-no-repeat">
        <h2 className="font-VaguelyRetro text-3xl md:text-6xl lg:text-8xl text-white ">HOW TO BUY</h2>
        <div className="w-[100%] md:w-[70%] flex flex-col justify-start items-center pt-4 mt-4 px-[20px] lg:px-[100px]">
          <ol className="text-left space-y-20">
            <div className="flex items-center">
              <li className="font-flyingBird text-3xl md:text-6xl lg:text-9xl text-white">1.</li>
              <li className="font-flyingBird text-2xl text-white ml-20">
                Create a wallet by downloading Metamask onto your mobile device
                or use the Metamask extension on Chrome{" "}
              </li>
            </div>
            <div className="flex items-center">
              <li className="font-flyingBird text-3xl md:text-6xl lg:text-9xl text-white">2.</li>
              <li className="font-flyingBird text-2xl text-white ml-20">
                Transfer Eth from any centralized exchange of your choice into
                your wallet (ex. Binance or Kucoin)
              </li>
            </div>
            <div className="flex items-center">
              <li className="font-flyingBird text-3xl md:text-6xl lg:text-9xl text-white">3.</li>
              <li className="font-flyingBird text-2xl text-white ml-20">
                Use a Swap platform like Uniswap and paste the contract address
                into the swap window. Proceed to swap Eth for $Smidge
              </li>
            </div>
            <div className="flex items-center">
              <li className="font-flyingBird text-3xl md:text-6xl lg:text-9xl text-white">4.</li>
              <li className="font-flyingBird text-2xl text-white ml-20">
                Watch your $Smidge holdings grow as we conquer the world
              </li>
            </div>
          </ol>
        </div>
      </div>

      <div id="disclaimer" className="flex flex-col justify-center items-center w-full py-[50px] md:py-[100px]">
        <div className="w-[100%] lg:w-[70%] flex flex-col justify-start items-center pt-4 mt-4 px-[20px] lg:px-[100px]">
          <ul className="w-full flex flex-row justify-center  space-x-8 mt-10">
            <a href="#">
              <li>
                <img src={item1} alt="link1" />
              </li>
            </a>
            <a href="#">
              <li>
                <img src={item2} alt="link1" />
              </li>
            </a>
            <a href="#">
              <li>
                <img src={item3} alt="link1" />
              </li>
            </a>
            <a href="#">
              <li>
                <img src={item4} alt="link1" />
              </li>
            </a>
            <a href="#">
              <li>
                <img src={item5} alt="link1" />
              </li>
            </a>
            <a href="#">
              <li>
                <img src={item6} alt="link1" />
              </li>
            </a>
          </ul>
          <h2 className="font-VaguelyRetro text-3xl md:text-6xl lg:text-8xl text-white py-[80px]">DISCLAIMER</h2>
          <p className="font-flyingBird text-2xl text-white w-[90%]">
            $Smidge has no association with Matt Furie or his creations. This
            token is simply paying homage to a meme we all love and recognize.<br/><br/>
            $Smidge is a meme coin with no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. the coin is
            completely useless and for entertainment purposes only.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;