import React, {useState} from "react";
import {ChromePicker} from "react-color";

function Form() {
  //Color state
  const [color, setColor] = useState("#884545");
  //Title State
  const [title, setTitle] = useState("");
  //Text state
  const [text, setText] = useState("");
  //Direction state
  const [direction, setDirection] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    console.log(`${color} ${title} ${text} ${direction}`);
  };

  return (
    <div className="card text-white bg-dark ml2">
      <div className="card-header p4" style={{textAlign: "center"}}>
        Welcome User!
      </div>
      <div className="card-body" style={{marginLeft: "12px"}}>
        <div className="form">
          <form onSubmit={onSubmit}>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label>Pick a color</label>
                <ChromePicker
                  color={color}
                  disableAlpha={true}
                  onChange={updatedColor => setColor(updatedColor.hex)}
                />
                <div
                  style={{
                    backgroundColor: color,
                    width: "225px",
                    transition: "ease all 500ms",
                    textAlign: "center",
                  }}
                >
                  <p>Selected color</p>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-3">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  id="inputCity"
                />
              </div>

              <div className="form-group col-md-4">
                <label>Text</label>
                <textarea
                  placeholder="Text"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="1"
                  value={text}
                  onChange={e => setText(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label>Menu Direction</label>
                <select
                  id="inputState"
                  className="form-control"
                  placeholder="Choose One"
                  value={direction}
                  onChange={e => setDirection(e.target.value)}
                >
                  <option selected>Choose One..</option>
                  <option value="right">Right</option>
                  <option value="left">Left</option>
                </select>
              </div>
              <div className="form-group col-md-4  mb-4">
                <label>Upload Logo</label>
                <div>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                    />
                    <label className="custom-file-label" for="inputGroupFile01">
                      Choose file
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
