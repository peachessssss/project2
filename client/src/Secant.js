import React, { useState,useEffect,useRef } from 'react';
import 'antd/dist/antd.css';
import { Button, Table } from 'antd';
import { CalculatorOutlined,DatabaseOutlined } from '@ant-design/icons';
import { Layout, Input, InputNumber } from 'antd';
import axios from 'axios'
import d3 from "d3"
window.d3 = d3;
const functionPlot = require("function-plot");
const { Content } = Layout;
const { parse, abs } = require("mathjs");
const { Column } = Table;

function Secant() {
    let [x0, setx0] = useState(0)
    let [x, setx] = useState(0)
    const [fx, setfx] = useState("x")
    const [data, setdata] = useState();
    const temp = []
    const [FX_SECANT, setFX] = useState("")
    const [X1_SECANT, setX1] = useState(0)
    const [X0_SECANT, setX0] = useState(0)
    const chart = useRef(null);
    useEffect(() => {
        axios.get("http://localhost:4000/api/users/showsecant").then(res=>{
          setFX(res.data.data[0].FX_SECANT)
          setX1(res.data.data[0].X1_SECANT)
          setX0(res.data.data[0].X0_SECANT)
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
    const codesecant = () => {
        console.log("fx : " + fx)
        console.log("xr : " + x1)
        console.log("xl : " + x0)
    const f = (fx, value) => parse(fx).evaluate({ x: value })
    const ff = (x0,x) => ((f(fx,x0)-f(fx,x))/(x0-x))
    const e = (x, x0) => abs((x - x0) / x)
    var x1
    var i = 0
        while (e(x, x0) > 0.000001) {
            x1 = ff(x0,x)
            x0 = x
             x = x0-(f(fx,x0)/x1)
        temp.push({
            i: i,
            x0: x.toFixed(6),
            fx0: f(fx,x).toFixed(6),
            error: e(x,x0).toFixed(6)
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
            <p>X1<InputNumber onChange={value => setx(value)} /></p>
            <p>X0<InputNumber onChange={value => setx0(value)} /></p>
            <Button onClick={codesecant} ><CalculatorOutlined />Calculator</Button>
            <button onClick={()=>{
        setfx(FX_SECANT)
        setX1(X1_SECANT)
        setx0(X0_SECANT)
    }}><DatabaseOutlined />FX : {FX_SECANT} <br/> X1 : {X1_SECANT} <br/> X0 : {X0_SECANT} </button> 
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
export default Secant;