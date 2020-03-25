/*import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Table, Icon } from 'antd';
import { Layout, Input, InputNumber } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { CalculatorOutlined, DatabaseOutlined } from '@ant-design/icons';
const { Content } = Layout;
const { Column } = Table;
const temp = []
const { create, all, parse } = require('mathjs')
const mathjs = create(all)
const mathInt = (require('mathjs-simple-integral'));
mathjs.import(mathInt)

function CTR() {
  let [a, seta] = useState(0)
  let [b, setb] = useState(0)
  let [n, setn] = useState(0)
  const [fx, setfx] = useState("")
  const [data, setdata] = useState();
  var i = 0
  const Compositetrapecode = () => {
    var h = (b - a) / n
    var ans = 0
    var i = 0
    var sum = 0
    var X
    var z
    var zz
    const inf = mathjs.integral(fx, 'x');
    const f2 = inf.toString()
    var ans = parse(f2).evaluate({ x: b }) - parse(f2).evaluate({ x: a })
    const f = (fx, value) => parse(fx).evaluate({ x: value })
    const e = (real, ans) => Math.abs((real - ans) / real)
    for (i = 0; i < n; i++) {
      if (i == 0 || i == n) {
        z[i] = x
        zz[i] = f(fx, x)
        console.log(f(fx, x))
        ans += f(fx, x)
      }
      {
        z[i] = x
        zz[i] = f(fx, x)
        console.log(f(fx, x))
        ans += 2 * f(fx, x)
      }
      temp.push = ({
        x: z[i],
        y: zz[i]
      });
      x += h
    }
    ans *= h / 2
    console.log(ans)
    console.log("REAL", real.toFixed(6))
    setdata(ans)
    console.log(e(real, ans))
    setdata1(temp)
  }
  return (
    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, }} >
      <p>Trapezoidal</p>
      <p>
        fx
   <Input fx onChange={event => setfx(event.target.value)}
          style={{ width: "200px" }} /></p>
      <p>A<InputNumber a onChange={value => seta(value)} /></p>
      <p>B<InputNumber b onChange={value => setb(value)} /></p>
      <p>B<InputNumber n onChange={value => setn(value)} /></p>
      <Button onClick={Compositetrapecode} ><CalculatorOutlined />Calculator</Button>
      <Table style={{ marginTop: 15 }} dataSource={data}>
        <Column title="x" dataIndex="x" key="x" />
        <Column title="y" dataIndex="y" key="y" />
      </Table>
    </Content>
  )
}
export default CTR;*/


