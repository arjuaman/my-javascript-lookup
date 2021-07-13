let ctx;
onload = ()=>{
  const canvas= document.querySelector("#myCanvas");
  ctx = canvas.getContext('2d');

  // rectangle
    ctx.fillStyle = "#0000FF";
    // ctx.fillRect(10,10,100,80);
    ctx.strokeRect(10,10,100,80);
    // circle
    ctx.beginPath();
    ctx.arc(200, 250, 95, 0, Math.PI * 2, true);
    ctx.stroke();
    //line
    ctx.moveTo(0, 600);
    ctx.lineTo(400, 300);
    ctx.lineTo(800, 600);
    ctx.moveTo(400, 300);
    ctx.lineTo(800, 0);
    ctx.moveTo(200, 250);
    ctx.lineTo(400, 300);
    ctx.stroke();

    const lnrGrd = ctx.createLinearGradient(0,0,250,0);
    lnrGrd.addColorStop(0, "green");
    lnrGrd.addColorStop(1, "white");

    ctx.fillStyle = lnrGrd;
    ctx.fillRect(150, 10, 100, 60);


    const rdlGrd = ctx.createRadialGradient(90,90,75,100, 100, 100);
    rdlGrd.addColorStop(0, "green");
    rdlGrd.addColorStop(1, "orange");
    // text
    ctx.fillStyle = rdlGrd;
    ctx.font = "30px Cooper";
    ctx.textAlign = "center";
    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 10;
    ctx.strokeText("Canvas Text", 600, 250);
    ctx.fillText("Canvas Text", 600, 250);

    const img = new Image();
    img.onload = ()=>{
        /**
         * @param img - image object which want to draw.
         * @param srcX - the x coordinate on the image from where you want to start taking the snapshot.
         * @param srcY - the y coordinate on the image from where you want to start taking the snapshot.
         * @param srcW - the width of the image you want to start taking the snapshot.
         * @param srcH - the height of the image you want to start taking the snapshot.
         * @param destX - the x coord on the canvas where you want to draw the image.
         * @param destY - the y coord on the canvas where you want to draw the image.
         * @param destW - width to be drawn on canvas
         * @param destH - height tp be drawn on canvas
         */
        ctx.drawImage(img, 100, 100, 200, 200, 400, 300, 300, 200);
        /**
         * @param img - image object which want to draw.
         * @param destX - the x coord on the canvas where you want to draw the image.
         * @param destY - the y coord on the canvas where you want to draw the image.
         */
        // ctx.drawImage(img, 100, 100);
    }
    img.src= 'https://th.bing.com/th/id/OIP.EUqVXO3OPOM7sE7psMWcBQHaO0?w=174&h=349&c=7&o=5&dpr=2.5&pid=1.7';
};