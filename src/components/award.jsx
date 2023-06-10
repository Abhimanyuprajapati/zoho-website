import "../style/Award.css";
const Award = () => {
  return (
    <div className="award">
      <div className="award1">
        <img src="./src/img/img26.svg" alt="photo" />
        <img src="./src/img/img27.svg" alt="photo" />
      </div>
      <div className="award2">
        <div className="award3">
            <div className="award6">
              <img src="./src/img/img28.svg" alt="photo" className="photo1" />
              <p>4.9/5</p>
            </div>
            <div className="award6">
              <img src="./src/img/img30.svg" alt="photo" className="photo2" />
              <p>4.9/5</p>
            </div>
        </div>
       

        <div className="award3">
            <div className="award6">
            <img src="./src/img/img29.svg" alt="photo" className="photo3" />
            <p>4.9/5</p>
            </div>

            <div className="award6">
            <img src="./src/img/img31.svg" alt="photo" className="photo4" />
            <p>4.9/5</p>
            </div>
        </div>


        <div className="award3">
            <div className="award6">
            <img src="./src/img/img32.svg" alt="photo" className="photo5" />
            <p>4.9/5</p>
            </div>
            <div className="award6">
            <img src="./src/img/img33.svg" alt="photo" className="photo6" />
            <p>4.9/5</p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Award;
