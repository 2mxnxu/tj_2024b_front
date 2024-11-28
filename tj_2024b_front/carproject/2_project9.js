let carInfo = [];

  function inCar() {
    let carLocation = document.querySelector(".carLocation").value; 
    let carNum = document.querySelector("#carNumber").value; // ID를 기준으로 선택

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

  }
