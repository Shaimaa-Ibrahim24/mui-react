import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import getDesignTokens from './Style/MyTheme';
import { Stack} from '@mui/material'
import Divider from '@mui/material/Divider';
import Appbarr from './comp/Appbarr';
import MyList from './comp/MyList';
import Posts from './Posts';
import RightBar from './RightBar';
import AddBoxo from './addBoxo';

function App() {
  const [mode, setmymode] = useState(localStorage.getItem("currentmode")===null?"light":localStorage.getItem("currentmode")==="light"?"light":"dark");
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [showlist, setshowlist] = useState("none");
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="App">
      <Appbarr showlist={showlist} setshowlist={setshowlist}/>
      <Stack  divider={<Divider orientation="vertical" flexItem />} direction={"row"}>
<MyList setmymode={setmymode} showlist={showlist} setshowlist={setshowlist} />
<Posts/>
<RightBar/>
      </Stack>
    

  
    <AddBoxo/>
    
    </div>
    </ThemeProvider>
  );
}

export default App;
