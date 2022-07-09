// You can call requestIdleCallback() within an idle callback function
// to schedule another callback to take place no sooner than the next pass through the event loop.

function mySetTimeout(callback,delay){
    var startTime= Date.now();
    function check() {
      if(Date.now() > startTime+delay){
        callback();
      }
      else requestIdleCallback(check);
    }
    requestIdleCallback(check);
  }
  
  mySetTimeout(()=>{
    console.log("hi")
  },1000)