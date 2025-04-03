
export default function Home() {
  return (
      <div className="w-full h-full bg-background dark:bg-dark-background flex justify-center">
          <div className="w-main-width h-main-height  flex flex-col items-center">
              <img src="/imgs/eth.webp" className="w-main-width" alt=""/>
              <div className="h-main-height flex flex-col justify-center items-center">
                  <p className="text-3xl font-bold">A STORY ABOUT <strong className="text-rose-600">VINCENS</strong></p>
              </div>
          </div>
      </div>
  );
}
