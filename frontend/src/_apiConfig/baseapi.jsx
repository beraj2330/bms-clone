import axios from "axios";

// const apiurl = "http://192.168.8.128:9400/";
const apiurl = "https://bms.tender247.com/";

export default axios.create({
  baseURL: apiurl,
  environment: "Live",
  DonwloadDoc: apiurl,
});
