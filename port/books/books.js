var fifty_pg = 1;
var fifty_img = ["../books_img/50quetions/00.jpg", "../books_img/50quetions/01.jpg", "../books_img/50quetions/02.jpg",
"../books_img/50quetions/03.jpg", "../books_img/50quetions/04.jpg", "../books_img/50quetions/05.jpg",
"../books_img/50quetions/06.jpg", "../books_img/50quetions/07.jpg", "../books_img/50quetions/08.jpg",
"../books_img/50quetions/09.jpg", "../books_img/50quetions/10.jpg", "../books_img/50quetions/11.jpg",
"../books_img/50quetions/12.jpg", "../books_img/50quetions/13.jpg", "../books_img/50quetions/14.jpg",
"../books_img/50quetions/15.jpg", "../books_img/50quetions/16.jpg", "../books_img/50quetions/17.jpg",
"../books_img/50quetions/18.jpg", "../books_img/50quetions/19.jpg"]


function fifty_count_init() {
  fifty_pg = 0;
  fifty_show();
}

function fifty_count_down() {
  if(fifty_pg == 0) return;
  else {
    fifty_pg --;
  }
  fifty_show();
}

function fifty_count_up() {
  if(fifty_pg == fifty_img.length) fifty_pg = 0;
  else {
    fifty_pg ++;
  }
  fifty_show();
}

function fifty_show() {
  document.getElementById("fifty_pg_count").innerHTML = fifty_pg + "of" + fifty_img.length;
  document.getElementById("fifty_img").alt = fifty_pg;
  document.getElementById("fifty_img").src = fifty_img[fifty_pg];
}
