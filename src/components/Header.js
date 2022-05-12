import twitter from "./assets/twitter.png";
import discord from "./assets/discord.png";
import magiceden from "./assets/magiceden.png";

const Header = () => {
  return (
    // outer header container
    <div className="bg-transparent flex items-center p-8">
      {/* header left - social icons */}
      <div className="flex items-center">
        {/* twitter */}
        <div className="rounded-lg mx-2">
          <a href="https://twitter.com/jetgetterclub">
            <img src={twitter} width={50} alt=""></img>
          </a>
        </div>
        {/* discord */}
        <div className="rounded-lg mx-2">
          <a href="http://www.discord.gg/degods">
            <img src={discord} width={50} alt=""></img>
          </a>
        </div>
        {/* magic eden */}
        <div className="rounded-lg mx-2 p-3">
          <a href="http://www.magiceden.io/marketplace/degods">
            <img src={magiceden} width={45} alt=""></img>
          </a>
        </div>
      </div>

      {/* header right: navigating pages */}
      <div className="flex items-center space-x-8 ml-auto mr-2">
        {/* Home */}
        <div>
          <a href="https://twitter.com/jetgetterclub">
            <p className="text-orange-400 text-3xl">Home</p>
          </a>
        </div>
        {/* Blueprint */}
        <div>
          <a href="http://www.twitter.com/degodsnft">
          <p className="text-orange-400 text-3xl">Blueprint</p>
          </a>
        </div>
        {/* Shop */}
        <div className="hover:cursor-not-allowed">
          <p className="text-orange-400/30 text-3xl">Shop</p>
        </div>
        {/* wallet connect if desired - placeholder */}
        {/* <div className="rounded-lg bg-white p-3">Connect Wallet</div> */}
      </div>
    </div>
  );
};

export default Header;
