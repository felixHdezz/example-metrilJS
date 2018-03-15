/* Init file */
var root = document.body

m.render(root, [
    m("main", [
        m("h1", {class: "title"}, "My first app"),
        m("button", "A button"),
    ])
])
