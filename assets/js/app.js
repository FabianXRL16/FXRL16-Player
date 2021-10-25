let inputShow = true;

function search(){
    toShowInput()
}

function toShowInput() {
    let input = document.querySelector("#inputSearch");
    let containerList = document.querySelector(".containerList");
  if (inputShow) {
    input.style.transform = "translateY(-50px)";
    input.style.transition = ".3s";

    containerList.style.paddingTop = "60px";
    containerList.style.transition = ".3s";
  } else {
    input.style.transform = "translateY(0)";
    input.style.transition = ".3s";

    containerList.style.paddingTop = "110px";
    containerList.style.transition = ".3s";
  }
  inputShow = !inputShow
  input.value = ""
}
