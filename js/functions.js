const exercises = [
    "Hengitä syvään sisään seitsemän sekunnin ajan, pidätä hengitystä kahdeksan sekunnin ajan ja ulsohengitys neljän sekunnin ajan. Toista kaksi kertaa.",
    "Sulje silmäsi ja kuvittele rauhallinen paikka minuutin ajan.",
    "Venytä kätesi ylös ja pidä kymmenen sekuntia. Muista pitää hartiat rentoina!",
    "Istu mukavasti ja hengitä rauhallisesti palleasta saakka. Laita silmät  kiinni ja tuo katse oikealle reunaan. Hengitä näin viiden hengityksen ajan.",
    "Keskity rentouttamaan leuka, laske kielesi alas keskelle suuta ja älä paina hampaita yhteen."
  ];
  
  const exerciseButton = document.getElementById("exerciseButton");
  const exerciseText = document.getElementById("exerciseText");
  
  exerciseButton.addEventListener("click", () => {
    const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
    exerciseText.textContent = randomExercise;
  });
  
  
