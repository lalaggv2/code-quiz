// get scores fromlocal storage
// render them to screen

scores = localStorage.getItem('scores')
if (scores) {
    scores = JSON.parse(scores)
}