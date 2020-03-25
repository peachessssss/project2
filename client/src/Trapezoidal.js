import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Table, Icon } from 'antd';
import { Layout, Input, InputNumber } from 'antd';
import { Card } from 'antd';
import { CalculatorOutlined, DatabaseOutlined } from '@ant-design/icons';
const { Content } = Layout;
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
    var i = a
    var io = i
    var j = 0
    var fc = []
    var Ical = []
    var Ireal = []
    const answer = (fc, X) => parse(fc).evaluate({ x: X })
    const e = (Ireal, Ical) => Math.abs((Ireal - Ical) / Ireal)
    const integralANS = mathjs.integral(fx, 'x')
    const tempfc = integralANS.toString()
    Ireal = mathjs.parse(tempfc).evaluate({ x: b }) - mathjs.parse(tempfc).evaluate({ x: a })
    for (j = 0; j <= n; j++) {
      fc.push((answer(fx, i)))
      if (i === a || i === b) {
        Ical = Ical + fx[j]
      }
      else {
        Ical = Ical + (2 * fx[j])
     }
}
      io = i
      i = i + h
    Ical = (h / 2) * Ical
    Error = e(Ireal, Ical)
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
      <p>n<InputNumber n onChange={value => setn(value)} /></p>
      <Button onClick={Compositetrapecode} ><CalculatorOutlined />Calculator</Button>
      <Card title="Answer :x" bordered={false} style={{width: 300}}>
      
      </Card>
    </Content>
  )
}
export default CTR;


