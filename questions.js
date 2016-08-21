var q = [];

for (var i=0; i<100; i++) {
    q.push({
        question: "Question"+(i+1),
        options: ["A"+(i+1), "B"+(i+1), "C"+(i+1), "D"+(i+1)],
        answer: Math.floor(Math.random()*4)
    });
}

module.exports = q; /*[{
    question: "Question1",
    options: ["A", "B", "C", "D"],
    answer: 0
}];*/