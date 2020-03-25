import React, { useState, useEffect,useRef } from 'react';
import { Layout, Table, Button, Input, InputNumber } from 'antd';
import { CalculatorOutlined, DatabaseOutlined } from '@ant-design/icons';
import axios from 'axios';
import d3 from "d3"
const functionPlot = require("function-plot");
const { Content } = Layout;
const { parse } = require("mathjs");
const { Falsecolumn } = Table;
window.d3 = d3;

function False() {
  let [xl, setxl] = useState(0)
  let [xr, setxr] = useState(0)
  const [fx, setfx] = useState("x")
  const [data, setdata] = useState();
  const temp = []
  const [x, setx] = useState(0)
  const [XL_FALSE, setXL] = useState(0)
  const [XR_FALSE, setXR] = useState(0)
  const [FX_FALSE, setFX] = useState("")
  const chart = useRef(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/users/showfalse").then(res => {
      setFX(res.data.data[0].FX_FALSE)
      setXL(res.data.data[0].XL_FALSE)
      setXR(res.data.data[0].XR_FALSE)
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
  
  const codefalse = () => {
    console.log("fx : " + fx)
    console.log("xr : " + xl)
    console.log("xl : " + xr)
    const f = (fx, value) => parse(fx).evaluate({ x: value })
    const e = (xm, xm0) => Math.abs((xm - xm0) / xm)
    const fxm = (xl, xr) => ((xl * f(fx, xr)) - (xr * f(fx, xl))) / (f(fx, xr) - f(fx, xl))
    var xm = fxm(xl, xr)
    var xmo = xm
    var i = 0
    while (i <= 1 || e(xm, xmo) > 0.000001) {
      xmo = xm
      xm = fxm(xl, xr)
      if (f(fx, xm) * f(fx, xl) > 0) {
        xl = xm
      } else {
        xr = xm
      }
      temp.push({
        i1: i,
        xm1: xm.toFixed(6),
        fxm1: f(fx, xm).toFixed(6),
        error1: e(xm, xmo).toFixed(6)
      });
      i++
    }
    setx(xm.toFixed(6))
    setdata(temp)
  }

  return (
    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, }} >
      <p>Falseposition</p>
      <p>
        fx
   <Input fx onChange={event => setfx(event.target.value)}
          style={{ width: "200px" }} /></p>
      <p>XL<InputNumber XL onChange={value => setxl(value)} /></p>
      <p>XR<InputNumber XR onChange={value => setxr(value)} /></p>
      <Button onClick={codefalse} ><CalculatorOutlined />Calculator</Button>
      <button onClick={() => {
        setfx(FX_FALSE)
        setxl(XL_FALSE)
        setxr(XR_FALSE)
      }}><DatabaseOutlined />FX : {FX_FALSE} <br /> XL : {XL_FALSE} <br /> XR : {XR_FALSE} </button>
      <Table style={{ marginTop: 15 }} dataSource={data}>
        <Falsecolumn title="Iterations" dataIndex="i1" rowkey="i1" />
        <Falsecolumn title="X" dataIndex="xm1" rowkey="xm1" />
        <Falsecolumn title="Y" dataIndex="fxm1" rowkey="fxm1" />
        <Falsecolumn title="Error" dataIndex="error1" rowkey="error1" />
      </Table>
      <div ref={chart}></div>
    </Content>
  )
}

export default False;