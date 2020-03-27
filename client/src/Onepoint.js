import React, { useState, useEffect, useRef } from 'react';
import 'antd/dist/antd.css';
import { Button, Table } from 'antd';
import { CalculatorOutlined, DatabaseOutlined } from '@ant-design/icons';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';
import { Layout, Input, InputNumber } from 'antd';
import axios from 'axios'

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

  useEffect(() => {
    axios.get("http://localhost:4000/api/users/showonepoint").then(res => {
      setFX(res.data.data[0].FX_ONEPOINT)
      setX0(res.data.data[0].X0_ONEPOINT)
    })
  },
    [])

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
      <LineChart
      width={950}
      height={400}
      data={data}
      margin={{ top: 30, bottom: 10 }}
      style={{ backgroundColor: "#fff" }}
>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="fx0" />
      <YAxis
        type="number"
        dataKey="x0"
        domain={["auto", "auto"]}
        allowDataOverflow="true"
      />
      <Tooltip />
      <Legend />
      <Line type="linear" dataKey="x0" stroke="#8884d8" />
    </LineChart>
    </Content>
  )
}

export default Onepoint;