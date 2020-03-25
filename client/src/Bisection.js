import React, { useState, useEffect, useRef } from 'react';
import 'antd/dist/antd.css';
import { Button, Table, Layout, Input, InputNumber } from 'antd';
import { CalculatorOutlined, DatabaseOutlined } from '@ant-design/icons';
import axios from 'axios';
import d3 from "d3"
const functionPlot = require("function-plot");
const { Content } = Layout;
const { parse } = require("mathjs");
const { Column } = Table;
window.d3 = d3;

function Bisection() {

  let [xl, setxl] = useState()
  let [xr, setxr] = useState()
  const [fx, setfx] = useState("x")
  const [data, setdata] = useState();
  const temp = []
  const [x, setx] = useState(0)
  const chart = useRef(null);

  const [XL_BISECTION, setXL] = useState(0)
  const [XR_BISECTION, setXR] = useState(0)
  const [FX_BISECTION, setFX] = useState("")
  

 
  useEffect(() => {
    axios.get("http://localhost:4000/api/users/showbisection").then(res => {
      setFX(res.data.data[0].FX_BISECTION)
      setXL(res.data.data[0].XL_BISECTION)
      setXR(res.data.data[0].XR_BISECTION)
    })
  }, [])

  useEffect(() => {
    functionPlot({
      target: chart.current,
      width: 700 ,
      height: 600,
      yAxis: { domain: [-1, 9] },
      tip: {
        renderer: function () { }
      },
      grid: false,
      data: [
        {
          fn: fx
        }
      ],
      annotations: [{
        x: x,
      }]
    });
  });
  const codebisection = () => {
    const f = (fx, value) => parse(fx).evaluate({ x: value })
    const e = (xm, xm0) => Math.abs((xm - xm0) / xm)
    const fxm = (xl, xr) => (xl + xr) / 2
    var xm
    var xm0
    var i = 0
    while (i <= 1 || e(xm, xm0) > 0.000001) {
      xm0 = xm
      xm = fxm(xl, xr)
      if (f(fx, xm) * f(fx, xl) > 0) {
        xl = xm
      }
      else {
        xr = xm
      }
      temp.push({
        i: i,
        xm: xm.toFixed(6),
        fxm: f(fx, xm).toFixed(6),
        error: e(xm, xm0).toFixed(6)
      });
      i++;
    }
    setx(xm.toFixed(6))
    setdata(temp)
  }

  return (
    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, }} >
      <p>Bisection</p>
      <p>
        fx
   <Input fx onChange={event => setfx(event.target.value)}
          style={{ width: "200px" }} /></p>
      <p>XL<InputNumber XL onChange={value => setxl(value)} /></p>
      <p>XR<InputNumber XR onChange={value => setxr(value)} /></p>
      <Button onClick={codebisection} ><CalculatorOutlined />Calculator</Button>
      <button onClick={() => {
        setfx(FX_BISECTION)
        setxl(XL_BISECTION)
        setxr(XR_BISECTION)
      }}><DatabaseOutlined />FX : {FX_BISECTION} <br /> XL : {XL_BISECTION} <br /> XR : {XR_BISECTION} </button>
      <Table style={{ marginTop: 15 }} dataSource={data}>
        <Column title="Iterations" dataIndex="i" key="i" />
        <Column title="X" dataIndex="xm" key="xm" />
        <Column title="Y" dataIndex="fxm" key="fxm" />
        <Column title="Error" dataIndex="error" key="error" />
      </Table>
      <div ref={chart}></div>
    </Content>
  );
}

export default Bisection;