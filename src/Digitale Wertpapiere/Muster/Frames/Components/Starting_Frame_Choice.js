import "./Starting_Frame_Choice.css";

function Starting_Frame_Choice(props) {
  return (
    <div>
      <div id="Starting_Frame_Choice_Wrapper">
        <div id={props.BGColor}>
          <img src={props.img} id="Starting_Frame_Choice_Circle_img" />
        </div>

        <h3 id="Starting_Frame_Choice_h3">{props.title}</h3>

        <h5 id="Starting_Frame_Choice_h5">{props.text}</h5>
      </div>
    </div>
  );
}

export default Starting_Frame_Choice;
