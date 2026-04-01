import React,{useState} from "react";

export default function App() {
  const [score, setScore] = useState(2);
  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${(score/10)*100}%`;

    // 2- Compute color (optional)
    let scoreColor;
    if (score<=3){
      scoreColor= "#f3bc47";
    }else if (score<=6){
      scoreColor = "#7cb342";
    }else if (score<=9){
      scoreColor = "#9ccc65";
    }else{
      scoreColor="#b5d6b2";
    }

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
      height: "100%",
      borderRadius: "inherit",
      transition: "width 0.3s ease, background-color 0.3s ease",
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={score} onChange={(e)=>{const val = Math.min(10, Math.max(0, Number(e.target.value)));
          setScore(val);
        }}/>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
