let carInfo = [];

  function inCar() {
    let carLocation = document.querySelector(".carLocation").value; 
    let carNum = document.querySelector(".carNumber").value; 

    if (carLocation === "none" || carNum === "") {
      alert("주차 자리와 차량 번호를 모두 입력해주세요!");
      return;
    }

    let today = new Date();   
        let hours = today.getHours(); 
        let minutes = today.getMinutes();  
        let seconds = today.getSeconds();  
            let time = `${hours}:${minutes}:${seconds}`

    let board = `${carLocation}, ${carNum}, ${time}`;
    carInfo.push(board);
    console.log(carInfo);

    /*
    for(let index = 0; index <=carInfo.length -1; index++) {
      if(carInfo[0].split[','][1]) {
          alert("이미 선택된 자리입니다. 다른 자리를 선택해주세요!");
        return;
      }
      else {
        alert(`${carLocation[index]}선택되었습니다`);
      }

    }
    */

  }
