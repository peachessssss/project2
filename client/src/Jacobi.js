import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Button, InputNumber } from 'antd';
import { CalculatorOutlined } from '@ant-design/icons';
const { Content } = Layout;

function Jacobi() {
    let [n, setn] = useState("")
    var temp = []
    var matrixA = []
    var matrixB = []
    var A = []
    var B = []

    const createInput = () => {
        temp = Array.from(Array(n), _ => Array(n + 1).fill(0))
        matrixA = Array.from(Array(n), _ => Array(n).fill(0))
        matrixB = Array(n).fill(0)
        return (
            <div>
                <tr>
                    <th></th>
                    {createHead()}
                    {(n > 0) ? <th>b</th> : ""}
                </tr>
                {createRow()}
            </div>
        );
    }

    const createHead = () => {
        return temp.map((x, j) => <th>x{j + 1}</th>);
    }

    const createRow = () => {
        return temp.map((x, i) => (
            <tr>
                <th>{i + 1}</th>
                {createCol(i)}
            </tr>
        ));
    }

    const createCol = (i) => {
        return temp[0].map((x, j) => (
            <td>
                <InputNumber defaultValue={0} size="small" onChange={value => {
                    if (j === n) {
                        matrixB[i] = value
                    } else {
                        matrixA[i][j] = value
                    }
                }}
                />
            </td>
        ));
    }

    const codejacobi = () => {
        var i = 0
        var n = 0
        var x = [0, 0, 0, 0]
        var xn = [0, 0, 0, 0]
        var j = []
        const e = (xn, xo) => Math.abs((xn - xo) / xn) * 100
        while (n < 1 || ((e(xn[0], x[0]) > 0.001) || (e(xn[1], x[1]) > 0.001) || (e(xn[2], x[2]) > 0.001) || (e(xn[3], x[3]) > 0.001))) {
            if (n > 0) {
                x = xn.slice()
            }
            for (i = 0; i < matrixA.length; i++) {
                xn[i] = matrixB[i]
                for (j = 0; j < matrixA.length; j++) {
                    if (i != j) {
                        xn[i] -= (matrixA[i][j] * x[j])
                    }
                }
                xn[i] = xn[i] / matrixA[i][i]
            }
            n++
        }
        console.log("\nInteration=" + (n - 1))
        for (i = 0; i < matrixA.length; i++) {
            console.log("x" + (i + 1) + "=" + xn[i].toFixed(6))
        }
    }
    
    return (
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, }} >
            <p>Jacobi</p>
            <div>
                {createInput(n)}
            </div>
            <p>n<InputNumber n onChange={value => setn(value)} /></p>
            <Button onClick={codejacobi} ><CalculatorOutlined />Calculator</Button>
        </Content>
    )
}
export default Jacobi;