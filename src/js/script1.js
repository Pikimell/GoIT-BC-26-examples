const options = {
  headers: {
    "X-RapidAPI-Key": "9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4",
    "X-RapidAPI-Host": "dbm.p.rapidapi.com",
  },
};
fetch("https://dbm.p.rapidapi.com/movies?_limit=7", options).then((val) => {
  console.log(val);
});

// =====================
/* 
import Notiflix from "notiflix";
Notiflix.Notify.success("Sol lucet omnibus");
Notiflix.Report.success("Title", "Message", "Button Text"); 
*/
