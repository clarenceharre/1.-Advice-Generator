function generateAdvice(args) {
  return new Promise((resolve) => {
    const id = Math.floor(Math.random() * 215);
    fetch(`https://api.adviceslip.com/advice/${id}`).then((response) =>
      resolve(response.json())
    );
  });
}

const asyncHandler = async (...args) => {
  let result = await generateAdvice(args);
  let { id, advice } = result.slip;
  console.log(id, advice);
  let title = `<p>ADVICE #${id}</p>`;
  let content = `<p>"${advice}"</p>`;
  $("#title").empty();
  $("#quote").empty();
  $("#title").append(title);
  $("#quote").append(content);
};

window.onload = asyncHandler();
