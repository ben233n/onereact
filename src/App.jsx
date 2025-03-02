import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  return (
    <>
      <header className="header">
          <div className="head_container">
              <a className="logo" href="index.html">
                  <img src="./img/logo.png" alt="" className="logo_img"/>
                  <h1 className="logo_h1">DTDBK</h1>
              </a>
              <input id="nav-toggle" type="checkbox"/>
              <label for="nav-toggle" className="ham">
                <div className="ham-origin">
                  <div className="ham-bar ham-bar--top"></div>
                  <div className="ham-bar ham-bar--middle"></div>
                  <div className="ham-bar ham-bar--bottom"></div>
                </div>
              </label>
              <div className="nav">
                  <ul className="nav_ul ap">
                      <li className="nav_li"><a href="index.html"className="nav_li_h2 ap">最新消息</a></li>
                      <li className="nav_li"><a href="member.html"className="nav_li_h2 ap">關於球隊</a></li>
                      <li className="nav_li"><a href="contest.html"className="nav_li_h2 ap">比賽數據</a></li>   
                      <li className="nav_li"><a href="history.html"className="nav_li_h2 ap">數位迴廊</a></li>      
                  </ul>
              </div>
          </div>

      </header>
      {/* <!-- 文章的內容 --> */}
      <article> 
          <div className="no"></div>
          {/* <!-- 大圖片 --> */}
          <div className="big">
              <div id="big_index">
                  <img src="./svg/首頁字.svg" alt="" className="svg_3 big_index_word" />
                  <img src="./svg/向量球.svg" alt="" className="svg_3 big_index_ball " />
                  <img src="./svg/遊戲機.svg" alt="" className="svg_3 big_index_game" />
                  <img src="./svg/雲.svg" alt="" className="svg_3 big_index_cloud" />  
                  <img src="./svg/光.svg" alt="" className="svg_3 big_index_light_c" />    

                  <img src="./svg/正方形光.svg" alt="" className="svg_3 big_index_light" />
                  <img src="./svg/底下的線.svg" alt="" className="svg_3 big_index_line" />


              </div>
          </div>

          <div className="container"> 
              <div className="new">
                  <div className="ap">
                      <div className="title_line">
                      </div>
                      <h2 className="title main_size main_c">最新消息</h2>
                      <div className="title_line">
                      </div>
                  </div>
                  <h2 className="ap title_content main_c word_c item_size" id="new_small">提供最新的消息，讓你成為消息界的大王</h2>
                  <div className="new_item">
                      <div className="reels sh">
                          <div className="reels_btn_box">
                              <div className="reels_btn">
                                  <img src="./img/左黑箭頭.png" alt="" className="reels_arrow"/>
                              </div>
                              <div className="reels_btn">
                                  <img src="./img/黑箭頭.png" alt="" className="reels_arrow"/>
                              </div>
                          </div>
                          <div className="carousel">
                              <div className="carousel_item">
                                  <a href="https://www.instagram.com/p/C_YUZgHvO5X/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank">
                                      <img src="./img/測試2.jpg" alt="" className="carousel_img" width="100%"/>
                                  </a>
                              </div>
                              <div className="carousel_item">
                                  <a href="https://www.instagram.com/p/DCHcTFgTlBx/?igsh=c2wxOWkzeDQ3OXJu" target="_blank">
                                      <img src="./img/2024.11.8.png" alt="" className="carousel_img" width="100%"/>
                                  </a>
                              </div>
                              <div className="carousel_item">
                                  <a href="https://www.instagram.com/p/DCHbdv5THdL/?igsh=MXdra2lndzBka2dpbg%3D%3D" target="_blank">
                                      <img src="./img/5735.png" alt="" className="carousel_img" width="100%"/>
                                  </a>
                              </div>
                              <div className="carousel_item">
                                  <a href="https://www.instagram.com/p/DBJglnxTaGB/?igsh=Z2Jtc3c0dzUyZ2pr" target="_blank">
                                      <img src="./img/14611.png" alt="" className="carousel_img" width="100%"/>
                                  </a>
                              </div>
                              <div className="carousel_item">
                                  <a href="https://www.instagram.com/p/C_YUZgHvO5X/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank">
                                      <img src="./img/測試2.jpg" alt="" className="carousel_img" width="100%"/>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="report">
                          <a href="new_1.html"className="report_item sh" >
                              <div className="report_img_box">
                                  <img src="./img/奇蹟世代.png" alt="" className="report_img"/>
                              </div>
                              <div className="report_word_box">
                                  <div className="word">
                                      <div className="report_word_item">
                                          <h3 className="report_word sup_c item_size">
                                              奇蹟世代到場相助，大勝兒英系22分
                                          </h3>
                                          <p className="report_word_p sup_c p_size">
                                              三位冠軍學長到場支援輸贏，讓數位系以22分擊敗友誼賽作客的兒英系，學長呂修逸更在賽後宣布回歸消息
                                          </p>
                                      </div>
                                  </div>
                                  <img src="./img/箭頭.png" alt="" className="arrow"/>
                              </div>
                          </a>
                          <a href="new_2.html"className="report_item sh">
                              <div className="report_img_box">
                                  <img src="./img/全新.png" alt="" className="report_img"/>
                              </div>
                              <div className="report_word_box">
                                  <div className="word">
                                      <div className="report_word_item">
                                          <h3 className="report_word sup_c item_size">
                                              全新陣容的第一戰，持續磨合備戰新賽季
                                          </h3>
                                          <p className="report_word_p sup_c p_size">
                                              新賽季的開始，與社發系的友誼賽在風雨中進行，新陣容的組合受到考驗，以1分之差敗給社發
                                          </p>
                                      </div>
                                  </div>
                                  <img src="./img/箭頭.png" alt="" className="arrow"/>
                              </div>
                          </a>
                          <a href="new_3.html"className="report_item sh">
                              <div className="report_img_box">
                                  <img src="./img/女籃.png" alt="" className="report_img"/>
                              </div>
                              <div className="report_word_box">
                                  <div className="word">
                                      <div className="report_word_item">
                                          <h3 className="report_word sup_c item_size">
                                              女籃強勢闖進冠軍賽，惜敗幼教系抱回亞軍
                                          </h3>
                                          <p className="report_word_p sup_c p_size">
                                              女戰神的驚險AND 1帶著數位女籃闖入冠軍賽，可惜在最後不敵幼教系的團體默契，今年退居第二名位置
                                          </p>
                                      </div>
                                  </div>
                                  <img src="./img/箭頭.png" alt="" className="arrow"/>
                              </div>

                          </a>
                          <a href="new_4.html"className="report_item sh">
                              <div className="report_img_box">
                                  <img src="./img/校長盃.png" alt="" className="report_img"/>
                              </div>
                              <div className="report_word_box">
                                  <div className="word">
                                      <div className="report_word_item">
                                          <h3 className="report_word sup_c item_size">
                                              男籃勇闖校長盃，以衛冕軍身分奪下二連霸
                                          </h3>
                                          <p className="report_word_p sup_c p_size">
                                              在奇蹟世代的帶領之下，數位男籃四進四出，傳奇的隊伍邁向最終戰，在大家的努力下二度守護冠軍寶座
                                          </p>
                                      </div>
                                  </div>
                                  <img src="./img/箭頭.png" alt="" className="arrow"/>
                              </div>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="new ">
                  <div className="ap">
                      <div className="title_line">
                      </div>
                      <h2 className="title main_size main_c">交流分享</h2>
                      <div className="title_line">
                      </div>

                  </div>
                  <h2 className="ap title_content main_c word_c item_size" id="share_title">這邊提供大家交流與分享的空間，快來說句幹話吧</h2>
                  <div className="new_item">
                      <div className="shareimg">
                          <div className="shareimg_img sh">
                              <img src="./img/apple.jpg" alt="" id="shareimg_img_img"/>
                          </div>
                          <div className="shareimg_upload sh">
                              <input type="file" className="input_img" id="input_img" accept="image/png, image/jpeg" />
                              <label for="input_img" className="upload ap ">
                                  <div className="uploadimg_box ap">
                                      <img src="./img/上傳.png" alt="上傳" className="uploadimg"/>
                                      <div className="loader"></div>
                                      <h3 className="p_size main_c" id="youcanup">此處可分享照片</h3>
                                  </div>
                              </label>
                              <div className="upload_btn_box">
                                  <div id="fileName" className="file_name p_size">尚未選擇檔案</div>
                                  <div id="upbtn" className=" p_size"> 上傳</div>
                                  <div id="cancelbtn" className=" p_size"> 取消</div>
                              </div>

                          </div>

                      </div>
                      <div className="sharespeak sh">
                          <div className="chat_room">
                              <div className="chat_header">
                                  <img src="./img/聊天室.png" alt="" className="chat_img"/>
                                  <h3 className="sup2_c main_size">留言板</h3>
                              </div>
                              <div className="chat_body">
                                  <div className="chat_build">
                                        <div  className="chat_user_blue chat_user_XD">
                                            <div className="chat_user_head"></div>    
                                            <div className="chat_user_body"></div>                          
                                        </div>
                                        <div className="chat_build_say">
                                            <div className="chat_build_say_top">
                                                <h5 className="main_c item_size">廢結何</h5>
                                                <h6 className="word_c p_size">2025/3/3 上午12:24:08</h6>
                                            </div>
                                            <div className="chat_build_say_ad">
                                                <p className="reply">嗨</p>
                                            </div>
                                        </div>
                                    </div>
                              </div>
                              <div className="chat_footer">
                                  <div id="chat_user" className="chat_user">
                                      <div className="chat_user_head"></div>    
                                      <div className="chat_user_body"></div>                       
                                  </div>
                                  <input type="text" id="chat_input" placeholder="輸入你的留言" className="main_c item_size"/>
                                  <img src="./img/發送.png" alt="" id="chat_send"/>
                              </div>

                          </div>
                      </div>
                  </div>

              </div>
          </div>
            <div id="overlay"></div>
            <div id="popup">
                <span className="close">&times;</span>
                <div className="popup_content bug">
                      <h3 >成功抓到第 <span id="clickCountDisplay">0</span> 個bug</h3>
                      <h3 >🐛🐛🐛</h3>
                </div>
            </div>

      </article> 
      <footer className="footer">
          <div className="footer_top">
              <div className="footer_item">
                  <div className="footer_icon">
                      <img src="./img/地標.png" alt="" className="footer_icon"/>
                  </div>
                  <div className="footer_t sup_c">
                      <p className="ft  ">球團總部</p>
                      <p className="fp ">國立台北教育大學創意館<br/>NTUE Creative Museum</p>
                  </div>
              </div>
              <div className="footer_item">
                  <div className="footer_icon">
                      <img src="./img/時間.png" alt="" className="footer_icon" />
                  </div>
                  <div className="footer_t sup_c">
                      <p className="ft ">練球時間</p>
                      <p className="fp ">男籃：(二)18：30-20：30 (五)18：30-20：30<br/>女籃：(一)18：30-20：30 (三)17：30-18：30</p>
                  </div>
              </div>
              <div className="footer_item">
                  <div className="footer_icon">
                      <img src="./img/電話.png" alt="" className="footer_icon"/>
                  </div>
                  <div className="footer_t sup_c">
                      <p className="ft ">聯絡我們</p>
                      <div className="fp">
                          <a className="foot_icon_box" href="https://www.instagram.com/the.dtd_bk/" target="_blank">
                              <img src="./img/ig.png" className="foot_icon" alt="ig" />
                          </a>
                          <a className="foot_icon_box" href="https://www.instagram.com/the.dtd_bk/" target="_blank">
                              <img src="./img/fb.png" className="foot_icon" alt="fb" />
                          </a>
                          <a className="foot_icon_box" href="https://www.instagram.com/the.dtd_bk/" target="_blank">
                              <img src="./img/yt.png" className="foot_icon" alt="yt" />
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="footer_bottom">
              <div>
                  <p className="sup_c copyright">©Copyright All rights reserved.</p>
              </div>
          </div>
      </footer>

    </>
  )
}

export default App
