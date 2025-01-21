import { useState } from "react";
import Header from "./components/header.jsx";
import "./App.css";

function Categories() {
  const galeria = [
    {
      imageSRC: "/img/breakFast.png",
      title: "BreakFast",
      style: {
        background: "linear-gradient(to bottom, #faffb3, #fffdbb, #fffe7a, #eaff78)",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      imageSRC: "/img/vegan.png",
      title: "Vegan",
      style: {
        background: "linear-gradient(to bottom, #b3ffb5, #baffc1, #7aff96, #78e86d)",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      imageSRC: "/img/meat.png",
      title: "Meat",
      style: {
        background: "linear-gradient(to bottom, #ffb3b3, #ffc1c1, #ff7a7a, #e87878)",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      imageSRC: "/img/dessert.png",
      title: "Dessert",
      style: {
        background: "linear-gradient(to bottom, #ffb3ff, #ffc1ff, #ff7aff, #e878e8)",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      imageSRC: "/img/lunch.png",
      title: "Lunch",
      style: {
        background: "linear-gradient(to bottom, #b3e1ff, #c1e8ff, #7abfff, #78a9e8)",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      imageSRC: "/img/chocolate.png",
      title: "Chocolate",
      style: {
        background: "linear-gradient(to bottom, #d2b48c, #e0c29b, #c89b6a, #b28550)",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  ];
  

  return (
    <div className="w-full">
      {/*Categories NAV*/}
      <div className="p-4 flex justify-between">
        <h3 className="text-black text-2xl">Categories</h3>
        <div className="bg-blue-100 rounded rounded-2xl py-2 px-4 text-sm text-black font-bold">
          View All Categories
        </div>
      </div>

      {/*Galeria de imagenes*/}
      <div className="flex flex-wrap gap-2 justify-evenly">
        {galeria.map((dataUnidad, index) => {
          return (
            <div style={dataUnidad.style} className="w-1/3 p-8 flex flex-col">
              <img className="h-full w-full object-contain flex justify-center items-center" src={`${dataUnidad.imageSRC}`}></img>
              <span className="mt-3 text-sm font-bold text-black">{dataUnidad.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="h-full overflow-auto">
      <Header></Header>

      {/*Contenido Home*/}
      <div
        className="flex flex-col relative rounded rounded-[35px] mt-4 mx-6
      mb-40 overflow-hidden
      "
      >
        {/*Left home*/}
        <div className="w-full bg-blue-100 p-4 ">
          <div className="flex justify-between w-max mb-4 bg-white p-2 gap-4 rounded-full">
            <span className="flex h-5 w-5">
              <img
                src="/svg/mesaIconHome.png"
                className="w-full h-full rounded rounded-full"
              ></img>
            </span>
            <span className="text-sm text-gray-500 text-bold">Hot Recipes</span>
          </div>

          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="font-bold text-4xl">Spicy delicious</h1>
            <span className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </span>
            <div className="flex gap-2 jusitfy-between ">
              <div className="flex justify-between gap-4 bg-gray-100 py-2 px-4 items-center rounded-full">
                <span className="w-10 h-10 block">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.93533 2.06761H14.4677C14.668 2.06761 14.8602 1.98524 15.0018 1.83863C15.1435 1.69201 15.2231 1.49316 15.2231 1.28582C15.2231 1.07847 15.1435 0.879623 15.0018 0.733009C14.8602 0.586395 14.668 0.504028 14.4677 0.504028H9.93533C9.73498 0.504028 9.54285 0.586395 9.40118 0.733009C9.25952 0.879623 9.17993 1.07847 9.17993 1.28582C9.17993 1.49316 9.25952 1.69201 9.40118 1.83863C9.54285 1.98524 9.73498 2.06761 9.93533 2.06761Z"
                      fill="black"
                    />
                    <path
                      d="M12.2017 3.63098C10.4089 3.63098 8.6563 4.1812 7.16561 5.21205C5.67492 6.24289 4.51307 7.70808 3.82698 9.42232C3.14089 11.1366 2.96138 13.0229 3.31114 14.8427C3.66091 16.6625 4.52424 18.3341 5.79197 19.6462C7.0597 20.9582 8.67488 21.8517 10.4333 22.2137C12.1917 22.5757 14.0143 22.3899 15.6706 21.6798C17.327 20.9697 18.7427 19.7673 19.7388 18.2245C20.7348 16.6818 21.2665 14.8679 21.2665 13.0125C21.2637 10.5252 20.3078 8.14062 18.6085 6.38186C16.9091 4.6231 14.605 3.63379 12.2017 3.63098ZM16.4749 9.69558L12.7359 13.5653C12.6658 13.6379 12.5825 13.6954 12.4908 13.7347C12.3992 13.774 12.301 13.7943 12.2017 13.7943C12.1025 13.7943 12.0043 13.7741 11.9127 13.7348C11.821 13.6955 11.7377 13.6379 11.6676 13.5653C11.5974 13.4927 11.5418 13.4065 11.5038 13.3117C11.4658 13.2168 11.4463 13.1152 11.4463 13.0125C11.4463 12.9098 11.4658 12.8082 11.5038 12.7133C11.5418 12.6184 11.5974 12.5323 11.6675 12.4597L15.4066 8.58998C15.4767 8.51738 15.56 8.4598 15.6516 8.42051C15.7433 8.38121 15.8415 8.36099 15.9407 8.36099C16.0399 8.36099 16.1381 8.3812 16.2298 8.42049C16.3214 8.45978 16.4047 8.51736 16.4749 8.58996C16.545 8.66255 16.6007 8.74873 16.6386 8.84358C16.6766 8.93843 16.6961 9.04009 16.6961 9.14276C16.6961 9.24543 16.6766 9.34709 16.6386 9.44194C16.6007 9.53679 16.545 9.62298 16.4749 9.69558H16.4749Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <span>30 min</span>
              </div>

              <div
                className="flex justify-between gap-4 
              items-center
              bg-gray-100 py-2 px-4 rounded-full"
              >
                <span>
                  <svg
                    width="34"
                    height="26"
                    viewBox="0 0 34 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3512 8.30081C17.3507 8.28669 17.35 8.27256 17.3484 8.25834C17.3468 8.24407 17.3445 8.23 17.342 8.21597C17.3406 8.20871 17.3402 8.20151 17.3387 8.19421L16.3114 3.50315C16.2893 3.40182 16.2411 3.3048 16.1697 3.21763C16.0984 3.13046 16.0051 3.05486 15.8953 2.99513C15.7855 2.9354 15.6613 2.89273 15.5298 2.86954C15.3983 2.84636 15.2621 2.84312 15.129 2.86001C14.9959 2.8769 14.8684 2.91358 14.7539 2.96798C14.6395 3.02237 14.5402 3.09339 14.4618 3.177C14.3834 3.2606 14.3274 3.35514 14.297 3.45522C14.2666 3.5553 14.2624 3.65896 14.2847 3.76027L15.1126 7.54092H12.7298V3.63171C12.7298 3.42435 12.6215 3.22549 12.4289 3.07886C12.2362 2.93224 11.9749 2.84987 11.7025 2.84987C11.43 2.84987 11.1687 2.93224 10.976 3.07886C10.7834 3.22549 10.6751 3.42435 10.6751 3.63171V7.54092H8.29228L9.1202 3.76027C9.14247 3.65896 9.1383 3.5553 9.10793 3.45522C9.07755 3.35514 9.02155 3.2606 8.94315 3.177C8.86474 3.09339 8.76545 3.02237 8.65096 2.96798C8.53647 2.91358 8.40902 2.8769 8.2759 2.86001C8.14277 2.84312 8.00657 2.84636 7.87509 2.86954C7.74361 2.89273 7.61942 2.9354 7.50962 2.99513C7.39982 3.05486 7.30656 3.13046 7.23516 3.21763C7.16377 3.3048 7.11565 3.40182 7.09354 3.50315L6.06623 8.19421C6.06466 8.20151 6.06429 8.20871 6.06291 8.21597C6.0604 8.23 6.05808 8.24407 6.05651 8.25834C6.05494 8.27256 6.05425 8.28669 6.05368 8.30081C6.05344 8.30816 6.05225 8.31537 6.05225 8.32277C6.05225 8.32973 6.05287 8.33656 6.05294 8.34347C6.05312 8.3483 6.05312 8.35307 6.05344 8.35784C6.06584 9.35605 6.53357 10.32 7.37662 11.0847C8.21966 11.8495 9.38565 12.3676 10.6751 12.5504V22.3959C10.6751 22.6033 10.7834 22.8022 10.976 22.9488C11.1687 23.0954 11.43 23.1778 11.7025 23.1778C11.9749 23.1778 12.2362 23.0954 12.4289 22.9488C12.6215 22.8022 12.7298 22.6033 12.7298 22.3959V12.5504C14.0193 12.3676 15.1852 11.8495 16.0283 11.0847C16.8713 10.32 17.3391 9.35605 17.3515 8.35784C17.3518 8.35307 17.3518 8.3483 17.352 8.34347C17.352 8.33656 17.3527 8.32973 17.3527 8.32277C17.3527 8.31537 17.3515 8.30816 17.3512 8.30081Z"
                      fill="black"
                    />
                    <path
                      d="M28.1386 3.61786C28.1383 3.60173 28.1371 3.5856 28.1354 3.56942C28.1343 3.55845 28.133 3.54757 28.1312 3.53673C28.129 3.52323 28.1263 3.50972 28.1231 3.49622C28.12 3.48262 28.1165 3.46916 28.1125 3.45585C28.1093 3.44526 28.1056 3.43471 28.1018 3.42416C28.0961 3.40846 28.0899 3.393 28.083 3.37773C28.081 3.37334 28.0798 3.3689 28.0777 3.36451C28.0754 3.35979 28.0725 3.3554 28.0701 3.35072C28.0623 3.3354 28.0539 3.32036 28.045 3.30558C28.0392 3.29594 28.0332 3.28642 28.0269 3.27704C28.0185 3.26444 28.0096 3.25205 28.0002 3.23987C27.9919 3.22894 27.9835 3.2182 27.9746 3.20766C27.9661 3.19773 27.9573 3.18809 27.9482 3.17845C27.9374 3.16681 27.9264 3.1554 27.9147 3.14433C27.9062 3.13617 27.8973 3.1283 27.8884 3.12043C27.8755 3.10916 27.8625 3.09804 27.8489 3.0874C27.8393 3.07996 27.8294 3.0728 27.8195 3.06564C27.8058 3.05572 27.7921 3.04598 27.7777 3.03668C27.7662 3.02918 27.7542 3.02212 27.7422 3.01501C27.7288 3.00709 27.7153 2.99922 27.7014 2.99177C27.6872 2.98418 27.6725 2.97708 27.6577 2.97006C27.6453 2.9641 27.6328 2.95808 27.6199 2.95255C27.6032 2.94529 27.5861 2.93861 27.5688 2.93208C27.5569 2.92759 27.5451 2.9231 27.533 2.91895C27.5148 2.91275 27.4964 2.90712 27.4776 2.90168C27.4652 2.8981 27.4528 2.89452 27.4402 2.89127C27.4222 2.88665 27.404 2.88259 27.3856 2.87872C27.3709 2.87562 27.3563 2.87271 27.3415 2.87009C27.3252 2.86727 27.3087 2.86484 27.2922 2.86259C27.2741 2.86011 27.2561 2.85801 27.2379 2.8563C27.2239 2.85501 27.2099 2.85396 27.1957 2.85305C27.1747 2.85176 27.1536 2.85095 27.1323 2.85062C27.1255 2.85052 27.119 2.84985 27.1122 2.84985C27.106 2.84985 27.0999 2.85047 27.0938 2.85057C27.0727 2.85086 27.0517 2.85171 27.0305 2.853C27.0161 2.85386 27.0017 2.85486 26.9874 2.8562C26.9697 2.85787 26.952 2.85997 26.9342 2.86236C26.9164 2.86474 26.8987 2.86737 26.8812 2.87047C26.8673 2.8729 26.8534 2.87567 26.8395 2.87858C26.8189 2.88287 26.7986 2.8876 26.7785 2.8929C26.7728 2.89438 26.7669 2.89533 26.7612 2.8969C26.7485 2.90043 26.736 2.90463 26.7234 2.90821C26.7187 2.90969 26.7138 2.91098 26.709 2.91251C24.0624 3.66949 21.943 6.14047 20.4094 10.2597C19.7137 12.1605 19.209 14.0988 18.8996 16.0579C18.8843 16.1669 18.8993 16.2772 18.9436 16.3816C18.9879 16.486 19.0606 16.5821 19.157 16.6637C19.2533 16.7453 19.3711 16.8106 19.5028 16.8552C19.6344 16.8999 19.7769 16.923 19.9211 16.923H26.0849V22.3959C26.0849 22.6033 26.1932 22.8022 26.3858 22.9488C26.5785 23.0954 26.8398 23.1778 27.1122 23.1778C27.3847 23.1778 27.646 23.0954 27.8387 22.9488C28.0313 22.8022 28.1395 22.6033 28.1395 22.3959V3.6317C28.1395 3.62702 28.1387 3.62253 28.1386 3.61786Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <span>chicken</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-12">
            {/*User */}
            <div className="flex items-center">
              <span className="block w-8 h-8 rounded-fulll overflow-hidden">
                <img src="/img/user.png"></img>
              </span>

              <div className="flex flex-col ml-2">
                <span className="font-bold text-sm text-black">Jhon Smith</span>
                <span className="text-xs text-gray-600">15 March 2025</span>
              </div>
            </div>

            {/*Button view recipes */}
            <div
              className="text-white flex
          bg-black rounded-full w-[70%]
          justify-between gap-4 items-center p-4"
            >
              <span className="text-sm">View all recipes</span>
              <span className="w-6 h-6">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4522 2.22913C9.68333 2.22913 7.95416 2.7956 6.48338 3.85693C5.0126 4.91825 3.86627 6.42674 3.18935 8.19166C2.51242 9.95657 2.33531 11.8986 2.6804 13.7723C3.02549 15.6459 3.8773 17.3669 5.12809 18.7177C6.37889 20.0685 7.9725 20.9884 9.7074 21.3611C11.4423 21.7338 13.2406 21.5425 14.8748 20.8115C16.5091 20.0804 17.9059 18.8424 18.8886 17.2541C19.8714 15.6657 20.3959 13.7982 20.3959 11.8879C20.3932 9.32716 19.45 6.87212 17.7733 5.06139C16.0967 3.25066 13.8234 2.23209 11.4522 2.22913ZM14.5857 12.5061L10.4579 15.478C10.3543 15.5528 10.2339 15.5957 10.1094 15.6022C9.98503 15.6088 9.8613 15.5787 9.75147 15.5153C9.64165 15.4518 9.54985 15.3573 9.48588 15.2418C9.42192 15.1264 9.38819 14.9944 9.3883 14.8599V8.91598C9.38819 8.78146 9.42192 8.64942 9.48588 8.53399C9.54985 8.41855 9.64165 8.32405 9.75147 8.26057C9.8613 8.1971 9.98503 8.16703 10.1094 8.17359C10.2339 8.18014 10.3543 8.22307 10.4579 8.2978L14.5857 11.2697C14.68 11.3376 14.7572 11.4295 14.8107 11.5373C14.8641 11.6452 14.8921 11.7656 14.8921 11.8879C14.8921 12.0102 14.8641 12.1307 14.8107 12.2385C14.7572 12.3463 14.68 12.4383 14.5857 12.5061Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/*Icono pulgar*/}
        <div
          className="hidden
        md:block md:absolute top-7 left-0 right-0 m-auto  w-20 h-20"
        >
          <img
            src="/svg/pulgarIconHome.png"
            className="w-full h-full rounded rounded-full"
          ></img>
        </div>

        {/*Right home */}
        <div className="w-full bg-red-100">
          <img
            src="/img/imageHome.png"
            className="w-full h-[43%] object-cover"
          ></img>
        </div>
      </div>

      <Categories></Categories>
    </div>
  );
}

export default App;
