// import "./Demo2.css";
const Demo2 = () => {
  return (
    <div className="flex-parent">
      <div className="input-flex-container">
        <div className="input">
          <span data-year="1910" data-info="headset"></span>
        </div>
        <div className="input">
          <span data-year="1920" data-info="jungle gym"></span>
        </div>
        <div className="input active">
          <span data-year="1930" data-info="chocolate chip cookie"></span>
        </div>
        <div className="input">
          <span data-year="1940" data-info="Jeep"></span>
        </div>
        <div className="input">
          <span data-year="1950" data-info="leaf blower"></span>
        </div>
        <div className="input">
          <span data-year="1960" data-info="magnetic stripe card"></span>
        </div>
        <div className="input">
          <span data-year="1970" data-info="wireless LAN"></span>
        </div>
        <div className="input">
          <span data-year="1980" data-info="flash memory"></span>
        </div>
        <div className="input">
          <span data-year="1990" data-info="World Wide Web"></span>
        </div>
        <div className="input">
          <span data-year="2000" data-info="Google AdWords"></span>
        </div>
      </div>
      <div className="description-flex-container">
        <p>And future Call of Duty players would thank them.</p>
        <p>Because every kid should get to be Tarzan for a day.</p>
        <p className="active">And the world rejoiced.</p>
        <p>Because building roads is inconvenient.</p>
        <p>Ain’t nobody got time to rake.</p>
        <p>Because paper currency is for noobs.</p>
        <p>Nobody likes cords. Nobody.</p>
        <p>Brighter than glow memory.</p>
        <p>To capitalize on an as-yet nascent market for cat photos.</p>
        <p>Because organic search rankings take work.</p>
      </div>
    </div>
  );
};
export default Demo2;
