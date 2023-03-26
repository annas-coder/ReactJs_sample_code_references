import React from "react";

function Compress(){

    const changeHandler = (event) =>{
        console.log(event)
   

        // const MAX_WIDTH = 320;
        // const MAX_HEIGHT = 180;
        
        const MAX_WIDTH = 1001 
        const MAX_HEIGHT = 478
        const MIME_TYPE = "image/jpeg";
        const QUALITY = 0.7;
        
        // input.onchange = function (ev) {
          const file = event.target.files[0]; // get the file
          const blobURL = URL.createObjectURL(file);
          const img = new Image();
          img.src = blobURL;
          img.onerror = function () {
            URL.revokeObjectURL(this.src);
            console.log("Cannot load image");
          };
          img.onload = function () {
            URL.revokeObjectURL(this.src);
            const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
            const canvas = document.createElement("canvas");
            canvas.width = newWidth;
            canvas.height = newHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, newWidth, newHeight);

            canvas.toBlob(
              (blob) => {
                const file = new FileReader()
                file.readAsDataURL(blob)
                file.onload=()=>{
                  const downloadLink = document.createElement("a");
                  downloadLink.href = file.result;
                  downloadLink.download = new Date().getTime();
                  downloadLink.click();
                }
              },
              MIME_TYPE,
              QUALITY
            );
          };

          // const a = document.createElement("a")
          // a.href=canvas.toDataURL("image/jpeg",1.0)
          // a.download = new Date().getTime()
    }

    function calculateSize(img, maxWidth, maxHeight) {
        let width = img.width;
        let height = img.height;
        
        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }
        return [width, height];
      }

    return(
        <div>   
            <input type="file" onChange={(e)=>changeHandler(e)}/>
        </div>
    )
}

export default Compress;
