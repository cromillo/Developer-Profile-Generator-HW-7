const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");



const questions = [{
  type: "input",
  message: "Enter your GitHub username:",
  name: "username"
},
{
  type: "checkbox",
  message: "Choose a color",
  choices: ["green", "blue", "pink", "red"],
  name: "colors",
}]


inquirer
.prompt(questions)
  .then(function ({username}) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    getUser(username);
    getLocation(username)
    getUserBlog(username)
    getPublicRepo(username)
    getStars(username)
    getFollowers(username)
    getFollowing(username)
  });



  // Get Username

getUser = function(username){
  const queryUrl =  `https://api.github.com/users/${username}`;
  return axios.get(queryUrl)
  .then(response => {
    //console.log(response.data.name);
  })
}



  //* GET LINKS TO THE FOLLOWING:
  //Get User location via Google Maps
  getLocation = function (username) {
    const queryUrl = `https://api.github.com/users/${username}`;
    return axios.get(queryUrl)
      .then(response => {
        //console.log(response.data.location);
        })
      }
  

 

  //Get User GitHub profile

  //Get  Profile image

  //Get User blog
  getUserBlog = function (username) {
    const queryUrl = `https://api.github.com/users/${username}`
    return axios.get(queryUrl)
      .then(response => {
       // console.log( response.data.blog)
      })
  }
  



  // GET USER BIO:
  //Number of public repositories
  getPublicRepo = function (username) {
    const queryUrl = `https://api.github.com/users/${username}`
    return axios.get(queryUrl)
      .then(response => {
        console.log(response.data.public_repos)   
        }) 
  }


  //Number of GitHub stars
  getStars = function (username) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100 `
    return axios.get(queryUrl)
      .then(response => {
        console.log(response.data.watchers_count)
        })
      
  }

  //Number of users following
  getFollowing = function (username) {
    const queryUrl = `https://api.github.com/users/${username}`
    return axios.get(queryUrl)
      .then(response => {
        console.log(response.data.following)
      })},

  //Number of followers            
  getFollowers =  function (username) {
    const queryUrl = `https://api.github.com/users/${username}`
    return axios.get(queryUrl)
      .then(response => {
        console.log(response.data.followers)
      })
    }



//const repoNamesStr = repoNames.join("\n");

//fs.writeFile("repos.txt", repoNamesStr, function (err) {
  //if (err) {
    //throw err;
  //}
//})


      




