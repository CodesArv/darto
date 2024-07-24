document.querySelector(function () {
  var max = 501;
  var possibleOuts = {
    40: ["D20"],
    41: ["9 D16", "1 D20"],
    42: ["10 D16", "6 D18"],
    43: ["11 D16", "3 D20", "19 D12"],
    44: ["4 D20", "12 D16"],
    45: ["5 D20", "13 D16", "9 D18"],
    46: ["6 D20", "10 D18"],
    47: ["15 D16", "11 D18", "7 D20"],
    48: ["8 D20", "16 D16"],
    49: ["17 D16", "9 D20"],
    50: ["10 D20", "18 D16", "10 D20", "BULL"],
    51: ["11 D20", "19 D16"],
    52: ["12 D20", "20 D16"],
    53: ["13 D20", "17 D18"],
    54: ["14 D20", "18 D18"],
    55: ["15 D20", "19 D18"],
    56: ["16 D20", "20 D18"],
    57: ["17 D20", "25 D16"],
    58: ["18 D20", "8 BULL"],
    59: ["19 D20", "25 D17"],
    60: ["20 D20", "10 BULL"],
    61: ["25 D18", "11 BULL", "T11 D14"],
    62: ["T10 D16", "10 20 D16", "12 BULL"],
    63: ["T13 D12", "13 BULL"],
    64: ["T16 D8", "16 16 D16", "16 8 D20", "14 BULL"],
    65: ["25 D20", "T19 D4", "T15 D10"],
    66: ["T10 D18", "T16 D9"],
    67: ["T17 D8", "17 BULL"],
    68: ["T20 D4", "T16 D10"],
    69: ["19 BULL", "T11 D18", "11 18 D20"],
    70: ["T18 D8", "20 BULL"],
    71: ["T13 D16", "25 6 D20", "25 10 D18"],
    72: ["T12 D18", "T16 D12"],
    73: ["T19 D8", "T11 D20"],
    74: ["T14 D16", "T18 D10"],
    75: ["T13 D18", "25 BULL"],
    76: ["T20 D8", "T16 D14"],
    77: ["T15 D16", "T19 D10"],
    78: ["T18 D12", "T14 D18"],
    79: ["T13 D20", "T19 D11"],
    80: ["T16 D16", "T20 D10"],
    81: ["T15 D18", "T19 D12"],
    82: ["T14 D20", "BULL D16", "25 17 D20"],
    83: ["T17 D16", "T11 BULL"],
    84: ["T16 D18", "16 T16 D10"],
    85: ["T15 D20", "T19 D14"],
    86: ["T18 D16", "BULL T18", "25 11 BULL"],
    87: ["T17 D18", "T15 10 D16"],
    88: ["T16 D20", "T20 D14"],
    89: ["T19 D16", "T13 BULL"],
    90: ["T18 D18", "BULL D20"],
    91: ["T17 D20", "17 BULL D12"],
    92: ["T20 D16", "T16 11 D16"],
    93: ["T19 D18", "25 18 BULL"],
    94: ["T18 D20", "T16 6 D20"],
    95: ["T19 D19", "19 T20 D8", "T15 BULL", "15 T16 D16"],
    96: ["T20 D18", "20 T20 D8", "T16 16 D16", "T18 10 D16"],
    97: ["T19 D20", "19 T18 D12", "T17 10 D18", "17 T16 D16"],
    98: ["T20 D19", "20 T18 D12", "T16 BULL", "16 T16 D17"],
    99: ["T19 10 D16", "19 T16 D16", "T20 7 D16", "T17 8 D20", "17 BULL D16"],
    100: ["T20 D20", "T16 12 D20", "16 T16 D18", "BULL BULL"],
    101: ["T17 BULL", "17 T16 D18", "T13 12 BULL", "13 T16 D20"],
    102: ["T20 10 D16", "20 BULL D16", "T18 16 D16", "18 T16 D18"],
    103: ["T19 10 D16", "19 T16 D18", "T17 12 D20", "17 T18 D16"],
    104: ["T18 BULL", "18 T18 D16", "T16 16 D20"],
    105: ["T20 13 D16", "20 T15 D20", "T19 8 D20", "19 T18 D16"],
    106: ["T20 10 D18", "20 T18 D16", "T18 12 D20", "T16 18 D20", "16 T18 D18"],
    107: ["T19 BULL", "19 T16 D20", "T17 16 D20", "17 T18 D18"],
    108: ["T19 19 D16", "18 T18 D18", "T20 8 D20", "20 T16 D20"],
    109: ["T20 17 D16", "20 T19 D16", "T19 12 D20", "19 T18 D18"],
    110: ["T20 BULL", "20 T18 D18", "BULL 20 D20", "25 T15 D20", "15 T15 BULL"],
    111: ["T20 19 D16", "20 T17 D20", "T19 14 BULL", "17 T18 D20"],
    112: ["T18 18 D20", "T12 T20 D8", "12 T20 D20"],
    113: [
      "T20 13 D20",
      "20 T19 D18",
      "T19 16 D20",
      "19 T18 D20",
      "T17 12 BULL",
      "17 T20 D18",
    ],
    114: ["T20 14 D20", "T18 20 D20"],
    115: ["19 T20 D18", "T19 18 D20"],
    116: ["T20 16 D20", "T16 18 BULL"],
    117: ["T20 18 D20", "T17 16 BULL"],
    118: ["T20 T19 D20", "T18 T16 D8"],
    119: ["19 T20 D20", "T19 12 BULL"],
    120: ["T20 20 D20", "T19 13 BULL", "T17 19 BULL"],
    121: ["25 T20 D18", "T19 T16 D8"],
    122: ["T18 18 BULL", "T20 12 BULL"],
    123: ["T20 T13 D12", "19 T18 BULL"],
    124: ["T20 T16 D8", "20 T18 BULL"],
    125: ["T20 T19 D4", "25 BULL BULL", "25 T20 D20", "T20 T11 D16"],
    126: ["T19 19 BULL", "T20 16 BULL", "T18 T12 D18"],
    127: ["T20 T17 D8", "T20 T14 D16"],
    128: ["T20 T20 D4", "T20 18 BULL", "T18 T18 D10"],
    129: ["T19 T16 D12", "T19 T12 D18", "19 T20 BULL"],
    130: ["T20 T18 D8", "20 T20 BULL"],
    131: ["T20 T13 D16", "BULL T15 D18"],
    132: ["T20 T16 D12", "T17 T15 D18"],
    133: ["T20 T19 D8", "T17 BULL D16"],
    134: ["T20 T14 D16", "T18 T16 D16"],
    135: ["T20 T13 D8", "BULL T15 D20", "25 T20 BULL"],
    136: ["T20 T20 D8", "T18 BULL D16"],
    137: ["T20 T15 D16", "T19 T16 D16"],
    138: ["T20 T14 D18", "T18 T16 D18"],
    139: ["T20 T13 D20", "T19 BULL D16", "T17 T16 D20"],
    140: ["T20 T20 D10", "T18 T18 D16"],
    141: ["T20 T15 D18", "T19 T16 D18"],
    142: ["T20 T14 D20", "T18 T16 D20"],
    143: ["T20 T17 D16", "T19 T18 D16"],
    144: ["T20 T20 D12", "T18 T18 D18"],
    145: ["T20 T15 D20", "T19 T16 D20"],
    146: ["T20 T18 D16", "T19 T19 D16"],
    147: ["T20 T17 D18", "T19 T18 D18"],
    148: ["T20 T20 D14", "T20 T16 D20"],
    149: ["T20 T19 D16", "T17 T20 D19"],
    150: ["T20 T18 D18", "BULL BULL BULL"],
    151: ["T20 T17 D20", "T19 T20 D18"],
    152: ["T20 T20 D16", "T16 T18 BULL"],
    153: ["T20 T19 D18"],
    154: ["T20 T18 D20"],
    155: ["T20 T19 D19"],
    156: ["T20 T20 D18"],
    157: ["T20 T19 D20"],
    158: ["T20 T20 D19"],
    160: ["T20 T20 D20"],
    161: ["T20 T17 BULL"],
    164: ["T20 T18 BULL"],
    167: ["T20 T19 BULL"],
    170: ["T20 T20 BULL"],
  };

  document.querySelector("#js-start").addEventListener("click", function () {
    var scoreColumns = document.querySelector(".column--score");
    scoreColumns
      .removeClass("column--active")
      .querySelector(".score")
      .text("501");
    scoreColumns.eq(0).classList.add("column--active");

    var rounds = document.querySelector(".list--rounds").hide();
    rounds.querySelector(".list__items").empty();

    document.querySelector(".num-pad__display").val("");
    document.querySelector(".list--outs").hide();
  });

  document
    .querySelector(".num-pad__button--numeric")
    .addEventListener("click", function () {
      document
        .querySelector(".num-pad__display")
        .val(
          document.querySelector(".num-pad__display").value +
            document.querySelector(this).text()
        );
    });

  document
    .querySelector(".num-pad__button--clear")
    .addEventListener("click", function () {
      document.querySelector(".num-pad__display").val("");
    });

  document
    .querySelector(".num-pad__button--delete")
    .addEventListener("click", function () {
      var score = document.querySelector(".num-pad__display").value;
      if (score) {
        score = score.toString().substring(0, score.length - 1);
        document.querySelector(".num-pad__display").val(score);
      }
    });

  document
    .querySelector(".num-pad__button--submit")
    .addEventListener("click", function () {
      var score = document.querySelector(".num-pad__display").value;

      if (!score) {
        alert("Please enter a score");
        return;
      }

      if (score > 180) {
        alert("Score cannot be higher than 180");
        return;
      }

      var currentplayer = document.querySelector(
        ".column--score.column--active"
      );
      var otherPlayer = document
        .querySelector(".column--score")
        .not(".column--active");
      var previousScore = currentplayer.querySelector(".score");
      var previousScoreText = parseInt(previousScore.text());
      var scoreRemaining = previousScoreText - score;
      var rounds = currentplayer.querySelector(".list--rounds").show();
      var outs = currentplayer.querySelector(".list--outs").hide();

      if (possibleOuts[scoreRemaining]) {
        var outslist = outs.querySelector(".list__items");
        outslist.empty();
        outslist.insertAdjacentHTML(
          "beforeend",
          "<li>" + possibleOuts[scoreRemaining].join("</li><li>") + "</li>"
        );
        outs.show();
      }

      if (scoreRemaining > 1) {
        previousScore.text(scoreRemaining);
        rounds
          .querySelector(".list__items")
          .insertAdjacentHTML("beforeend", "<li>" + previousScoreText + "<li>");
      } else if (scoreRemaining === 0) {
        rounds
          .querySelector(".list__items")
          .insertAdjacentHTML("beforeend", "<li>Winner!<li>");
      } else {
        rounds
          .querySelector(".list__items")
          .insertAdjacentHTML("beforeend", "<li>Bust<li>");
      }

      currentplayer.removeClass("column--active");
      otherPlayer.classList.add("column--active");
      document.querySelector(".num-pad__display").val("");
    });
});
