import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Layout, InputNumber, Card, Button } from 'antd';
import { CalculatorOutlined, DatabaseOutlined } from '@ant-design/icons';
import axios from 'axios';
const { Content } = Layout;
const { det } = require("mathjs")

function Cramer() {

  let [n, setn] = useState("")
  var temp;
  var x = []
  const [data, setdata] = useState(Array(n).fill(0));
  var ans = []
  const [MATRIXA_CRAMER, setMATRIXA] = useState(0)
  const [MATRIXB_CRAMER, setMATRIXB] = useState(0)
  var matrixA = []
  var matrixB = []
  const [N_CRAMER, setN] = useState(0)

  useEffect(() => {
    axios.get("http://localhost:4000/api/users/showcramer").then(res => {
      setMATRIXA(res.data.data[0].MATRIXA_CRAMER)
      setMATRIXB(res.data.data[0].MATRIXB_CRAMER)
      setN(res.data.data[0].N_CRAMER)
    })
  },
    [])

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

  const print = () => {
    ans = Array(n).fill(0)
    return ans.map((x, j) => <p>x{j + 1}={data[j]}</p>)
  }

  function changevalue(value) {
    matrixA = setMATRIXA[value]
    matrixB = setMATRIXB[value]
    n = setN[value]

  }

  const codecramer = () => {
    var i = 0;
    var j = 0;
    var detA = det(matrixA)
    console.log(matrixA);
    console.log(matrixB);
    for (i = 0; i < matrixA.length; i++) {
      var temp = JSON.parse(JSON.stringify(matrixA));
      for (j = 0; j < matrixA.length; j++) {
        temp[j][i] = matrixB[j]
      }
      x.push((det(temp) / detA).toFixed(6));
    }
    console.log(x)
    setdata(x);
  }

  return (
    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, }} >
      <p>Cramer</p>
      <div>
        {createInput(n)}
      </div>
      <p>n<InputNumber n onChange={value => setn(value)} /></p>
      <Button onClick={codecramer} ><CalculatorOutlined />Calculator</Button>
      <button onchange={changevalue} onClick={() => {
        setMATRIXA(MATRIXA_CRAMER)
        setMATRIXB(MATRIXB_CRAMER)
        setn(N_CRAMER)
      }}><DatabaseOutlined />MatrixA : {MATRIXA_CRAMER} <br /> MatrixB : {MATRIXB_CRAMER} <br /> N : {N_CRAMER} </button>
      <Card title="Answer :x" bordered={false} style={{ width: 300 }}>
        {print(n)}
      </Card>
    </Content>
  );
}

export default Cramer;






