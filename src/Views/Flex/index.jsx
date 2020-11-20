import "./index.css";
function FlexDemo() {
  return (
    <div>
      <h1>Web的Flex弹性盒模型</h1>
      <section className="content">
        <h3>[ flex ]</h3>
        <div className="boxes">
          <div className="box">
            <div className="boxstyle">
              <b>display: -webkit-flex;</b>
            </div>
            <div className="demo demo1">
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
              <div className="item" style={{ flex: 2 }}>
                flex: 2;
              </div>
              <div className="item" style={{ flex: 1 }}>
                flex: 1;
              </div>
            </div>
          </div>

          <div className="box">
            <div className="boxstyle">
              <b>display: -webkit-flex; </b>
            </div>
            <div className="demo demo2 boxborder">
              <div className="item" style={{ marginRight: "10px" }}>
                <span>width:150px;</span> <span>marginRight:10px;</span>
              </div>
              <div className="item" style={{ flex: 1 }}>
                flex: 1;
              </div>
              <div className="item" style={{ marginLeft: "10px" }}>
                <span>width:150px;</span> <span>marginLeft:10px;</span>
              </div>
            </div>
          </div>
        </div>

        <h3>[ flex-direction ]</h3>
        <div className="boxes" style={{ width: "900px" }}>
          <div className="box">
            <div className="boxstyle">
              <b>flex-direction: row;</b>
              <b>display: -webkit-flex;</b>
            </div>
            <div className="demo demo-row">
              <div className="item" style={{ flex: 1 }}>
                flex: 1;
              </div>
              <div className="item" style={{ flex: 2 }}>
                flex: 2;
              </div>
              <div className="item" style={{ flex: 3 }}>
                flex: 3;
              </div>
            </div>
          </div>

          <div className="box">
            <div className="boxstyle">
              <b>flex-direction: row-reverse;</b>
              <b>display: -webkit-flex; </b>
            </div>
            <div className="demo demo-row-reverse">
              <div className="item" style={{ flex: 1 }}>
                flex: 1;
              </div>
              <div className="item" style={{ flex: 2 }}>
                flex: 2;
              </div>
              <div className="item" style={{ flex: 3 }}>
                flex: 3;
              </div>
            </div>
          </div>

          <div className="box">
            <div className="boxstyle">
              <b>flex-direction: column;</b>
              <b>display: -webkit-flex; </b>
            </div>
            <div className="demo demo-column">
              <div className="item" style={{ flex: 1 }}>
                flex: 1;
              </div>
              <div className="item" style={{ flex: 2 }}>
                flex: 2;
              </div>
              <div className="item" style={{ flex: 3 }}>
                flex: 3;
              </div>
            </div>
          </div>

          <div className="box">
            <div className="boxstyle">
              <b>flex-direction: column-reverse;</b>
              <b>display: -webkit-flex; </b>
            </div>
            <div className="demo demo-column-reverse">
              <div className="item" style={{ flex: 1 }}>
                flex: 1;
              </div>
              <div className="item" style={{ flex: 2 }}>
                flex: 2;
              </div>
              <div className="item" style={{ flex: 3 }}>
                flex: 3;
              </div>
            </div>
          </div>
        </div>

        <h3>[ flex-wrap ]</h3>
        <div className="boxes" style={{ width: "1310px" }}>
          <div className="box">
            <div className="boxstyle">
              <b>-webkit-flex-wrap: nowrap;</b>
              <b>display: -webkit-flex; </b>
              <b>width: 400px</b>
            </div>
            <div className="demo demo-nowrap">
              <div className="item" style={{ width: "100px" }}>
                100px;
              </div>
              <div className="item" style={{ width: "200px" }}>
                width: 200px;
              </div>
              <div className="item" style={{ width: "300px" }}>
                width: 300px;
              </div>
            </div>
          </div>
          <div className="box">
            <div className="boxstyle">
              <b>-webkit-flex-wrap: wrap</b>
              <b>display: -webkit-flex; </b>
              <b>width: 400px</b>
            </div>
            <div className="demo demo-wrap boxborder">
              <div className="item" style={{ width: "100px" }}>
                100px;
              </div>
              <div className="item" style={{ width: "200px" }}>
                width: 200px;
              </div>
              <div className="item" style={{ width: "300px" }}>
                width: 300px;
              </div>
            </div>
          </div>
          <div className="box">
            <div className="boxstyle">
              <b>-webkit-flex-wrap: wrap-reverse</b>
              <b>display: -webkit-flex; </b>
              <b>width: 400px</b>
            </div>
            <div className="demo demo-wrap-reverse boxborder">
              <div className="item" style={{ width: "100px" }}>
                100px;
              </div>
              <div className="item" style={{ width: "200px" }}>
                width: 200px;
              </div>
              <div className="item" style={{ width: "300px" }}>
                width: 300px;
              </div>
            </div>
          </div>
        </div>

        <h3>[ flex-flow ]: flex-direction flex-wrap; /* 自个体会吧 */</h3>

        <h3>[ justify-content ]</h3>
        <div className="boxes" style={{ width: "1310px" }}>
          <div className="box">
            <div className="boxstyle">
              <b>效果如同 float:left;</b>
              <b>justify-content: flex-start;</b>
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo boxborder"
              style={{ justifyContent: "flex-start" }}
            >
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
            </div>
          </div>

          <div className="box">
            <div className="boxstyle">
              <b>
                <b>效果如同 float:right;</b>
              </b>
              <b>justify-content: flex-end;</b>
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo demo-justify boxborder"
              style={{ justifyContent: "flex-end" }}
            >
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
            </div>
          </div>

          <div className="box">
            <div className="boxstyle">
              <b>第三代水平居中方案</b>
              <b>justify-content: center;</b>
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo demo-justify-end boxborder"
              style={{ justifyContent: "center" }}
            >
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
            </div>
          </div>

          <div className="box">
            <div className="boxstyle">
              <b>justify-content: space-between; </b>
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo demo-justify boxborder"
              style={{ justifyContent: "space-between" }}
            >
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
            </div>
          </div>

          <div className="box">
            <div className="boxstyle">
              <b>justify-content: space-around; </b>
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo demo-justify-end boxborder"
              style={{ justifyContent: "space-around" }}
            >
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
            </div>
          </div>
        </div>

        <h3>[ align-self ]</h3>
        <div className="boxes">
          <div className="box" style={{ width: "1000px" }}>
            <div className="boxstyle">
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo boxborder"
              style={{ width: "1000px", height: "200px" }}
            >
              <div
                className="item"
                style={{ width: "200px", alignSelf: "flex-start" }}
              >
                align-self:flex-start;
              </div>
              <div
                className="item"
                style={{ width: "200px", alignSelf: "flex-end" }}
              >
                align-self:flex-end;
              </div>
              <div
                className="item"
                style={{ width: "200px", alignSelf: "center" }}
              >
                align-self:center;
              </div>
              <div
                className="item"
                style={{ width: "200px", alignSelf: "auto" }}
              >
                <span>align-self:auto;</span>
              </div>

              <div
                className="item"
                style={{ width: "200px", alignSelf: "baseline" }}
              >
                align-self:baseline;
              </div>
              <div
                className="item"
                style={{ width: "200px", alignSelf: "stretch" }}
              >
                align-self:stretch;
              </div>
            </div>
          </div>
        </div>

        <h3>[ align-items ]</h3>
        <div className="boxes">
          <div className="box">
            <div className="boxstyle">
              <b>align-items: flex-start;</b>
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo boxborder"
              style={{ alignItems: "flex-start", height: "200px" }}
            >
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
            </div>
          </div>

          <div className="box">
            <div className="boxstyle">
              <b>align-items: flex-end; </b>
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo boxborder"
              style={{ alignItems: "flex-end", height: "200px" }}
            >
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
            </div>
          </div>

          <div className="box">
            <div className="boxstyle">
              <b>第三代垂直居中</b>
              <b>align-items: center; </b>
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo boxborder"
              style={{ alignItems: "center", height: "200px" }}
            >
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
            </div>
          </div>

          <div className="box">
            <div className="boxstyle">
              <b>align-items: baseline; </b>
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo boxborder"
              style={{ alignItems: "baseline", height: "200px" }}
            >
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
              <div className="item" style={{ width: "100px" }}>
                width:100px;
              </div>
            </div>
          </div>

          <div className="box">
            <div className="boxstyle">
              <b>align-items: stretch; </b>
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo boxborder"
              style={{ alignItems: "stretch", height: "200px" }}
            >
              <div className="item" style={{ width: "100px", height: "100px" }}>
                height:100px;
              </div>
              <div
                className="item"
                style={{ width: "150px", minHeight: "20px" }}
              >
                min-height:20px;
              </div>
              <div
                className="item"
                style={{ width: "150px", maxHeight: "60px" }}
              >
                max-height:60px;
              </div>
            </div>
          </div>
        </div>

        <h3>[ align-content ]</h3>
        <div className="boxes">
          <div className="box">
            <div className="boxstyle">
              <b>align-items: flex-start</b>
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo demo-align-content"
              style={{ alignItems: "flex-start" }}
            >
              <div className="item">a</div>
              <div className="item">b</div>
              <div className="item">c</div>
              <div className="item">d</div>
              <div className="item">e</div>
              <div className="item">f</div>
            </div>
          </div>

          <div className="box">
            <div className="boxstyle">
              <b>align-content: flex-start; </b>
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo demo-align-content"
              style={{ alignContent: "flex-start" }}
            >
              <div className="item">a</div>
              <div className="item">b</div>
              <div className="item">c</div>
              <div className="item">d</div>
              <div className="item">e</div>
              <div className="item">f</div>
            </div>
          </div>

          <div className="box">
            <div className="boxstyle">
              <b>align-content: flex-end; </b>
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo demo-align-content"
              style={{ alignContent: "flex-end" }}
            >
              <div className="item">a</div>
              <div className="item">b</div>
              <div className="item">c</div>
              <div className="item">d</div>
              <div className="item">e</div>
              <div className="item">f</div>
            </div>
          </div>
          <div className="box">
            <div className="boxstyle">
              <b>align-content: center; </b>
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo demo-align-content"
              style={{ alignContent: "center" }}
            >
              <div className="item">a</div>
              <div className="item">b</div>
              <div className="item">c</div>
              <div className="item">d</div>
              <div className="item">e</div>
              <div className="item">f</div>
            </div>
          </div>
          <div className="box">
            <div className="boxstyle">
              <b>align-content: space-between; </b>
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo demo-align-content"
              style={{ alignContent: "space-between" }}
            >
              <div className="item">a</div>
              <div className="item">b</div>
              <div className="item">c</div>
              <div className="item">d</div>
              <div className="item">e</div>
              <div className="item">f</div>
            </div>
          </div>
          <div className="box">
            <div className="boxstyle">
              <b>align-content: space-around; </b>
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo demo-align-content"
              style={{ alignContent: "space-around" }}
            >
              <div className="item">a</div>
              <div className="item">b</div>
              <div className="item">c</div>
              <div className="item">d</div>
              <div className="item">e</div>
              <div className="item">f</div>
            </div>
          </div>

          <div className="box">
            <div className="boxstyle">
              <b>align-content: stretch;</b>
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo demo-align-content"
              style={{ alignContent: "stretch" }}
            >
              <div className="item">a</div>
              <div className="item">b</div>
              <div className="item">c</div>
              <div className="item">d</div>
              <div className="item">e</div>
              <div className="item">f</div>
            </div>
          </div>
        </div>

        <h3>[ order ]</h3>
        <div className="boxes">
          <div className="box" style={{ width: "1000px" }}>
            <div className="boxstyle">
              <b>display: -webkit-flex;</b>
            </div>
            <div
              className="demo demo-align-content"
              style={{ width: "1000px", height: "40px" }}
            >
              <div className="item">a</div>
              <div className="item">b</div>
              <div className="item">c</div>
              <div className="item" style={{ order: "-1", width: "120px" }}>
                d (order:-1)
              </div>
              <div className="item">e</div>
              <div className="item">f</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FlexDemo;
