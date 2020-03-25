import React, { useState} from 'react';
import 'antd/dist/antd.css';
import { Layout,Button, InputNumber } from 'antd';
import { CalculatorOutlined} from '@ant-design/icons';
const { Content } = Layout;

function Gausseliminate() {
    let [n,setn] = useState("")
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

const codeGeli = () =>{
var i = 0
var j = []
var k = 0
var num = []
for(i=matrixA.length-1;i>0;i--){
  for(j=i-1;j>-1;j--){
      num=matrixA[j][i]
      for(k=0;k<matrixA.length;k++){
          matrixA[j][k]=matrixA[j][k]-((matrixA[i][k]/matrixA[i][i])*num)
      }
      matrixB[j]=matrixB[j]-((matrixB[i]/matrixA[i][i])*num)
  }
}
    for(i=0;i<matrixA.length;i++){
        num=matrixA[i][i]
        matrixA[i][i]=matrixA[i][i]/matrixA[i][i]
        matrixB[i]=Math.round(matrixB[i]/num)
        console.log(matrixB[i])
    }

}
return (
    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280, }} >
      <p>Gausseliminate</p>
      <div>
      {createInput(n)} 
      </div>
      <p>n<InputNumber n onChange={value => setn(value)} /></p>
      <Button onClick={codeGeli} ><CalculatorOutlined />Calculator</Button>
    </Content>
  );
        }
export default Gausseliminate;