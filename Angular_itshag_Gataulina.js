/*1*/
/*function capitalize(word) {
        const result = null;
        const massive = word.split("");
        massive[0] = massive[0].toUpperCase();
        console.log(massive.join(""));
        return massive;
      }
      capitalize("lena");*/

/*2*/
/*const send_form = (login, password) => {
        const admin = "lena";
        if (admin.trim() == login.trim()) {
          console.log("ERROR");
        } else {
          const login_res = login.split("");
          for (let i = 0; i < login_res.length; i++) {
            login_res[i] = login_res[i].toUpperCase();
          }
          console.log(login_res.join(""));
          const new_password = password.split("");
          new_password.push(`${Math.floor(Math.random() * 100)}`);
          console.log(new_password.join(""));
          return `${(login, password)}`;
        }
      };
      send_form("lena", "1213");*/

/*3*/
/*function number(start, finish) {
  let start_2;
  let finish_2;
  if (start <= finish) {
    start_2 = start;
    finish_2 = finish;
  } else {
    start_2 = finish;
    finish_2 = start;
  }
  for (let i = start_2; i <= finish_2; i++) {
    console.log(i);
  }
}
number(18, 10);*/
