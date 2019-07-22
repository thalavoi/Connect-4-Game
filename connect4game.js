var playerOneName = prompt('Player One: Enter Your Name, you will be Blue.')
var playerTwoName = prompt('Player Two: Enter Your Name, you will be Red.')

var matr = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
]
var p1 = undefined
var p2 = undefined
var f = undefined
var w = 0

var col0 = [0, 0]
var col1 = [1, 0]
var col2 = [2, 0]
var col3 = [3, 0]
var col4 = [4, 0]
var col5 = [5, 0]
var col6 = [6, 0]

var gamec = 42

function updateMatrix(a, b){
   p1 = a[0]
   p2 = a[1]
  matr[p1][p2] = f
  collector()
}

function collector(){

    // collecting first diagonal elements

            var dlu = []
            var dll = []
            var dl1 = []
            var c = p2
            for (var i = p1; i >= 0; i--) {
              if (c<=5) {
                if (matr[i][c] !== undefined) {
                  dlu.push(matr[i][c])
                  c++
                }
              }
            }
            var d = p1 + 1
            for (var i = p2-1; i >= 0; i--) {
              if (d<=6) {
                if (matr[d][i] !== undefined) {
                    dll.push(matr[d][i])
                    d++
                  }
              }
            }
            dll = dll.reverse()
            dl1 = dll.concat(dlu)

    // Collecting Second diagonal elements

          var dl2u = []
          var dl2l = []
          var dl2 = []
          var cdl2 = p1;
          for (var i = p2; i <= 5; i++) {
            if (cdl2 <= 6) {
              if (matr[cdl2][i] !== undefined) {
                dl2u.push(matr[cdl2][i])
                cdl2++
                }
              }
            }
          var ddl2 = p2 - 1
            for (var i = p1-1; i >= 0; i--) {
                if (matr[i][ddl2] !== undefined) {
                  dl2l.push(matr[i][ddl2])
                  ddl2--
                }
              }
          dl2l = dl2l.reverse()
          dl2 = dl2l.concat(dl2u)

    // Collecting Full Row

        var row = []
          for (var i = 0; i < 7; i++) {
            row.push(matr[i][p2])
          }
          // console.log(row);

    // Collecting Bottom List

        var bl =[]
        if (p2>=3) {
          bl = matr[p1].slice(p2-3,p2+1)
          // console.log(bl);
        }

    // A list of all lists
    var mainl = [bl, row, dl1, dl2]

    for (var z in mainl) {
      if (w!=1) {
        checkWinner(mainl[z])
      }
    }
}

function checkWinner(l){
    var wb = 0
    for (var j in l) {
      if (l[j] == f) {
        wb++
        if (wb == 4) {
          announceWinner()
          break
        }
      }
      else{
        wb = 0;
      }
    }
}


function blink_text() {
    $('h3').fadeOut(500);
    $('h3').fadeIn(500);
}


function announceWinner(){
  if(gamec%2 == 0){
    $('h3').html('Congratulations '+playerOneName+'! You Won. Please Refresh to Restart').css({'color': '#7dafff', "font-family": "'Source Sans Pro', sans-serif"});
  }
  else{
    $('h3').html('Congratulations '+playerTwoName+'! You Won. Please Refresh to Restart').css({'color': '#ff6969', "font-family": "'Source Sans Pro', sans-serif"});
  }
  w = 1
  $('.column0').unbind('click')
  $('.column1').unbind('click')
  $('.column2').unbind('click')
  $('.column3').unbind('click')
  $('.column4').unbind('click')
  $('.column5').unbind('click')
  $('.column6').unbind('click')
  setInterval(blink_text, 500);
}


function changeturn(){
  if (w != 1) {
    if (gamec != 0) {
      if(gamec%2 == 0){
        $('h3').text(playerOneName+': Please insert your Blue chip!').css('color', '#7dafff')
      }
      else{
        $('h3').text(playerTwoName+': Please insert your Red chip!').css('color', '#ff6969')
      }
    }
    else{
      $('h3').text('Nobody Won!! Please Refresh to Restart.')
    }
  }
}

changeturn()

$('.column0').click(function() {
  if(col0[1] <= 5){
    if (gamec%2 == 0) {
      $($('.column0 div').get().reverse()).eq(col0[1]).css('background-color', '#7dafff')
      f = 1
    }
    else {
      $($('.column0 div').get().reverse()).eq(col0[1]).css('background-color', '#ff6969')
      f = 2
    }
    updateMatrix(col0, gamec, f)
    col0[1]++
    gamec--
    changeturn()
  }
})

$('.column1').click(function() {
  if(col1[1] <= 5){
    if (gamec%2 == 0) {
      $($('.column1 div').get().reverse()).eq(col1[1]).css('background-color', '#7dafff')
      f = 1
    }
    else {
      $($('.column1 div').get().reverse()).eq(col1[1]).css('background-color', '#ff6969')
      f = 2
    }
    updateMatrix(col1, gamec, f)
    col1[1]++
    gamec--
    changeturn()
  }
})

$('.column2').click(function() {
  if(col2[1] <= 5){
    if (gamec%2 == 0) {
      $($('.column2 div').get().reverse()).eq(col2[1]).css('background-color', '#7dafff')
      f = 1
    }
    else {
      $($('.column2 div').get().reverse()).eq(col2[1]).css('background-color', '#ff6969')
      f = 2
    }
    updateMatrix(col2, gamec, f)
    col2[1]++
    gamec--
    changeturn()
  }
})

$('.column3').click(function() {
  if(col3[1] <= 5){
    if (gamec%2 == 0) {
      $($('.column3 div').get().reverse()).eq(col3[1]).css('background-color', '#7dafff')
      f = 1
    }
    else {
      $($('.column3 div').get().reverse()).eq(col3[1]).css('background-color', '#ff6969')
      f = 2
    }
    updateMatrix(col3, gamec, f)
    col3[1]++
    gamec--
    changeturn()
  }
})

$('.column4').click(function() {
  if(col4[1] <= 5){
    if (gamec%2 == 0) {
      $($('.column4 div').get().reverse()).eq(col4[1]).css('background-color', '#7dafff')
      f = 1
    }
    else {
      $($('.column4 div').get().reverse()).eq(col4[1]).css('background-color', '#ff6969')
      f = 2
    }
    updateMatrix(col4, gamec, f)
    col4[1]++
    gamec--
    changeturn()
  }
})

$('.column5').click(function() {
  if(col5[1] <= 5){
    if (gamec%2 == 0) {
      $($('.column5 div').get().reverse()).eq(col5[1]).css('background-color', '#7dafff')
      f = 1
    }
    else {
      $($('.column5 div').get().reverse()).eq(col5[1]).css('background-color', '#ff6969')
      f = 2
    }
    updateMatrix(col5, gamec, f)
    col5[1]++
    gamec--
    changeturn()
  }
})

$('.column6').click(function() {
  if(col6[1] <= 5){
    if (gamec%2 == 0) {
      $($('.column6 div').get().reverse()).eq(col6[1]).css('background-color', '#7dafff')
      f = 1
    }
    else {
      $($('.column6 div').get().reverse()).eq(col6[1]).css('background-color', '#ff6969')
      f = 2
    }
    updateMatrix(col6, gamec, f)
    col6[1]++
    gamec--
    changeturn()
  }
})
