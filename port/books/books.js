//functions for section4, <50 quetions>
var fifty_pg = 0;
var fifty_next_img;
var fifty_img = ["../books_img/50quetions/00.jpg", "../books_img/50quetions/01.jpg", "../books_img/50quetions/02.jpg",
"../books_img/50quetions/03.jpg", "../books_img/50quetions/04.jpg", "../books_img/50quetions/05.jpg",
"../books_img/50quetions/06.jpg", "../books_img/50quetions/07.jpg", "../books_img/50quetions/08.jpg",
"../books_img/50quetions/09.jpg", "../books_img/50quetions/10.jpg", "../books_img/50quetions/11.jpg",
"../books_img/50quetions/12.jpg", "../books_img/50quetions/13.jpg", "../books_img/50quetions/14.jpg",
"../books_img/50quetions/15.jpg", "../books_img/50quetions/16.jpg", "../books_img/50quetions/17.jpg",
"../books_img/50quetions/18.jpg", "../books_img/50quetions/19.jpg"]


function fifty_count_reset() {
  fifty_pg = 0;
  fifty_show();
}

function fifty_count_down() {
  if(fifty_pg == 0) return;
  else fifty_pg --;

  fifty_show();
}

function fifty_count_up() {
  if(fifty_pg == (fifty_img.length-1)) fifty_pg = 0;
  else fifty_pg ++;
  if (fifty_pg != fifty_img.length) {
    fifty_next_img = new Image();
    fifty_next_img.src = fifty_img[fifty_pg+1];
  }
  fifty_show();
}

function fifty_show() {
  document.getElementById("fifty_pg_count").innerHTML = (fifty_pg+1) + " " + "of" + " " + fifty_img.length;
  document.getElementById("fifty_img").alt = fifty_pg;
  document.getElementById("fifty_img").src = fifty_img[fifty_pg];
}

//functions for section4, <how to write a poem>
var poem_pg = 0;
var poem_next_img;
var poem_img = ["../books_img/how_to_write_a_poem/01.jpg", "../books_img/how_to_write_a_poem/02.jpg", "../books_img/how_to_write_a_poem/03.jpg",
"../books_img/how_to_write_a_poem/04.jpg", "../books_img/how_to_write_a_poem/05.jpg", "../books_img/how_to_write_a_poem/06.jpg",
"../books_img/how_to_write_a_poem/07.jpg", "../books_img/how_to_write_a_poem/08.jpg", "../books_img/how_to_write_a_poem/09.jpg",
"../books_img/how_to_write_a_poem/10.jpg", "../books_img/how_to_write_a_poem/11.jpg", "../books_img/how_to_write_a_poem/12.jpg",
"../books_img/how_to_write_a_poem/13.jpg", "../books_img/how_to_write_a_poem/14.jpg", "../books_img/how_to_write_a_poem/15.jpg",
"../books_img/how_to_write_a_poem/16.jpg", "../books_img/how_to_write_a_poem/17.jpg", "../books_img/how_to_write_a_poem/18.jpg",
"../books_img/how_to_write_a_poem/19.jpg", "../books_img/how_to_write_a_poem/20.jpg", "../books_img/how_to_write_a_poem/21.jpg",
"../books_img/how_to_write_a_poem/22.jpg", "../books_img/how_to_write_a_poem/23.jpg", "../books_img/how_to_write_a_poem/24.jpg",
"../books_img/how_to_write_a_poem/25.jpg", "../books_img/how_to_write_a_poem/26.jpg", "../books_img/how_to_write_a_poem/27.jpg",
"../books_img/how_to_write_a_poem/28.jpg", "../books_img/how_to_write_a_poem/29.jpg", "../books_img/how_to_write_a_poem/30.jpg",
"../books_img/how_to_write_a_poem/31.jpg", "../books_img/how_to_write_a_poem/32.jpg", "../books_img/how_to_write_a_poem/33.jpg",
"../books_img/how_to_write_a_poem/34.jpg", "../books_img/how_to_write_a_poem/35.jpg", "../books_img/how_to_write_a_poem/36.jpg",
"../books_img/how_to_write_a_poem/37.jpg", "../books_img/how_to_write_a_poem/38.jpg", "../books_img/how_to_write_a_poem/39.jpg",
"../books_img/how_to_write_a_poem/40.jpg", "../books_img/how_to_write_a_poem/41.jpg", "../books_img/how_to_write_a_poem/42.jpg",
"../books_img/how_to_write_a_poem/43.jpg"]


function poem_count_reset() {
  poem_pg = 0;
  poem_show();
}

function poem_count_down() {
  if(poem_pg == 0) return;
  else poem_pg --;

  poem_show();
}

function poem_count_up() {
  if(poem_pg == (poem_img.length-1)) poem_pg = 0;
  else poem_pg ++;
  if (fifty_pg != poem_img.length) {
    poem_next_img = new Image();
    poem_next_img.src = poem_img[poem_pg+1];
  }
  poem_show();
}

function poem_show() {
  document.getElementById("poem_pg_count").innerHTML = (poem_pg+1) + " " + "of" + " " + poem_img.length;
  document.getElementById("poem_img").alt = poem_pg;
  document.getElementById("poem_img").src = poem_img[poem_pg];
}
