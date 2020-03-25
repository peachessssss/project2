import React, { useState, useEffect, useRef } from 'react';
import 'antd/dist/antd.css';
import { Button, Table } from 'antd';
import { CalculatorOutlined, DatabaseOutlined } from '@ant-design/icons';
import { Layout, Input, InputNumber } from 'antd';
import d3 from "d3"
import axios from 'axios'
window.d3 = d3;

const functionPlot = require("function-plot");
const { Content } = Layout;
const { parse } = require("mathjs");
const { Column } = Table;

function Onepoint() {

  let [x0, setx0] = useState(0)
  const [fx, setfx] = useState("x")
  const [data, setdata] = useState();
  const [x, setx] = useState(0)
  const temp = []
  const [FX_ONEPOINT, setFX] = useState("x")
  const [X0_ONEPOINT, setX0] = useState(0)
  const chart = useRef(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/users/showonepoint").then(res => {
      setFX(res.data.data[0].FX_ONEPOINT)
      setX0(res.data.data[0].X0_ONEPOINT)
    })
  },
    [])

  useEffect(() => {
    functionPlot({
      target: chart.current,
      yAxis: { domain: [-1, 9] },
      tip: {
        renderer: function () { }
      },
      grid: false,
      data: [
        {
          fn: fx.replace("e", Math.E),
          color: "black",
          graphType: 'polyline'
        }
      ],
      annotations: [{
        x: x
      }]
    });
  });

  const codeonepoint = () => {
    console.log("fx : " + fx)
    console.log("xr : " + x0)
    const f = (fx, value) => parse(fx).evaluate({ x: value })
    const e = (x, x0) => Math.abs((x - x0) / x)
    var x
    var i = 0
    while (i <= 1 || e(x, x0) > 0.000001) {
      if (i > 0) {
        x0 = x
      }
      x = f(fx, x0)
      temp.push({
        i: i,
        x0: x.toFixed(6),
        fx0: x0.toFixed(6),
        error: e(x, x0).toFixed(6)
      });
      i++
    }
    setx(x.toFixed(6))
    setdata(temp)
  }

  return (
    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, }} >
      <p>Onepoint</p>
      <p>
        fx
   <Input fx onChange={event => setfx(event.target.value)}
          style={{ width: "200px" }} /></p>
      <p>X0<InputNumber onChange={value => setx0(value)} /></p>
      <Button onClick={codeonepoint} ><CalculatorOutlined />Calculator</Button>
      <button onClick={() => {
        setfx(FX_ONEPOINT)
        setx0(X0_ONEPOINT)
      }}><DatabaseOutlined />FX : {FX_ONEPOINT} <br /> X0 : {X0_ONEPOINT} <br /> </button>
      <Table style={{ marginTop: 15 }} dataSource={data}>
        <Column title="Iterations" dataIndex="i" key="i" />
        <Column title="X" dataIndex="x0" key="x0" />
        <Column title="Y" dataIndex="fx0" key="fx0" />
        <Column title="Error" dataIndex="error" key="error" />
      </Table>
      <div ref={chart}></div>
    </Content>
  )
}

export default Onepoint;