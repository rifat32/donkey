import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div className="App">
  <div style={{position: 'fixed', zIndex: 9999, inset: 16, pointerEvents: 'none'}} />
  <div>
    <nav className=" main_navBAr   bg-body-tertiary navbar navbar-expand-lg navbar-light">
      <div className="container"><a href="#home" className="site_logo_desk navbar-brand"> <img src="https://donkeybank.co/static/media/donkey-logo1.ae5c0cb1d718858c9789.png" alt /><br /></a><span className="d-block d-lg-none"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" className="text-white fs-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z">
            </path>
          </svg></span>
        <div className="navbar-collapse collapse" id="responsive-navbar-nav">
          <div className="ms-auto navbar-nav"><a href="#ecosystem" data-rr-ui-event-key="#ecosystem" className="nav_bar_links nav-link">Home</a><a href="#BuyNow" data-rr-ui-event-key="#BuyNow" className="nav_bar_links nav-link">Buy Now</a><a href="#Roadmap" data-rr-ui-event-key="#Roadmap" className="nav_bar_links nav-link">Roadmap</a><a href="#Team" data-rr-ui-event-key={2} className="nav_bar_links nav-link">Team</a><a href="#faq" data-rr-ui-event-key={2} className="nav_bar_links nav-link">Faq</a></div>
          <div className="navbar-nav">
            <div className=" d-flex align-items-center " style={{justifyContent: 'center'}}>
              <div className="soical_links gap-3 d-flex align-items-center ">
                <div style={{justifyContent: 'center'}}><a href="https://gleam.io/TmXyW/50000-usd-airdrop" target="_blank"><button className="button-5">Join Giveaway </button></a></div>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div className="main_landing" id="BuyNow">
    <div className="container pt-3">
      <div className="row justify-content-around align-items-center">
        <div className="col-md-5">
          <div className="lg_left_cont text-start ">
            <h1 className="main_ld_haeding">Donkey Bank: Revolutionizing The Meme-Defi Landscape With
              Mr. Don's Vision</h1>
            <p>Donkey Bank, a revolutionary force in the cryptosphere, reshaping the meme economy
              with an unparalleled model that empowers investors with the financial freedom they
              crave. In a landscape littered with failed projects, Donkey Bank stands tall as an
              institution committed to delivering real value.</p>
            <div className="d-flex gap-3"><a href="https://coinsult.net/projects/donkey-bank" target="_blank"><button className="button-5"> Audit 🔎</button></a><a href="https://donkeybank.co/whitepaper.pdf" target="_blank"><button className="button-5">Whitepaper 📄 </button></a></div>
            <h1 className="main_ld_haeding" style={{color: 'rgb(251, 189, 24)', marginTop: 30}}>100%
              Secure &amp; Audited</h1><img className="coinsult mb-4 mt-3" src="/static/media/coinsult_full.5672034f6bbc713cdff8.png" alt />
            <h6 className="join mt-3" />
            <div className="soical_icon_mainn mt-3 mb-5" />
          </div>
        </div>
        <div className="col-md-5">
          <div className="card_main_bg">
            <div className="text-center mb-3"><button className="button-5 w-50 text-black ">Connect
                Wallet</button>
              <div style={{paddingTop: 5}}>
                <div className="timer">
                  <div className="count-row"><span className="count-box">
                      <div className="count-number">69</div>
                      <div className="count-text">Days</div>
                    </span><span className="count-box">
                      <div className="count-number">2</div>
                      <div className="count-text">Hours</div>
                    </span><span className="count-box">
                      <div className="count-number">45</div>
                      <div className="count-text">Minutes</div>
                    </span><span className="count-box">
                      <div className="count-number">26</div>
                      <div className="count-text">Seconds</div>
                    </span></div>
                </div>
              </div>
            </div>
            <div className="card_main_content">
              <div className="main_pooo">
                <div className="progress_bar">
                  <div className="bvvvv" style={{width: '36%'}} /><span className="stage_text" />
                </div>
                <p className="token_s">USDT Raised: $147867.53 / $750,000</p>
                <h6 className="span-text">Your Purchased DOBK : 0</h6>
                <h6 className="span-text mt-3">1 Token = $0.001 </h6>
              </div>
              <p className="one_how">Phase 1 :- 1$ = 1000 $DOBK</p>
              <h6 className="span-text">Dex listing price: 0.015$</h6>
              <div className="token_boxes py-3 d-flex justify-content-center gap-3">
                <div className="d-flex">
                  <div className="eth d-flex justify-content-center gap-2 align-items-center border">
                    <img className="token_logo" src="/static/media/eth-golden.1e6734cb8cdbcafe691e.png" alt />
                    <p>ETH</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="eth d-flex justify-content-center gap-2 align-items-center ">
                    <img className="token_logo" src="/static/media/usdt-gold.05defa2dc48a2027525c2bfddd986c27.svg" alt />
                    <p>USDT</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="eth d-flex justify-content-center gap-2 align-items-center ">
                    <img className=" border_re" src="/static/media/usdc.f08e02b1252e78ae2924100dfcb8428c.svg" alt />
                    <p>USDC</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <p className="eth_bla"> ETH balance : <span className="fs-5">0 </span></p>
                <div className="col-md-6 mt-3">
                  <div className="d-flex mb-2 new_conver justify-content-between">
                    <p>you pay </p>
                    <p className="fssff fw-bold" style={{cursor: 'pointer'}}>Max</p>
                  </div>
                  <div className="covert_input d-flex  "><input type="text" className="input_cober" placeholder={0} name id defaultValue /><img src="/static/media/eth-golden.1e6734cb8cdbcafe691e.png" className="iaafamd " alt /> </div>
                </div>
                <div className="col-md-6 mt-3">
                  <div className="d-flex mb-2 new_conver justify-content-between">
                    <p>AMOUNT OF TOKENS</p>
                  </div>
                  <div className="covert_input d-flex  "><input type="text" className="input_cober" name id defaultValue={0} /><img src="https://donkeybank.co/static/media/donkey-logo1.ae5c0cb1d718858c9789.png" alt /></div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-2 py-4"><button className="button-10 text-black ">Buy Now</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3 className="text-white text-center mt-3 mb-2 span-text ">Powered By</h3>
    <div className="main_feartue">
      <div className="swiper swiper-initialized swiper-horizontal mySwiper swiper-backface-hidden">
        <div className="swiper-wrapper" style={{transitionDuration: '0ms', transform: 'translate3d(-1107px, 0px, 0px)', transitionDelay: '0ms'}}>
          <div className="swiper-slide" data-swiper-slide-index={1} style={{width: 319, marginRight: 50}}><img src="data:image/png;base64,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" alt /></div>
          <div className="swiper-slide" data-swiper-slide-index={2} style={{width: 319, marginRight: 50}}><img src="data:image/png;base64,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" alt /></div>
          <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index={3} style={{width: 319, marginRight: 50}}><img src="data:image/png;base64,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" alt /></div>
          <div className="swiper-slide swiper-slide-active" data-swiper-slide-index={4} style={{width: 319, marginRight: 50}}><img src="/static/media/full-uniswap-logo.1166e70f382fd1dfaf5c.png" alt /></div>
          <div className="swiper-slide swiper-slide-next" data-swiper-slide-index={5} style={{width: 319, marginRight: 50}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAoCAYAAAAR33OgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApESURBVHgB7VzdbhTJFT6nuse7UhIxKBApyxJmsrlnbCfXjJWF3VUuGJ7A9hPY1hqUO8Z3K0yEeQKGJ8BcEdZEDHcrBdvNdYJmgF1QFiNmFSI5THedPaf6Z3rs+ekG2zCoP2nU1V3d9dP11fmr6gHIkCFDhncFhJRoNJ4VXNsuIGIhzXNE1JSj7b5yisViCzJ8EEhEoH89eV62Ec4Cqhk+bYGQAaEJaUBQ4OrygFTiZ+ue1tf/8OlvapBhpDGQQI1nzwpAuStAWAatr4Lr1orF3zbhLdF4vFUBC6a5+pJH3lJGpA8Qje9/LDV+eNF4+GRrpdFo5GEfIESSOhrPXlyEDB8OQvI0WHXBPkOkHNe1mZHoA0EwoAdCnqjOxsu8kOjh0+fzkGG00fhh69rDJ8+rcMDwibvVEC8PMowMuoxoI3WUulY89usivAEmz9+Z40PJa7eXnJWvmpASDSGuwhPFY0dmIcNIoJtALH2A9L1iSq+otHirbKEtNkw5vEYIVf3avZ6GSKLKYMzbhNfWeLF4OIsVjQB2EuglvG6P93PVS/M38pAbY9de5VlS5ZVWHFDk+FCMOF0gbHENqxxEfKDBdfwadctZ/osDfcBtuOGRvpm59qMBO0yI58Wj2xwU57Fyv9pkVhQM7Qh6RpH4cosv+24/khxnmGQc9omqgokLf1/YuPTlSs9KiO4hqRJkGAmoKEUcJSbqqzZKf71VMOTpB4I6EkxtLJ8+TECzhP7SRS+gts72y/M0NlENqCdDX5QW18ql89/OlC7crvQ63w9EYsHjtS0rzfIEE4ZJ12SiPNDuq5qzci4i38bymRofan/kDmjQZUTrZEC+oZLFQiYx4aF++VIm21dDY0bIttz9y19U4R1j8sLaDX5XvISDrfVLn5/rm8/Sf3358y7noTR/q2Dl7GuSRnKX7l/+qj6oLgQ9o0BNs4nR5NPVneewD7AT37n9cQtybnS6fvn01LBH7l8+XeeD/GCCZwICXoO3hEYqcDnlYfcRYhP2GZPn1+6Csf/M4Pf0XMmjR6iwwtKdyX+rHCeBSAgmTyAdqFWav7vgrExFE1HlrDIE9qVrw4F5ptwvCtpUW18+M7DexASSjnHBsCcYoN6GweKmsJG9FBWFStShkWwUu84ZTZnBkgw9Qf+cJwJsB0sz26245Azvjz8TXc9p88wgB6AXFOIqj4aEN0CDKkMwoUxfEKd9Y9Igr1RbyFSLukA4F9ibdeebWB/esC1xmHJsXuB2t534O0iL5BJoB8a//seJzb/9+VHiB0iM79S7R3bhn8tn5KVFL2588XZBoW90b8RUlsxuFv8NSYvRjmTPiRolaM8i+GqBvF/I7KqFzwTqoiwShY/FSbEdSIm6jFRvMIkclnB5ZoTsLpCSChMX7jT8MrEcfy8ihScX18QbzbMqZ8JANdadcrxvaMGpsD1mgDGYGEjXJy6scTtwBqljH04u3mmRopWNS6eXICF29Sn3S+lT3Wu7s5aVK5EFV0RaGpCqcL/KXCdL2N4aR0EaEOxJbIab9xMcIJCsKwMdgB4wA0jqhiTJbGERmy+SHi0zkL6XGdTBqpV618FhjOtBqiBqTFKTX9+pRG2K8rHCasyUqWw7Mny15YmDIgNZCNrimCPXz9erE4u3q5AAJtC7o0+BsyOTbRMRT3b1wZQv51joV2YqApHCVie9fRjSQLy8KE0HGiT0X7Y+l2u7RR2TXoMQ2B8GGl5Pic0nP89yi177lSlLBtK/A5tyLr9eUlnUWKcs5Zer4GzQuDrbdLUgO2/b20YysKyeDvNFfSmghdDL5XaMa8sdh6AvgWQbiICY80F7V4NyprTypgIS5UnpiulXBH3T71e7r72bSoWhv6uwIGnl5UqQcDDMs7xE0WnX/hu4XSBvaX35SzOIJhzhDe+2Mh6mn7bgoxvsLTmkNXucus42Q50vi00YTYTvBkTce6oxooqwRNQTG6p1VhVNI2E4n6VfM66+5CiqWyL+E4trTAK2gcSfiSyCBNLVdqW88L5WJLVcIaAZj4Js+pN+dGxdfPndkJWEVATSpB+xveGfKJ1uj5DsSAw6rJTXhIOEVqklngw6hwyWtKJpJP/lssFesUBd5BfseG17yrz9hBA1xgNl7DBDAvSDraKe/DYyUUx4AivKVpEUC/M7Hp8gneVhnkCjisLWcHC3ZxnpxhTSSiBQInGMuOQGnEz6nBGf6EaGqOt+/Mbew57C6hjHvs0DpXh0nUlU5UP1T+e/LWletmE1yFJDPCco+R4TJiZm3BvDMI4V8654OOucL9fzCNacUbxBfmAvlf1HaDaIs4FIER6HRPuodBscK+enxVvd2KMYWSoCKTDGWwBj8HXFLfo+lzMv26RF3yZ5Zr9gBiRUJ4BzbFgekrU6hTBNsRkYBvF4wK63oe2Ax5MnZ+WtcALZ1NKafvIlMksVjnNpCYK+Hqv36l9cjUFQT6iewvxQjYXGeZjPtom01dynyJfe0j5fHRIkgbNyxhFvi5NlIR17dYe0dm/KmqZFao7VdT305iSG5hvPqixqU6FVCEm7E6lkoQkMdjyxvD3mDmW/LMCy5Iru43WuOrxj8CuPub0izuEKhZ5JgMALKkvw04KxTQkJWFEglJz1S1+ssjqrhfeb+9jDUfb/Z/rWSx3CCCL1FV3ona/budVwaYjQvsvu+0sToiBKpXLYAYiWmFgtz1tcluV7ZWV+KfMiaYN2XA1aXJB7pG+h97gTqeNA/JKvoi9qJVwwzzM432//j7DXRpsHp2PkeVY7ccwiCdiuqEt4eleG6zY5sFOTpFKcjmHj8ukVVgtNnj7TZhB4mYFn3FUSO0GrU8iShD2UFZYqLXGfuZYTQWUtJsE97f7PlCsTiteaxsUuispR/R0ES0FNa3+ZBkUSf9P9zngZZ5VV5Ymd+SLR2PifslyratqCEkaAB+wVs2SEszvfhbS/13lQXtFfFeAAbKfvDzzbrW0E9W1EfcfAE8Smm+u9zBVpfLOZDPFi8dMjA5coxJ6xcq4YdKVYMbImVgtFYGwNp9xVGeveYetT/368VVEWzfz+2NEKZHjv0SGQfMKjx+4m2Y0orrDl7SaIEInZviqSaVdFBAs8Y1eGle1vp8X8Z8ePzEOG9x67NpR9hFbpk08OJ1qiEFEorieLukLfm9iT8JAWHH8JYigaT7fusnd8tfi7I6uQ4b1HF4HkGzBZFf7s+NEqpADHS6rGRcV4HIEcJtZCsCKfCGmkYIb3A90SyAxgTvYkF9PuSQ7UmngzZUWwlERd7YTZk83INtWPMMyXqE9fXIEDRvQ9WvZZz2gj+MjvQD83jsjz+D+Z5/UhIBrQAyBRWNe7+Jgxwz4iIhHbJfulVoSgpo7vf5yBDCOJoVsE/a9Flay51D0Pblref+tv8wdR5r+GbHUKNMeKiBxot2f34i9jMrwbJNpjarwzTzZYMZEQwwj0G5DIbCloau3dVICrxeNH65BhpPFGm5T9/wv6OPXekUzSZMiQIUOGvcPPbVVQvL3SsWIAAAAASUVORK5CYII=" alt /></div>
          <div className="swiper-slide" data-swiper-slide-index={6} style={{width: 319, marginRight: 50}}><img src="data:image/png;base64,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" alt /></div>
          <div className="swiper-slide" data-swiper-slide-index={7} style={{width: 319, marginRight: 50}}><img src="data:image/png;base64,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" alt /></div>
          <div className="swiper-slide" data-swiper-slide-index={0} style={{width: 319, marginRight: 50}}><img src="/static/media/full-uniswap-logo.1166e70f382fd1dfaf5c.png" alt /></div>
        </div>
      </div>
    </div>
  </div>
  <div className="scroll-container ease-out">
    <div className="main_ecosysytem" id="ecosystem">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-5 order-mobile-first"><img className="pc-image" src="/static/media/donkeybank-RICH.a2a16327b5130e5dbf33.png" alt /></div>
          <div className="col-md-5 order-mobile-second">
            <h6 className="main_heading_eco" style={{color: 'rgb(251, 189, 24)', marginTop: 10}}>What Is
              <span className="span-text">Donkey Bank</span></h6>
            <div className="right_eco_content">
              <p>Donkey Bank isn't merely a platform; it's a profound commitment. A commitment to
                reshape your anticipations, to question the established norms, and to introduce
                a revolutionary epoch of financial empowerment. Embark on this extraordinary
                journey with us, where your investments transcend beyond being mere assets—they
                become a testament to the unwavering resilience and formidable strength of a
                community bound together by a shared and compelling vision. Welcome to a future
                where possibilities are limitless, and together, we redefine the very essence of
                financial prosperity.</p><a href="https://etherscan.io/address/0x2662D294abf0A6DD82F882E626376123AC4DE0be" target="_blank"><button className="button-5">Smart Contract </button></a>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center " style={{marginTop: 100, marginBottom: 30}}>
          <div className="col-md-5"><img className="pc-image" src="/static/media/sidenew-donkey.94b5352a1cea93b92305.png" alt /></div>
          <div className="col-md-5">
            <h6 className="main_heading_eco" style={{color: 'rgb(251, 189, 24)', marginTop: 10}}>
              Decentralization and Transparency<span className="span-text" /></h6>
            <div className="right_eco_content">
              <p>Donkey Bank is firmly dedicated to decentralization and transparency in the
                cryptocurrency space. Our mission revolves around a groundbreaking mechanism
                that empowers and amplifies community voices, giving them a pivotal role in
                major decisions. Beyond promises, our dedicated team is actively building robust
                structures to ensure meaningful community participation. In an uncertain
                landscape, Donkey Bank stands as a beacon of trust, ushering in a new era where
                the community's voice reigns supreme.</p>
            </div>
          </div>
        </div>
        <h1 className="main_heading_eco" style={{color: 'rgb(251, 189, 24)', marginTop: 100}}>Utility of the
          Token</h1>
        <p className="new_eco_content">The Donkey Bank Token enables a 'play-to-earn' model, empowering
          holders to actively engage and contribute to our vibrant community. With the token, users
          gain access to participation in raffle and lotteries, fostering a dynamic and rewarding
          community experience. Furthermore, the token serves as the key to unlocking the world of
          NFTs within our platform, facilitating their seamless exchange.</p>
        <div className="row align-items-center justify-content-center" style={{marginTop: 100, marginBottom: 30}}>
          <div className="col-md-5 order-mobile-first"><img className="pc-image" src="/static/media/NewOne2.360872475f615f5a2c73.png" alt /></div>
          <div className="col-md-5 order-mobile-second">
            <h6 className="main_heading_eco order-md-1" style={{color: 'rgb(251, 189, 24)', marginTop: 10}}>Flagship Product: The Donkey
              game</h6>
            <div className="right_eco_content">
              <p>Donkey Bank's Flagship Product, The Donkey Game, Stands As A Testament To The
                Project's Commitment To Innovation And User Engagement. The Token Becomes An
                Essential Element Within The Game, Allowing Players To Seamlessly Participate In
                Various Activities, Trade NFTs, And Acquire In-Game Items. The Integration Of
                The Token Into The Game Not Only Enhances Its Utility But Also Ensures A
                Cohesive And Immersive Experience For The Community.</p><a href="https://t.me/mrdonbank" target="_blank"><button className="button-5">Join
                  Telegram </button></a>
            </div>
          </div>
        </div>
        <h1 className="main_heading_eco" style={{color: 'rgb(251, 189, 24)', marginTop: 100}}>Tokenomics
        </h1>
        <div className="app-container">
          <div style={{justifyContent: 'center', display: 'flex'}}>
            <div className="tokenomicsnew" style={{justifyContent: 'center', display: 'flex'}}><img className="tokenomicsnew" src="/static/media/Final-tokenomicss.f2499d5862f7f8418d0d.png" loading="lazy" />
            </div>
          </div>
        </div>
        <h1 className="main_heading_eco" style={{color: 'rgb(251, 189, 24)', marginTop: 100}}>Roadmap</h1>
        <p className="rright_eco_content">
        </p><p>Donkey Bank meticulously follows a structured roadmap, divided into three phases. It kicks
          off with an equitable presale designed to secure essential funds for both marketing
          initiatives, meanwhile diligently developing products to complement its strategic approach.
        </p>
        <p />
        <div className="mmain_roadmap" id="Roadmap">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-4">
                <div className="card_content">
                  <div className="d-flex justify-content-center">
                    <div className="circular">
                      <h3 style={{color: 'rgb(251, 189, 24)', fontWeight: 'bold'}}>Phase 1
                      </h3>
                    </div>
                  </div>
                  <ul>
                    <li className="card_content_i">Team Formation</li>
                    <li className="card_content_i">Token Generation</li>
                    <li className="card_content_i">Smart Contract Security Audit</li>
                    <li className="card_content_i">Launching of Website</li>
                    <li className="card_content_i">Integration with Social Media</li>
                    <li className="card_content_i">Commencement of Marketing Activities</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 mt-4 mt-md-0">
                <div className="card_content">
                  <div className="d-flex justify-content-center">
                    <div className="circular">
                      <h3 style={{color: 'rgb(251, 189, 24)', fontWeight: 'bold'}}>Phase 2
                      </h3>
                    </div>
                  </div>
                  <ul>
                    <li className="card_content_i">Engage Influencers</li>
                    <li className="card_content_i">NFT Minting</li>
                    <li className="card_content_i">Launch "The Donkey Game"</li>
                    <li className="card_content_i">Community Engagement Drive</li>
                    <li className="card_content_i">Strategic Marketing &amp; Advertising</li>
                    <li className="card_content_i">Ongoing Enhancement Commitment</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 mt-4 mt-md-0">
                <div className="card_content">
                  <div className="d-flex justify-content-center">
                    <div className="circular">
                      <h3 style={{color: 'rgb(251, 189, 24)', fontWeight: 'bold'}}>Phase 3
                      </h3>
                    </div>
                  </div>
                  <ul>
                    <li className="card_content_i">Expand Team</li>
                    <li className="card_content_i">List on Major DEX (Decentralized Exchange)
                    </li>
                    <li className="card_content_i">List on Major CEX (Centralized Exchange)</li>
                    <li className="card_content_i">Launch Lottery</li>
                    <li className="card_content_i">Introduce Staking</li>
                    <li className="card_content_i">Implement Community Voting System</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-container">
          <div style={{justifyContent: 'center', display: 'flex'}} />
        </div>
        <h1 className="main_heading_eco" style={{color: 'rgb(251, 189, 24)', marginTop: 100}}>Join Our $50K
          DonkeyDrop!</h1>
        <p className="rright_eco_content">
        </p><p style={{fontSize: 20}}>Enter our Gleam competition below to stand a chance to win one of 5
          prize allocations, each worth $10,000. We aim to reward our community with $50,000 worth of
          $DOBK tokens in total. Terms and conditions apply.</p>
        <p />
        <div className="row align-items-center justify-content-center " style={{marginTop: 40, marginBottom: 30}}>
          <div className="col-md-5"><img className="pc-image" src="/static/media/gleam-io.17acd22e814930b4034f.png" alt /></div>
          <div className="col-md-5" style={{height: 500}}><iframe className="w-100 h-100" src="https://gleam.io/TmXyW/50000-usd-airdrop" title="$DOBK Gleam io Airdrop" style={{border: '2px solid rgb(251, 189, 24)'}} /></div>
        </div>
        <h1 className="main_heading_eco" style={{color: 'rgb(251, 189, 24)', marginTop: 100}}>DOBK Team</h1>
        <p className="rright_eco_content" />
        <section className="our__team" id="Team">
          <div className="container">
            <div className="team__wrapper">
              <div className="team__item">
                <div className="team__img"><img src="/static/media/dobk-1-removebg-preview.f7ca6231e0aff7c1e614.png" alt style={{borderRadius: 160}} /></div>
                <div className="team__details">
                  <h4 className="span-textt">Gama</h4>
                  <p className="span-texttt description">Blockchain Developer</p>
                  <div className="team__member-social"><span><i className="ri-linkedin-line" /></span><span><i className="ri-twitter-line" /></span><span><i className="ri-facebook-line" /></span></div>
                </div>
              </div>
              <div className="team__item">
                <div className="team__img"><img src="/static/media/dobk-2-removebg-preview.13c518372f14dd5e7814.png" alt style={{borderRadius: 160}} /></div>
                <div className="team__details">
                  <h4 className="span-textt">Lama</h4>
                  <p className="span-texttt description">Chief Technology Officer </p>
                  <div className="team__member-social"><span><i className="ri-linkedin-line" /></span><span><i className="ri-twitter-line" /></span><span><i className="ri-facebook-line" /></span></div>
                </div>
              </div>
              <div className="team__item">
                <div className="team__img"><img src="/static/media/dobk-3-removebg-preview.c738793980a12e3aa256.png" alt style={{borderRadius: 160}} /></div>
                <div className="team__details">
                  <h4 className="span-textt">Chama</h4>
                  <p className="span-texttt description">Head Of Marketing</p>
                  <div className="team__member-social"><span><i className="ri-linkedin-line" /></span><span><i className="ri-twitter-line" /></span><span><i className="ri-facebook-line" /></span></div>
                </div>
              </div>
              <div className="team__item">
                <div className="team__img"><img src="/static/media/dobk-4-removebg-preview.072692da9a9b88e2071f.png" alt style={{borderRadius: 160}} /></div>
                <div className="team__details">
                  <h4 className="span-textt">Mr. Don</h4>
                  <p className="span-texttt description">President</p>
                  <div className="team__member-social"><span><i className="ri-linkedin-line" /></span><span><i className="ri-twitter-line" /></span><span><i className="ri-facebook-line" /></span></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="app-container">
          <div style={{justifyContent: 'center', display: 'flex'}} />
        </div>
      </div>
    </div>
  </div>
  <div className="main_faq_bbg" id="faq">
    <h1 className="main_mdh">DOBK FAQ</h1>
    <p className="faq_par">Welcome to our comprehensive FAQ section dedicated to addressing common inquiries
      about DOBK Token and its associated features. If your question isn't answered here, feel free to
      reach out to our dedicated support team. You can get in touch via the provided contact form or use
      our AI assistant for further assistance. We're here to ensure you have a smooth and enjoyable
      experience with DOBK.</p>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header"><button type="button" aria-expanded="true" className="accordion-button">What is DOBK Token?</button></h2>
              <div className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <p className="acc_para">The DOBK token stands as the proprietary cryptocurrency
                    of Donkey Bank, serving as a versatile instrument within the platform.
                    Tailored for optimal use in the Play 2 Earn game, Dobk Coin empowers
                    users to participate in diverse activities such as raffles, lotteries,
                    and stacking. Moreover, it functions as a medium for the exchange of our
                    exclusive collection of NFTs.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header"><button type="button" aria-expanded="false" className="accordion-button collapsed">Why Opt for DOBK$?</button></h2>
              <div className="accordion-collapse collapse">
                <div className="accordion-body">
                  <p className="acc_para">Owning DOBK tokens not only amplifies the gaming
                    experience but also unlocks a realm of rewards and exclusive NFT
                    opportunities within the dynamic ecosystem of Donkey Bank. The team is
                    unwavering in its commitment to leveraging advancements, ensuring
                    sustained financial benefits for token holders as the platform
                    progresses.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header"><button type="button" aria-expanded="false" className="accordion-button collapsed">Whats Next Post-Presale?</button></h2>
              <div className="accordion-collapse collapse">
                <div className="accordion-body">
                  <p className="acc_para">After the presale, our focus is on executing our roadmap
                    and launching products currently in the developmental pipeline. To
                    amplify our reach, we're launching an intensive marketing campaign,
                    enlisting top influencers in blockchain and crypto. This strategic move
                    aims to boost visibility, credibility, and community engagement</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header"><button type="button" aria-expanded="false" className="accordion-button collapsed">How Can I Purchase $DOBK?</button></h2>
              <div className="accordion-collapse collapse">
                <div className="accordion-body">
                  <p className="acc_para">$DOBK Tokens are available for purchase during our
                    presale event. We accept major cryptocurrencies, including USDT
                    (Tether), ETH (Ethereum), and USDC (USD Coin), as payment. This
                    flexibility allows potential investors to participate in the presale
                    using their preferred cryptocurrency or stablecoin.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header"><button type="button" aria-expanded="false" className="accordion-button collapsed">How can i claim my tokens? </button></h2>
              <div className="accordion-collapse collapse">
                <div className="accordion-body">
                  <p className="acc_para">Upon the conclusion of the presale, you will have the
                    opportunity to claim your tokens directly from the wallet through which
                    you made the purchase.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="main_footer ">
    <div className="container  bord pt-4">
      <div className="footer_content">
        <h3 className="main_mdh"> join our community</h3>
        <div className="footer_soical_icons">
          <div className="soical-icons d-flex justify-content-center my-3 "><a href="https://t.me/mrdonbank" target="_blank" className="text-decoration-none"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="sical-logo0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z">
                </path>
              </svg></a><a href="https://twitter.com/DonkeyBank" target="_blank" className="text-decoration-none"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="sical-logo0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z">
                </path>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z">
                </path>
              </svg></a></div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="footerlin">
              <p className="foooter_para">Disclaimer: Cryptocurrency may be unregulated in your
                jurisdiction. The value of cryptocurrencies may fluctuate. Profits may be
                subject to capital gains or other taxes applicable in your jurisdiction.</p>
            </div>
          </div>
          <p className="copy_right">copyright@2023-The Donkey Monkey Token all rights reserved</p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default App;
