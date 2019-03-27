//functions for section4, <50 questions>
var pg = 0;
var next_img;
var fifty_img = ["../books_img/50questions/00.jpg", "../books_img/50questions/01.jpg", "../books_img/50questions/02.jpg",
"../books_img/50questions/03.jpg", "../books_img/50questions/04.jpg", "../books_img/50questions/05.jpg",
"../books_img/50questions/06.jpg", "../books_img/50questions/07.jpg", "../books_img/50questions/08.jpg",
"../books_img/50questions/09.jpg", "../books_img/50questions/10.jpg", "../books_img/50questions/11.jpg",
"../books_img/50questions/12.jpg", "../books_img/50questions/13.jpg", "../books_img/50questions/14.jpg",
"../books_img/50questions/15.jpg", "../books_img/50questions/16.jpg", "../books_img/50questions/17.jpg",
"../books_img/50questions/18.jpg", "../books_img/50questions/19.jpg"]

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

var cards_img = ["../books_img/cards/01.jpg", "../books_img/cards/02.jpg", "../books_img/cards/03.jpg", "../books_img/cards/04.jpg",
"../books_img/cards/05.jpg", "../books_img/cards/06.jpg", "../books_img/cards/07.jpg", "../books_img/cards/08.jpg", "../books_img/cards/09.jpg"]

var blue_img = ["../books_img/guide_blue/01.jpg", "../books_img/guide_blue/02.jpg", "../books_img/guide_blue/03.jpg", "../books_img/guide_blue/04.jpg",
"../books_img/guide_blue/05.jpg", "../books_img/guide_blue/06.jpg", "../books_img/guide_blue/07.jpg", "../books_img/guide_blue/08.jpg",
"../books_img/guide_blue/09.jpg", "../books_img/guide_blue/10.jpg", "../books_img/guide_blue/11.jpg", "../books_img/guide_blue/12.jpg",
"../books_img/guide_blue/13.jpg", "../books_img/guide_blue/14.jpg", "../books_img/guide_blue/15.jpg", "../books_img/guide_blue/16.jpg",
"../books_img/guide_blue/17.jpg", "../books_img/guide_blue/18.jpg", "../books_img/guide_blue/19.jpg", "../books_img/guide_blue/20.jpg",
"../books_img/guide_blue/21.jpg", "../books_img/guide_blue/22.jpg", "../books_img/guide_blue/23.jpg", "../books_img/guide_blue/24.jpg"]

var red_img = ["../books_img/guide_red/01.jpg", "../books_img/guide_red/02.jpg", "../books_img/guide_red/03.jpg", "../books_img/guide_red/04.jpg",
"../books_img/guide_red/05.jpg", "../books_img/guide_red/06.jpg", "../books_img/guide_red/07.jpg", "../books_img/guide_red/08.jpg",
"../books_img/guide_red/09.jpg", "../books_img/guide_red/10.jpg", "../books_img/guide_red/11.jpg", "../books_img/guide_red/12.jpg",
"../books_img/guide_red/13.jpg", "../books_img/guide_red/14.jpg", "../books_img/guide_red/15.jpg", "../books_img/guide_red/16.jpg",
"../books_img/guide_red/17.jpg", "../books_img/guide_red/18.jpg", "../books_img/guide_red/19.jpg", "../books_img/guide_red/20.jpg",
"../books_img/guide_red/21.jpg", "../books_img/guide_red/22.jpg", "../books_img/guide_red/23.jpg", "../books_img/guide_red/24.jpg"]

var gray_img = ["../books_img/guide_gray/01.jpg", "../books_img/guide_gray/02.jpg", "../books_img/guide_gray/03.jpg", "../books_img/guide_gray/04.jpg",
"../books_img/guide_gray/05.jpg", "../books_img/guide_gray/06.jpg", "../books_img/guide_gray/07.jpg", "../books_img/guide_gray/08.jpg",
"../books_img/guide_gray/09.jpg", "../books_img/guide_gray/10.jpg", "../books_img/guide_gray/11.jpg", "../books_img/guide_gray/12.jpg",
"../books_img/guide_gray/13.jpg", "../books_img/guide_gray/14.jpg", "../books_img/guide_gray/15.jpg", "../books_img/guide_gray/16.jpg",
"../books_img/guide_gray/17.jpg", "../books_img/guide_gray/18.jpg"]

function bookLength(menu) {
  var pageLength;
  switch(menu) {
    case "fifty":
      pageLength = fifty_img.length;
      break;
    case "poem":
      pageLength = poem_img.length;
      break;
    case "cards":
      pageLength = cards_img.length;
      break;
    case "blue":
      pageLength = blue_img.length;
      break;
    case "red":
      pageLength = red_img.length;
      break;
    case "gray":
      pageLength = gray_img.length;
      break;
  }

  return pageLength
}

function count_reset(menu) {
  pg = 0;
  show(menu, pg, bookLength(menu));
}

function count_down(menu) {
  if(pg == 0) return;
  else pg --;

  show(menu, pg, bookLength(menu));
}

function count_up(menu) {
  var pageLength = bookLength(menu);

  if(pg == (pageLength-1)) pg = 0;
  else pg ++;
  if (pg != pageLength) {
    next_img = new Image();
    switch (menu) {
      case "fifty":
        next_img.src = fifty_img[pg+1];
        break;
      case "poem":
        next_img.src = poem_img[pg+1];
        break;
      case "cards":
        next_img.src = cards_img[pg+1];
        break;
      case "blue":
        next_img.src = blue_img[pg+1];
        break;
      case "red":
        next_img.src = red_img[pg+1];
        break;
      case "gray":
        next_img.src = gray_img[pg+1];
        break;
    }

  }
  show(menu, pg, pageLength);
}

function show(menu, pg, pageLength) {
  document.getElementById(menu + "_pg_count").innerHTML = (pg+1) + " " + "of" + " " + pageLength;
  document.getElementById(menu + "_img").alt = pg;
  switch (menu) {
    case "fifty":
      document.getElementById("fifty_img").src = fifty_img[pg];
      break;
    case "poem":
      document.getElementById("poem_img").src = poem_img[pg];
      break;
    case "cards":
      document.getElementById("cards_img").src = cards_img[pg];
      break;
    case "blue":
      document.getElementById("blue_img").src = blue_img[pg];
      break;
    case "red":
      document.getElementById("red_img").src = red_img[pg];
      break;
    case "gray":
      document.getElementById("gray_img").src = gray_img[pg];
      break;
  }

}
