let btnEl = document.getElementsByTagName("button")[0];
let thirdHeadEl = document.getElementsByTagName("h3")[0];
btnEl.addEventListener("click", getTrigger);

let url = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
let key = "8Ze9aZCNSujQ3z00p012Ug==6QNvS8xvakTmJeQh";
async function getTrigger() {
    thirdHeadEl.innerText ="Updating...";
  let req = await fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": key,
    },
  });

  let response = await req.json();
  let data = JSON.stringify(response);
  let json = JSON.parse(data);

  thirdHeadEl.innerText = json[0].joke;
}
