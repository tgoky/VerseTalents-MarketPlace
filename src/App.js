import React from "react";
import { Box, ThemeProvider , Grid} from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/Job/JobCard";
import NewJobModal from "./components/Job/NewJobModal";
import jobData from './dummyData';

export default () => {
  return (
  <ThemeProvider theme={theme}>
    <Header />
    <NewJobModal />
    <Grid container justify ="center">
      <Grid item xs ={10}>
        <SearchBar/>

        {jobData.map((job) => (<JobCard key={job.id} {...job}/>))}
        
      </Grid>
      </Grid>
      </ThemeProvider>);
}; 
