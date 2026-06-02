import { rawToJSON } from './lib/balatro-save-loader/loading.js';

function getCount(n) {
  if (n === undefined) {
    return 0;
  }
  return n;
}

function formatDeckName(name) {
  return name.substring(2);
}

function formatPercent(n) {
  return n.toLocaleString("en-US", {
    style: "percent",
    roundingMode: "floor",
  });
}

function getDeckResultString(name, wins, losses) {
  const games = wins + losses;
  const percent = wins / games;
  return `${name}: ${formatPercent(percent)} (${wins}/${games})`;
}

async function updateImageDisplay() {
  const file = profilejkr.files[0];
  if (file.name == "meta.jkr" || file.name == "save.jkr") {
    throw Exception("Expected profile.jkr");
  }

  const ds = new DecompressionStream("deflate-raw");
  const decompressedStream = file.stream().pipeThrough(ds);

  const response = new Response(decompressedStream);
  const jkrLua = await response.text();
  const jkr = rawToJSON(jkrLua);

  localStorage.setItem("profilejkr", JSON.stringify(jkr));

  _updateImageDisplay(jkr.name, jkr.deck_usage);
}

function initImageDisplay() {
  const defaultJkr = {
    name: "Example (upload profile.jkr below)",
    deck_usage: {
      "b_red": {
        "wins": {
          "NOSTRING_1": 1,
          "NOSTRING_2": 1,
          "NOSTRING_3": 1,
          "NOSTRING_4": 1,
          "NOSTRING_5": 1,
          "NOSTRING_6": 1,
          "NOSTRING_7": 1,
          "NOSTRING_8": 25
        },
        "losses": {
          "NOSTRING_1": 0,
          "NOSTRING_2": 0,
          "NOSTRING_3": 0,
          "NOSTRING_4": 0,
          "NOSTRING_5": 0,
          "NOSTRING_6": 0,
          "NOSTRING_7": 0,
          "NOSTRING_8": 33
        }
      },
      "b_blue": {
        "wins": {
          "NOSTRING_1": 1,
          "NOSTRING_2": 1,
          "NOSTRING_3": 1,
          "NOSTRING_4": 1,
          "NOSTRING_5": 1,
          "NOSTRING_6": 1,
          "NOSTRING_7": 1,
          "NOSTRING_8": 80
        },
        "losses": {
          "NOSTRING_1": 0,
          "NOSTRING_2": 0,
          "NOSTRING_3": 0,
          "NOSTRING_4": 0,
          "NOSTRING_5": 0,
          "NOSTRING_6": 0,
          "NOSTRING_7": 0,
          "NOSTRING_8": 16
        }
      },
      "b_yellow": {
        "wins": {
          "NOSTRING_1": 1,
          "NOSTRING_2": 1,
          "NOSTRING_3": 1,
          "NOSTRING_4": 1,
          "NOSTRING_5": 1,
          "NOSTRING_6": 1,
          "NOSTRING_7": 1,
          "NOSTRING_8": 61
        },
        "losses": {
          "NOSTRING_1": 0,
          "NOSTRING_2": 0,
          "NOSTRING_3": 0,
          "NOSTRING_4": 0,
          "NOSTRING_5": 0,
          "NOSTRING_6": 0,
          "NOSTRING_7": 0,
          "NOSTRING_8": 23
        }
      },
      "b_green": {
        "wins": {
          "NOSTRING_1": 1,
          "NOSTRING_2": 1,
          "NOSTRING_3": 1,
          "NOSTRING_4": 1,
          "NOSTRING_5": 1,
          "NOSTRING_6": 1,
          "NOSTRING_7": 1,
          "NOSTRING_8": 25
        },
        "losses": {
          "NOSTRING_1": 0,
          "NOSTRING_2": 0,
          "NOSTRING_3": 0,
          "NOSTRING_4": 0,
          "NOSTRING_5": 0,
          "NOSTRING_6": 0,
          "NOSTRING_7": 0,
          "NOSTRING_8": 64
        }
      },
      "b_black": {
        "wins": {
          "NOSTRING_1": 1,
          "NOSTRING_2": 1,
          "NOSTRING_3": 1,
          "NOSTRING_4": 1,
          "NOSTRING_5": 1,
          "NOSTRING_6": 1,
          "NOSTRING_7": 1,
          "NOSTRING_8": 6
        },
        "losses": {
          "NOSTRING_1": 0,
          "NOSTRING_2": 0,
          "NOSTRING_3": 0,
          "NOSTRING_4": 0,
          "NOSTRING_5": 0,
          "NOSTRING_6": 0,
          "NOSTRING_7": 0,
          "NOSTRING_8": 48
        }
      },
      "b_magic": {
        "wins": {
          "NOSTRING_1": 1,
          "NOSTRING_2": 1,
          "NOSTRING_3": 1,
          "NOSTRING_4": 1,
          "NOSTRING_5": 1,
          "NOSTRING_6": 1,
          "NOSTRING_7": 1,
          "NOSTRING_8": 43
        },
        "losses": {
          "NOSTRING_1": 0,
          "NOSTRING_2": 0,
          "NOSTRING_3": 0,
          "NOSTRING_4": 0,
          "NOSTRING_5": 0,
          "NOSTRING_6": 0,
          "NOSTRING_7": 0,
          "NOSTRING_8": 48
        }
      },
      "b_ghost": {
        "wins": {
          "NOSTRING_1": 1,
          "NOSTRING_2": 1,
          "NOSTRING_3": 1,
          "NOSTRING_4": 1,
          "NOSTRING_5": 1,
          "NOSTRING_6": 1,
          "NOSTRING_7": 1,
          "NOSTRING_8": 22
        },
        "losses": {
          "NOSTRING_1": 0,
          "NOSTRING_2": 0,
          "NOSTRING_3": 0,
          "NOSTRING_4": 0,
          "NOSTRING_5": 0,
          "NOSTRING_6": 0,
          "NOSTRING_7": 0,
          "NOSTRING_8": 29
        }
      },
      "b_abandoned": {
        "wins": {
          "NOSTRING_1": 1,
          "NOSTRING_2": 1,
          "NOSTRING_3": 1,
          "NOSTRING_4": 1,
          "NOSTRING_5": 1,
          "NOSTRING_6": 1,
          "NOSTRING_7": 1,
          "NOSTRING_8": 46
        },
        "losses": {
          "NOSTRING_1": 0,
          "NOSTRING_2": 0,
          "NOSTRING_3": 0,
          "NOSTRING_4": 0,
          "NOSTRING_5": 0,
          "NOSTRING_6": 0,
          "NOSTRING_7": 0,
          "NOSTRING_8": 25
        }
      },
      "b_checkered": {
        "wins": {
          "NOSTRING_1": 1,
        },
        "losses": {
          "NOSTRING_1": 3,
        }
      },
      "b_zodiac": {
        "wins": {
          "NOSTRING_1": 1,
          "NOSTRING_2": 1,
          "NOSTRING_3": 1,
          "NOSTRING_4": 1,
          "NOSTRING_5": 1,
          "NOSTRING_6": 1,
          "NOSTRING_7": 1,
          "NOSTRING_8": 29
        },
        "losses": {
          "NOSTRING_1": 0,
          "NOSTRING_2": 0,
          "NOSTRING_3": 0,
          "NOSTRING_4": 0,
          "NOSTRING_5": 0,
          "NOSTRING_6": 0,
          "NOSTRING_7": 0,
          "NOSTRING_8": 20
        }
      },
      "b_painted": {
        "wins": {
          "NOSTRING_1": 1,
          "NOSTRING_2": 1,
          "NOSTRING_3": 1,
          "NOSTRING_4": 1,
          "NOSTRING_5": 1,
          "NOSTRING_6": 1,
          "NOSTRING_7": 1,
          "NOSTRING_8": 33
        },
        "losses": {
          "NOSTRING_1": 0,
          "NOSTRING_2": 0,
          "NOSTRING_3": 0,
          "NOSTRING_4": 0,
          "NOSTRING_5": 0,
          "NOSTRING_6": 0,
          "NOSTRING_7": 0,
          "NOSTRING_8": 61
        }
      },
      "b_anaglyph": {
        "wins": {
          "NOSTRING_1": 1,
          "NOSTRING_2": 1,
          "NOSTRING_3": 1,
          "NOSTRING_4": 1,
          "NOSTRING_5": 1,
          "NOSTRING_6": 1,
          "NOSTRING_7": 1,
          "NOSTRING_8": 37
        },
        "losses": {
          "NOSTRING_1": 0,
          "NOSTRING_2": 0,
          "NOSTRING_3": 0,
          "NOSTRING_4": 0,
          "NOSTRING_5": 0,
          "NOSTRING_6": 0,
          "NOSTRING_7": 0,
          "NOSTRING_8": 51
        }
      },
      "b_plasma": {
        "wins": {
          "NOSTRING_1": 1,
          "NOSTRING_2": 1,
          "NOSTRING_3": 1,
          "NOSTRING_4": 1,
          "NOSTRING_5": 1,
          "NOSTRING_6": 1,
          "NOSTRING_7": 1,
          "NOSTRING_8": 11
        },
        "losses": {
          "NOSTRING_1": 0,
          "NOSTRING_2": 0,
          "NOSTRING_3": 0,
          "NOSTRING_4": 0,
          "NOSTRING_5": 0,
          "NOSTRING_6": 0,
          "NOSTRING_7": 0,
          "NOSTRING_8": 46
        }
      },
      "b_erratic": {
        "wins": {
          "NOSTRING_1": 1,
          "NOSTRING_2": 1,
          "NOSTRING_3": 1,
          "NOSTRING_4": 1,
          "NOSTRING_5": 1,
          "NOSTRING_6": 1,
          "NOSTRING_7": 1,
          "NOSTRING_8": 21
        },
        "losses": {
          "NOSTRING_1": 0,
          "NOSTRING_2": 0,
          "NOSTRING_3": 0,
          "NOSTRING_4": 0,
          "NOSTRING_5": 0,
          "NOSTRING_6": 0,
          "NOSTRING_7": 0,
          "NOSTRING_8": 34
        }
      },
    }
  };
  const jkr = localStorage.getItem("profilejkr") === null ? defaultJkr : JSON.parse(localStorage.getItem("profilejkr"));
  _updateImageDisplay(jkr.name, jkr.deck_usage);
}

function _updateImageDisplay(profileName, deckUsage) {
  document.getElementById("profileName").innerHTML = profileName;
  loadWins(getDeckStats(deckUsage));
}

function getDeckStats(deckUsage) {
  const decks = {};
  Object.entries(deckUsage).forEach(([k, v]) => {
    const deckName = formatDeckName(k);
    const goldWins = getCount(v.wins.NOSTRING_8);
    const goldLosses = getCount(v.losses.NOSTRING_8);
    const goldGames = goldWins + goldLosses;
    const percent = goldGames === 0 ? undefined : goldWins / goldGames;
    const percentStr = goldGames === 0 ? "-" : formatPercent(goldWins / goldGames);
    const ratio = `${goldWins}/${goldGames}`;

    let rank;
    if (goldGames === 0) {
      rank = "unplayed";
    } else if (goldGames >= 50 && percent >= 0.75) {
      rank = "diamond";
    } else if (goldGames >= 25 && percent >= 0.5) {
      rank = "gold";
    } else if (goldGames >= 10 && percent >= 0.25) {
      rank = "silver";
    } else {
      rank = "bronze";
    }
    
    decks[deckName] = { wins: `${goldWins}W`, percent: percentStr, ratio: ratio, rank: rank };
  });
  return decks;
}

function loadWins(deckStats) {
  const deckNames = ["red", "blue", "yellow", "green", "black", "magic", "nebula", "ghost", "abandoned", "checkered", "zodiac", "painted", "anaglyph", "plasma", "erratic"];
  const defaultDeckStats = { wins: "0W", percent: "-", ratio: "0/0", rank: "unplayed"};
  const ranks = ["rank-bronze", "rank-silver", "rank-gold", "rank-diamond", "rank-unplayed"];

  deckNames.forEach(deckName => {
    const deck = deckStats[deckName] === undefined ? defaultDeckStats : deckStats[deckName];
    const deckSelector = `.deck-${deckName}`;
    document.querySelector(`${deckSelector} .deckPercent`).innerHTML = deck.percent;
    document.querySelector(`${deckSelector} .deckWins`).innerHTML = deck.wins;
    document.querySelector(`${deckSelector} .deckRatio`).innerHTML = deck.ratio;
    const stats = document.querySelector(`${deckSelector} .stats`);
    ranks.forEach((rank) => {
      stats.classList.toggle(rank, rank == `rank-${deck.rank}`);
    })
  });
}

const profilejkr = document.getElementById("profilejkr");
profilejkr.addEventListener("change", updateImageDisplay);
initImageDisplay();

const displayOptions = document.getElementById("displayOptions");
displayOptions.addEventListener("change", setDisplayOption);

function setDisplayOption(event) {
  let centered = false;
  let showWins = false;
  let showRatio = false;
  switch (event.target.value) {
    case "clean":
      centered = true;
      showWins = false;
      showRatio = false;
      break;
    case "wins":
      centered = false;
      showWins = true;
      showRatio = false;
      break;
    case "ratio":
      centered = false;
      showWins = false;
      showRatio = true;
      break;
    default:
      break;
  }
  Array.from(document.querySelectorAll(".deckWins")).forEach(
    (node) => (node.hidden = !showWins),
  );
  Array.from(document.querySelectorAll(".deckRatio")).forEach(
    (node) => (node.hidden = !showRatio),
  );
  if (centered) {
    Array.from(document.querySelectorAll(".stats")).forEach((node) => {
      if (!node.classList.contains("centered")) {
        node.classList.add("centered");
      }
    });
  } else {
    Array.from(document.querySelectorAll(".stats")).forEach((node) =>
      node.classList.remove("centered"),
    );
  }
}

const resetButton = document.getElementById("resetButton");
const confirmResetButton = document.getElementById("confirmResetButton");
const resetButtonFacade = document.getElementById("resetButtonFacade");
const confirmResetButtonFacade = document.getElementById("confirmResetButtonFacade");
resetButton.addEventListener("click", () => {
  resetButton.hidden = true;
  resetButtonFacade.hidden = true;
  confirmResetButton.hidden = false;
  confirmResetButtonFacade.hidden = false;
});
confirmResetButton.addEventListener("click", () => {
  localStorage.removeItem("profilejkr");
  initImageDisplay();
  profilejkr.value = "";
  resetButton.hidden = false;
  resetButtonFacade.hidden = false;
  confirmResetButton.hidden = true;
  confirmResetButtonFacade.hidden = true;
});

document.getElementById("today").innerHTML =
  `${new Date().toLocaleDateString("en-CA")}`;

