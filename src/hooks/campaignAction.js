import axios from 'axios'
import { isEmpty } from 'lodash-es'
import { useSnapshot } from 'valtio'
import { proxyWithComputed } from 'valtio/utils'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// const navi = useNavigate();

// const movePath = (navi, path, query) => {
//   console.log("movePath");
//   if (query === undefined) navi(path);
//   else navi(path + query);
// };

export default campaignAction;
