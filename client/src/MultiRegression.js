import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Table,Icon } from 'antd';
import { Layout,Input, InputNumber } from 'antd';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';
const {Content} = Layout;
const { parse } = require("mathjs");
const { Column } = Table;

function MLR () {
    return (
        <Content style={{background: '#fff',padding: 24,margin: 0,minHeight: 280,}} >
        Multiple Linear Regression
        </Content>
    )
        }
export default MLR;