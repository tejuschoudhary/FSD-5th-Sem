const container = document.getElementById("root");

console.log(container);

const root = ReactDOM.createRoot(container);
const h21 = <h2>Welcome to jsx</h2>
const h22 = <h1>abes engineering college</h1>
const warpper = <div style = {{border : '2px solid red'}}>{h21}{h22}</div>
const div=
<div style={{}}>
{warpper}
<h2>Heyy.using JSX</h2>
<img></img>
</div>
root.render(div);