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

  .then(function ({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    console.log(queryUrl)


    axios.get(queryUrl).then(function (res) {
      console.log(res.data)
      const repoNames = res.data.map(function (repo) {
        return repo.name;

      });

      module.exports = {
        // Get Username
        getUser: function (username) {
          const queryUrl = 'https://api.github.com/users/${username}'
          return axios.get(queryUrl)
        },


  //* GET LINKS TO THE FOLLOWING:
  //Get User location via Google Maps

  //Get User GitHub profile



  //Get User blog
  getUserBlog: function (username) {
    const queryUrl = https://api.github.com/users/${username}/
    return axios.get(queryUrl)
      .then(response => {
        return response.data.reduce((total, curr) => {
          total += curr.blog;
          return total
      },


  // GET USER BIO:
 //Number of public repositories
 getPublicRepo: function (username) {
  const queryUrl = https://api.github.com/users/${username}/
  return axios.get(queryUrl)
    .then(response => {
      return response.data.reduce((total, curr) => {
        total += curr.public_repos;
        return total
      },
 

//Number of GitHub stars
        getStars: function (username) {
          const queryUrl = https://api.github.com/users/${username}/repos?per_page=100
          return axios.get(queryUrl)
            .then(response => {
              return response.data.reduce((total, curr) => {
                total += curr.stargazers_count;
                return total
              },
//Number of users following
getFollowing: function (username) {
  const queryUrl = https://api.github.com/users/${username}
        return axios.get(queryUrl)
          .then(response => {
            return response.data.following;
          })
      })

//Number of followers            
        getFollowers: function (username) {
            const queryUrl = https://api.github.com/users/${username}
                  return axios.get(queryUrl)
                    .then(response => {
                      return response.data.followers;
                    })
                })
  

        const repoNamesStr = repoNames.join("\n");

        fs.writeFile("repos.txt", repoNamesStr, function (err) {
          if (err) {
            throw err;
          }
        });
      });
  });
  * Profile image


