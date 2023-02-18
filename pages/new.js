import React from "react";
import { useState } from "react";
const New = () => {
  const [file, setFile] = useState("");
  function handleFile(e) {
    let files = e.target.files;
    var file = new Blob(["snfs"], { type: "application/pdf" });
    var fileURL = URL.createObjectURL(file);
    console.log(fileURL);    
  }
  return (
    <div>
      <input type="file" name="file" onChange={(e) => handleFile(e)} />
    </div>
  );
};

export default New;
