import React, { useState, useEffect } from "react";
import Editor from "../../component/Editor";

export default function App() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  console.log(data);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="ck editor">
      <div className="px-40 my-5">
        <Editor
          name="description"
          onChange={(data) => {
            setData(data);
          }}
          editorLoaded={editorLoaded}
        />

        {data}
      </div>
    </div>
  );
}
