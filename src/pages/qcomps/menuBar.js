export default function MenuBar() {
  return (
    <div>
      <AButton id="btn1" color="red" size="50px">
        Button 1
      </AButton>
      <AButton id="btn2" color="green" size="30px">
        Button 2
      </AButton>
    </div>
  );
}

function AButton(props) {
  const handleClick = () => {
    document.getElementById(`${props.id}`).style.backgroundColor = props.color;
    document.getElementById(`${props.id}`).style.fontSize = props.size;
  }
  return (
    <button id={props.id} onClick={handleClick}>
      {props.children}
    </button>
  );
}
