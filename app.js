const vehicals = [
    [ {
     name: "car",
     item: 1,
     img: "./images/img11-removebg-preview.png"
    },
     {
     name: "car",
     item: 2,
     img: "./images/img22-removebg-preview.png"
    },
     {
     name: "car",
     item: 3,
     img: "./images/img3-removebg-preview.png"
    },
     {
     name: "car",
     item: 4,
     img: "./images/img4-removebg-preview.png"
    },
     {
     name: "car",
     item: 5,
     img: "./images/img5-removebg-preview.png"
    },
     {
     name: "car",
     item: 6,
     img: "./images/img6-removebg-preview.png"
    }
],
    [ {
     name: "bus",
     item: 1,
     img: "./images/bus1-removebg-preview.png"
    },
     {
     name: "bus",
     item: 2,
     img: "./images/bus2-removebg-preview.png"
    },
     {
     name: "bus",
     item: 3,
     img:"./images/bus3-removebg-preview.png"
    },
     {
     name: "bus",
     item: 4,
     img: "./images/bus4-removebg-preview.png"
    },
     {
     name: "bus",
     item: 5,
     img: "./images/bus5-removebg-preview.png"
    },
     {
     name: "bus",
     item: 6,
     img: "./images/bus6-removebg-preview.png"
    }
],
    [ {
     name: "airoplane",
     item: 1,
     img: "images/pia1-removebg-preview.png"
    },
     {
     name: "airoplane",
     item: 2,
     img: "images/pia2-removebg-preview.png"
    },
     {
     name: "airoplane",
     item: 3,
     img: "images/pia3-removebg-preview.png"
    },
     {
     name: "airoplane",
     item: 4,
     img: "images/pia4-removebg-preview.png"
    },
     {
     name: "airoplane",
     item: 5,
     img: "images/pia5-removebg-preview.png"
    },
     {
     name: "airoplane",
     item: 6,
     img: "images/pia6-removebg-preview.png"
    }
],
    [ {
     name: "helicopter",
     item: 1,
     img: "images/helicop1-removebg-preview.png"
    },
     {
     name: "helicopter",
     item: 2,
     img: "images/helicop2-removebg-preview.png"
    },
     {
     name: "helicopter",
     item: 3,
     img: "images/helicop3-removebg-preview.png"
    },
     {
     name: "helicopter",
     item: 4,
     img: "images/helicop4-removebg-preview.png"
    },
     {
     name: "helicopter",
     item: 5,
     img: "images/helicop5-removebg-preview.png"
    },
     {
     name: "helicopter",
     item: 6,
     img: "images/helicop6-removebg-preview.png"
    }
],
    [ {
     name: "riksha",
     item: 1,
     img:"images/riksha1-removebg-preview.png"
    },
     {
     name: "riksha",
     item: 2,
     img: "images/riksha2-removebg-preview.png"
    },
     {
     name: "riksha",
     item: 3,
     img: "images/riksha3-removebg-preview.png"
    },
     {
     name: "riksha",
     item: 4,
     img: "images/riksha4-removebg-preview.png"
    },
     {
     name: "riksha",
     item: 5,
     img: "images/riksha5-removebg-preview.png"
    },
     {
     name: "riksha",
     item: 6,
     img: "images/riksha6-removebg-preview.png"
    }
],
    [ {
     name: "bicycle",
     item: 1,
     img:"images/cycle1-removebg-preview.png"
    },
     {
     name: "bicycle",
     item: 2,
     img: "images/cycle2-removebg-preview.png"
    },
     {
     name: "bicycle",
     item: 3,
     img: "images/cycle3-removebg-preview.png"
    },
     {
     name: "bicycle",
     item: 4,
     img: "images/cycle4-removebg-preview.png"
    },
     {
     name: "bicycle",
     item: 5,
     img: "images/cycle5-removebg-preview.png"
    },
     {
     name: "bicycle",
     item: 6,
     img: "images/cycle6-removebg-preview.png"
    }
],
    [ {
     name: "bike",
     item: 1,
     img:"images/bik1-removebg-preview.png"
    },
     {
     name: "bike",
     item: 2,
     img: "images/bik2-removebg-preview.png"
    },
     {
     name: "bike",
     item: 3,
     img: "images/bik3-removebg-preview.png"
    },
     {
     name: "bike",
     item: 4,
     img: "images/bik4-removebg-preview.png"
    },
     {
     name: "bike",
     item: 5,
     img: "images/bik5-removebg-preview.png"
    },
     {
     name: "bike",
     item: 6,
     img: "images/bik6-removebg-preview.png"
    }
],
    [ {
     name: "trackter",
     item: 1,
     img:"images/trackter1-removebg-preview.png"
    },
     {
     name: "trackter",
     item: 2,
     img: "images/trackter2-removebg-preview.png"
    },
     {
     name: "trackter",
     item: 3,
     img: "images/trackter3-removebg-preview.png"
    },
     {
     name: "trackter",
     item: 4,
     img: "images/trackter4-removebg-preview.png"
    },
     {
     name: "trackter",
     item: 5,
     img: "images/trackter5-removebg-preview.png"
    },
     {
     name: "trackter",
     item: 6,
     img: "images/trackter6-removebg-preview.png"
    }
    ]

]


function searcherFunc() {
vehicals.forEach((val)=> {
    let check = document.getElementById("searcher").value;
    val.forEach((val2) => {
        if (val2.name === check) {
    let div = document.createElement("div");
     let imge = document.createElement("img");
     let para = document.createElement("span");
     let body = document.body;
     imge.src = val2.img;
     imge.setAttribute("class", "myImg");
     para = val2.item;
     body.append(imge);
     body.append("Item " + para);
}
})
})
}