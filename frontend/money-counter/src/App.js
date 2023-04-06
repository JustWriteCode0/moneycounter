import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import FormSend from "./components/FormSend"
import Entries from './components/Entries';
import React, {useState, useEffect} from "react";
import axios from "axios";
import { Box, Typography } from '@mui/material'


const App = () => {
  const [data, setData] = useState([]) // создаем состояние для данных

  const handleFormSubmit = (newData) => {
    setData([...data, newData]) // добавляем новые данные в состояние
  }

  return (
    <Box variant="div">
      <Header />
      <Box variant="div">
        <FormSend data={data} onSubmitSuccess={handleFormSubmit}/>
        <Entries data={data} />
      </Box>
      <Footer />
    </Box>
    )
  }



export default App;
