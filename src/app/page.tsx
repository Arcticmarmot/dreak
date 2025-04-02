
export default function Home() {
  return (
      <div className="w-full h-full bg-background dark:bg-dark-background flex justify-center">
          <div className="w-main-width h-main-height  flex flex-col items-center">
              <img src="/imgs/eth.webp" className="w-main-width" alt=""/>
              <div className="h-main-height flex flex-col justify-center items-center">
                  <p className="text-3xl font-bold">THIS IS A STORY ABOUT <strong className="text-rose-600">VINCENS</strong></p>
                  <p className="text-xl mt-10">欢迎来到我的世界</p>
              </div>
          </div>
      </div>
  );
}
