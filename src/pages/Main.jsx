import React from 'react'
import NavBar from '../components/NavBar';
import '../assets/css/Main.css'
import img1 from '../assets/img/img1.svg'
function Main() {
    return (
        <div>
            <NavBar />
            
            <div className=" bg-col1 h-screen w-full">
                <div className="w-full lg:grid lg:grid-cols-3 h-full gap-10 calc-height">
                    <div className="col-span-1 pl-8 pr-8 lg:pr-0 lg:pl-20 h-full">
                        <div className="w-full flex justify-center items-center h-full">
                            <div className="">
                                <h1 className="text-xl lg:text-5xl text-white mb-4 font-bold tracking-wide">Let me Tell You a Secret!</h1>
                                <p className="text-sm lg:text-base text-gray-200 mb-8">Last year covid hit and everyone was stuck in lockdown. Nothing to do much,i decided to share my knowledge about market. Created several WhatsApp having more than 1000 students for free. Slowly i realized their problems. Everyone had similar questions, the secret is this book covers them all. </p>
                                <button className="custom-shadow bg-white px-2 lg:px-6 py-3 text-lg lg:text-xl  rounded-xl hover:bg-col4 hover:text-white transition-all duration-150 ease-in hover:outline-col4 font-semibold">BUY NOW</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 h-full">
                        <div className="header-right-shape h-full random-shape">
                            <img src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="header"></img>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full h-screen relative bg-col1 pt-8 lg:pt-12">

                <h1 className="text-xl lg:text-4xl text-white mb-12 font-semibold tracking-wide text-center">Check out the video!</h1>

                <div className="w-full  flex justify-center items-center  ">
                    <div className="w-5/6 lg:w-2/5 custom-youtube-height">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RYHPlLsdW0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="w-full absolute bottom-0 ">
                    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="2%" y1="63%" x2="98%" y2="37%"><stop offset="5%" stop-color="#ff0000ff"></stop><stop offset="95%" stop-color="#5b342eff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 104.78571428571428,214.67857142857144 209.57142857142856,229.35714285714286 343,230 C 476.42857142857144,230.64285714285714 638.5,217.25 776,222 C 913.5,226.75 1026.4285714285713,249.64285714285717 1133,249 C 1239.5714285714287,248.35714285714283 1339.7857142857142,224.17857142857142 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>

                </div>


            </div>

            <div className="w-full bg-col1 py-8 lg:py-20 px-8 lg:px-36">

                <h1 className="text-xl lg:text-4xl text-white mb-4 font-semibold tracking-wide">Topics Covered</h1>
                <p className="text-sm lg:text-base text-gray-200 mb-8 w-full lg:w-3/5">Lorem ipsum dolor sit, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ducimus at officiis, qui quibusdam deserunt laboriosam vitae optio iusto voluptatibus itaque facilis necessitatibus do   lorum quasi ad assumenda laudantium doloribus eos!                         amet consectetur adipisicing elit. Consectetur ullam magni commodi itaque illum odio. Eligendi expedita reprehenderit dolorem? Tenetur odit tempore saepe architecto facilis velit distinctio ex enim labore.</p>

                <div className="tiles-container w-full mt-12 lg:mt-20">
                        <div className="tile-container-1 lg:grid lg:grid-cols-2 gap-20 mb-12 lg:mb-32">

                            <div className="col-span-1 flex justify-start items-center">
                                <div className="tile px-4 lg:px-8 lg:py-12 py-8 custom-shadow-tile1 bg-col2">
                                    <div className="w-48 h-48 align-center-custom">
                                    <img className="object-contain" src="https://www.downloadclipart.net/svg/31743-blue-shopping-cart-vector.svg" alt="imhg1"></img>
                                    </div>
                                    <h1 className="text-xl lg:text-4xl text-white mb-4 text-center font-semibold tracking-wide">What is Market?</h1>
                                </div>
                            </div>

                            <div className="col-span-1 flex justify-start items-center h-full">
                                <div className="tile px-4 py-8 custom-shadow-tile2 bg-col2">
                                    <div className="w-48 h-48 align-center-custom">
                                        <img className="object-contain" src="https://www.pngall.com/wp-content/uploads/8/Trading-Graph-Growth-PNG-Free-Download.png" alt="img2"></img>
                                    </div>
                                    <h1 className="text-xl lg:text-4xl text-white mb-4 font-semibold text-center tracking-wide">Trading using price action</h1>
                                </div>
                            </div>

                        </div>


                        <div className="tile-container-2 lg:grid lg:grid-cols-2 gap-20 mb-12 lg:mb-32">

                            <div className="col-span-1 flex justify-start items-center">
                                <div className="tile px-4 lg:px-8 lg:py-12 py-8 custom-shadow-tile2 bg-col2">
                                    <div className="w-48 h-48 align-center-custom">
                                    <img className="object-contain" src="https://www.nicepng.com/png/full/935-9358242_1561-x-1005-4-scale-indicator-icon.png" alt="imhg1"></img>
                                    </div>
                                    <h1 className="text-xl lg:text-4xl text-white mb-4 text-center font-semibold tracking-wide">Understanding the indicators </h1>
                                </div>
                            </div>

                            <div className="col-span-1 flex justify-start items-center h-full">
                                <div className="tile px-4 py-8 custom-shadow-tile1 bg-col2">
                                    <div className="w-48 h-48 align-center-custom">
                                        <img className="object-contain" src="https://www.pinclipart.com/picdir/big/534-5341901_green-select-icon-png-clipart.png" alt="img2"></img>
                                    </div>
                                    <h1 className="text-xl lg:text-4xl text-white mb-4 font-semibold text-center tracking-wide">Making stock selection</h1>
                                </div>
                            </div>

                        </div>


                        <div className="tile-container-3 lg:grid lg:grid-cols-2 gap-20 mb-8 lg:mb-20">

                            <div className="col-span-1 flex justify-start items-center">
                                <div className="tile px-4 lg:px-8 lg:py-12 py-8 custom-shadow-tile1 bg-col2">
                                    <div className="w-48 h-48 align-center-custom">
                                    <img className="object-contain" src="https://png2.cleanpng.com/sh/e890e2a3499a1a81dece29f7669fbe11/L0KzQYm4UcI4N5h1gZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TgJmb6ZxeeZyb36wg7TojPFjdJYyjtdsdHB1Pbj5ggBpcZR4RadrZnToc4OAUMc1bpI1RqY6MEW7SYKBUcU1O2Q7T6k6OUC2PsH1h5==/kisspng-computer-icons-regulation-scalable-vector-graphics-5bfdec27074fa0.41058918154336771903.png" alt="imhg1"></img>
                                    </div>
                                    <h1 className="text-xl lg:text-4xl text-white mb-4 text-center font-semibold tracking-wide">Trading rules and pyschology </h1>
                                </div>
                            </div>

                            <div className="col-span-1 flex justify-start items-center h-full">
                                <div className="tile px-4 py-8   bg-transparent">
                                     
                                </div>
                            </div>

                        </div>


                </div>

            </div>


            <div className="w-full bg-col1 py-8 lg:py-20 px-8 lg:px-36">
                
                <h1 className="text-xl lg:text-5xl lg:w-3/5 text-white  font-bold tracking-wide mb-6 lg:mb-12 line-hh">You wanted something more right? So here is the offer. With this book you get</h1>

                <div className="lg:grid lg:grid-cols-2 gap-10">
                    <div className="col-span-1 mt-8">
                        <ul className="p-0 m-0 text-lg lg:text-2xl text-white">
                            <li className="border-2 border-col4 px-3 py-3 tilt-r  lg:px-6 lg:py-6 mb-8 lg:mb-16"><p className="tilt-l">500 off on upcoming seminar </p> </li>
                            <li className="border-2 border-col4 px-3 py-3 tilt-r  lg:px-6 lg:py-6 mb-8 lg:mb-16"><p className="tilt-l">1 month stock research </p> </li>
                            <li className="border-2 border-col4 px-3 py-3 tilt-r  lg:px-6 lg:py-6 "><p className="tilt-l">Added to Whatsapp group </p></li>
                        </ul>
                    </div>

                    <div className="col-span-1 flex justify-center items-center">
                        <img src="https://pixner.net/spovest/light/assets/images/play/illustration.png" alt="img3"></img>
                    </div>

                </div>

            </div>






        </div>
    )
}

export default Main
