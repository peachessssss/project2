import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Table, Icon } from 'antd';
import { Layout, Input, InputNumber } from 'antd';
import { CalculatorOutlined, DatabaseOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Content } = Layout;
const { parse } = require("mathjs");
const { Column } = Table;

function LU() {
    let [n, setn] = useState("")
    var temp = []
    var matrixA = []
    var matrixB = []
    var A = []
    var B = []
    var ans = []
    var X = []
    const [data, setdata] = useState(Array(n).fill(0));
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
    const print = () =>{
        ans = Array(n).fill(0)
        return ans.map((x, j) => <p>x{j + 1}={data[j]}</p>)
      }
    const codelu = () => {
        var i = 0
        var j = []
        var k = 0
        var num = []
        var L = []
        var U = []
        var X = []
        var Y = []
        L = Array.from(Array(3), _ => Array(3).fill(0))
        U = Array.from(Array(3), _ => Array(3).fill(0))
        for (i = 0; i < matrixA.length; i++) {
            for (j = 0; j < matrixA.length; j++) {
                if (j > i) {
                    U[i][j] = matrixA[i][j];
                }
                else {
                    if (i == j) {
                        U[i][j] = 1;
                    }
                    L[i][j] = matrixA[i][j];
                }
            }
        }
        for (k = 0; k < matrixA.length; k++) {
            for (i = 0; i < matrixA.length; i++) {
                for (j = 0; j < matrixA.length; j++) {
                    if (i > k) {
                        if (j != k) {
                            U[k][i] -= L[k][j] * U[j][i];
                        }
                    }
                    else {
                        if (j != i) {
                            L[k][i] -= L[k][j] * U[j][i];
                        }
                    }
                }
                if (k >= i) {
                    L[k][i] /= U[i][i];
                }
                else {
                    U[k][i] /= L[k][k];
                }
            }
        }
        for (i = 0; i < matrixA.length; i++) {
            Y[i] = (matrixB[i] / L[i][i]).toFixed(6)
            for (j = i + 1; j < matrixA.length; j++) {
                matrixB[j] -= L[j][i] * Y[i];
            }
        }
        for (i = matrixA.length - 1; i >= 0; i--) {
            X[i] = (Y[i] / U[i][i]).toFixed(6)
            for (j = i - 1; j >= 0; j--) {
                Y[j] -= U[j][i] * X[i];
            }
        }
        setdata(X);
}
    return (
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, }} >
            <p>LU</p>
            <div>
                {createInput(n)}
            </div>
            <p>n<InputNumber n onChange={value => setn(value)} /></p>
            <Button onClick={codelu} ><CalculatorOutlined />Calculator</Button>
            <Card title="Answer :x" bordered={false} style={{width: 300}}>
      {print(n)}
      </Card>
        </Content>
    )
}
export default LU;