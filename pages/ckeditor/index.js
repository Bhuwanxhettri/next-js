import React, { useState, useEffect } from "react";
// import Editor from "../../component/Editor";
import { CKEditor } from "ckeditor4-react";

export default function App() {
  
  const [formValues, setFormValues] = useState([{ key: "", value : ""}])

  let handleChange = (i, e) => {
      let newFormValues = [...formValues];
      newFormValues[i][e.target.name] = e.target.value;
      setFormValues(newFormValues);
    }
  
  let addFormFields = () => {
      setFormValues([...formValues, { key: "", value: "" }])
    }
  
  let removeFormFields = (i) => {
      let newFormValues = [...formValues];
      newFormValues.splice(i, 1);
      setFormValues(newFormValues)
  }
  
  let handleSubmit = (event) => {
      event.preventDefault();
      alert(JSON.stringify(formValues));
  }
  return (
    <div className="px-40 my-5">
          <h1>hello</h1>
          <form  onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
             
              <input type="text" name="key"  onChange={e => handleChange(index, e)} />
           
              <input type="text" name="value" v onChange={e => handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>X</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>
      {/* 
      <CKEditor
                initData="<p>Hello from CKEditor 4!</p>"
                onInstanceReady={ () => {
                    alert( 'Editor is ready!' );
                } }
            /> */}

      {/* <Editor
          name="description"
          onChange={(data) => {
            setData(data);
          }}
          editorLoaded={editorLoaded}
        /> */}

      {/* <span
                          dangerouslySetInnerHTML={{
                              __html:data,
                            }}
                        />
     
      </div> */}
    </div>
  );
}
