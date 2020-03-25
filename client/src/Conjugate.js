/*import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout} from 'antd';
const {Content} = Layout;
function Conjugate() {
    let [n,setn] = useState("")
  var temp = []
  var matrixA = []
  var matrixB = []
  var x = []

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
  const codeconjugate = () =>{
    var i = 1
    var n = 0
    var X = [0, 0, 0, 0]
    var R = [0, 0, 0, 0]
    var D = [0, 0, 0, 0]
    var j = []
    const error = 0.000001
    const e = (R) => math.sqrt(math.multiply(R,R)).toFixed(6) 
    R = math.subtract(math.multiply(matrixA,X),matrixB)
    while(i == 1 || e(R) > error){
        D = (i == 1) ? math.multiply(R,-1) : math.add(math.multiply(R,-1),math.multiply(alpha,D))
        lamda = (-(math.multiply(D,R)))/(math.multiply(D,math.multiply(matrixA,D)))
        X = math.add(X,math.multiply(lamda,D))
        R = math.subtract(math.multiply(matricA,X),matricB)
        i++
        alpha = (math.multiply(R,math.multiply(matrixA,D)))/(math.multiply(D,math.multiply(matrixA,D)))
    }
    console.log("Iteration "+(i-1))
    console.log("X : "+X)
  }
    return (
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, }} >
      <p>Conjugate</p>
      <div>
      {createInput(n)} 
      </div>
      <p>n<InputNumber n onChange={value => setn(value)} /></p>
      <Button onClick={codeconjugate} ><CalculatorOutlined />Calculator</Button>
    </Content>
    )
        }
export default Conjugate;*/