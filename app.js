//  -------------React----------------

// const element2 =(
//     <div id="foo">
//         <a>bar</a>
//         <b/>
//     </div>
// );
// ReactDom.render(element2, document.querySelector("#root"))

const createElement = (type, props, ...children) => {
    return {
        type,
        props:{
            ...props,
            children,
        }
    }
}