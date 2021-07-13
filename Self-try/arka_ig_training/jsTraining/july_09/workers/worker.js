onmessage = (e) => {
    console.log("I am web Worker, main send me ", e);
    console.log(" Data is : ", e.data);
    postMessage("Thank you for data");
}