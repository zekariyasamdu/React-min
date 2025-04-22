// const element = document.createElement('h1');
// element.title = "foo";
// element.innerHTML = "Hello";
// let container = document.querySelector("#root")
// contanier.appendChild(element);

//      ----------React------------- 
// const element = <h1 title="foo">Hello</h1>
// ReactDom.render(element, document.querySelector("#root"))
const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello"
    }
}
let container = document.querySelector("#root")

const Node = document.createElement(element.type);
Node.title = element.props.title

const text = document.createTextNode("")
text.nodeValue = element.props.children
Node.appendChild(text)
container.appendChild(Node)